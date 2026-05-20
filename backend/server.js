const fs = require('fs');
const http = require('http');
const path = require('path');
const { loadEnv } = require('./env');
const { getDatabaseUrl, getYears } = require('./firebaseClient');
const { loadChrononetData, getDataSummary } = require('./extractChrononetData');

loadEnv();

const ROOT = path.join(__dirname, '..');
const PORT = Number(process.env.PORT || 3000);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

let cachedLocalData;

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  response.end(JSON.stringify(body));
}

function getLocalData() {
  if (!cachedLocalData) {
    cachedLocalData = loadChrononetData();
  }
  return cachedLocalData;
}

function closestYearPayload(year, years) {
  const numericYears = Object.keys(years).map(Number).sort((a, b) => a - b);
  let closest = numericYears[0];

  for (const candidate of numericYears) {
    if (candidate <= year) {
      closest = candidate;
    }
  }

  return {
    requestedYear: year,
    closestYear: closest,
    data: years[closest],
  };
}

async function getArchiveData() {
  try {
    const years = await getYears();

    if (years && typeof years === 'object' && Object.keys(years).length > 0) {
      return {
        source: 'firebase',
        years,
        summary: getDataSummary(years),
      };
    }

    return {
      source: 'local-fallback-empty-firebase',
      years: getLocalData(),
      summary: getDataSummary(getLocalData()),
    };
  } catch (error) {
    return {
      source: 'local-fallback-firebase-error',
      firebaseError: error.message,
      years: getLocalData(),
      summary: getDataSummary(getLocalData()),
    };
  }
}

async function handleApi(request, response, url) {
  if (url.pathname === '/api/health') {
    sendJson(response, 200, {
      ok: true,
      firebaseConfigured: Boolean(getDatabaseUrl()),
      firebaseUrl: getDatabaseUrl() || null,
    });
    return;
  }

  if (url.pathname === '/api/years') {
    const archive = await getArchiveData();
    sendJson(response, 200, archive);
    return;
  }

  const yearMatch = url.pathname.match(/^\/api\/years\/(\d{4})$/);
  if (yearMatch) {
    const archive = await getArchiveData();
    const payload = closestYearPayload(Number(yearMatch[1]), archive.years);
    sendJson(response, 200, {
      source: archive.source,
      ...payload,
    });
    return;
  }

  sendJson(response, 404, { error: 'API route not found' });
}

function serveStatic(response, pathname) {
  const requestedPath = pathname === '/' ? '/chrononet.html' : pathname;
  const decodedPath = decodeURIComponent(requestedPath);
  const filePath = path.normalize(path.join(ROOT, decodedPath));

  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, contents) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500, {
        'content-type': 'text/plain; charset=utf-8',
      });
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }

    response.writeHead(200, {
      'content-type': MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
    });
    response.end(contents);
  });
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

  if (url.pathname.startsWith('/api/')) {
    handleApi(request, response, url).catch((error) => {
      sendJson(response, 500, { error: error.message });
    });
    return;
  }

  serveStatic(response, url.pathname);
});

server.listen(PORT, () => {
  console.log(`ChronoNet backend running at http://localhost:${PORT}`);
});
