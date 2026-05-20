const { loadChrononetData } = require('../../backend/extractChrononetData');

let cachedYears;

function getYears() {
  if (!cachedYears) {
    cachedYears = loadChrononetData();
  }

  return cachedYears;
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

module.exports = function handler(request, response) {
  const year = Number(request.query.year);
  const years = getYears();

  response.setHeader('content-type', 'application/json; charset=utf-8');
  response.setHeader('cache-control', 's-maxage=3600, stale-while-revalidate=86400');

  if (!Number.isInteger(year)) {
    response.statusCode = 400;
    response.end(JSON.stringify({ error: 'Invalid year' }));
    return;
  }

  response.statusCode = 200;
  response.end(JSON.stringify({
    source: 'vercel-local-data',
    ...closestYearPayload(year, years),
  }));
};
