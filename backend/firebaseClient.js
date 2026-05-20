const { loadEnv } = require('./env');

loadEnv();

function getDatabaseUrl() {
  const raw =
    process.env.FIREBASE_REALDB ||
    process.env.FIREBASE_DATABASE_URL ||
    process.env.FIREBASE_REALTIME_DATABASE_URL ||
    '';

  return raw.trim().replace(/\/+$/, '');
}

function buildUrl(pathname) {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error('Missing FIREBASE_REALDB in .env');
  }

  const normalizedPath = String(pathname || '').replace(/^\/+/, '');
  const url = new URL(`${databaseUrl}/${normalizedPath}.json`);

  if (process.env.FIREBASE_AUTH_TOKEN) {
    url.searchParams.set('auth', process.env.FIREBASE_AUTH_TOKEN);
  }

  return url;
}

async function request(pathname, options = {}) {
  const response = await fetch(buildUrl(pathname), {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  let body = null;

  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }

  if (!response.ok) {
    const message =
      body && typeof body === 'object' && body.error
        ? body.error
        : `Firebase request failed with ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.body = body;
    throw error;
  }

  return body;
}

function getYears() {
  return request('years');
}

function putYears(years) {
  return request('years', {
    method: 'PUT',
    body: JSON.stringify(years),
  });
}

function putMeta(meta) {
  return request('meta', {
    method: 'PUT',
    body: JSON.stringify(meta),
  });
}

module.exports = {
  getDatabaseUrl,
  getYears,
  putYears,
  putMeta,
};
