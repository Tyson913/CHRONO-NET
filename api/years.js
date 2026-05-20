const { loadChrononetData, getDataSummary } = require('../backend/extractChrononetData');

let cachedYears;

function getYears() {
  if (!cachedYears) {
    cachedYears = loadChrononetData();
  }

  return cachedYears;
}

module.exports = function handler(request, response) {
  const years = getYears();

  response.setHeader('content-type', 'application/json; charset=utf-8');
  response.setHeader('cache-control', 's-maxage=3600, stale-while-revalidate=86400');
  response.statusCode = 200;
  response.end(JSON.stringify({
    source: 'vercel-local-data',
    years,
    summary: getDataSummary(years),
  }));
};
