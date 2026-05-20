const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DEFAULT_SOURCE = path.join(__dirname, '..', 'chrononet.js');

function findDataObjectLiteral(source) {
  const marker = 'const DATA =';
  const markerIndex = source.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error('Could not find "const DATA =" in chrononet.js');
  }

  const objectStart = source.indexOf('{', markerIndex);
  if (objectStart === -1) {
    throw new Error('Could not find DATA object start');
  }

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = objectStart; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '/' && next === '/') {
      const newline = source.indexOf('\n', index + 2);
      index = newline === -1 ? source.length : newline;
      continue;
    }

    if (char === '/' && next === '*') {
      const close = source.indexOf('*/', index + 2);
      index = close === -1 ? source.length : close + 1;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(objectStart, index + 1);
      }
    }
  }

  throw new Error('Could not find DATA object end');
}

function loadChrononetData(sourcePath = DEFAULT_SOURCE) {
  const source = fs.readFileSync(sourcePath, 'utf8');
  const objectLiteral = findDataObjectLiteral(source);
  return vm.runInNewContext(`(${objectLiteral})`, {}, { timeout: 5000 });
}

function getDataSummary(data) {
  const years = Object.keys(data).map(Number).sort((a, b) => a - b);
  const artifacts = years.reduce((total, year) => {
    const entry = data[year] || {};
    return (
      total +
      ['videos', 'music', 'memes', 'sites', 'events'].reduce(
        (sum, key) => sum + (Array.isArray(entry[key]) ? entry[key].length : 0),
        0,
      )
    );
  }, 0);

  return {
    years: years.length,
    firstYear: years[0] || null,
    lastYear: years[years.length - 1] || null,
    artifacts,
  };
}

module.exports = {
  findDataObjectLiteral,
  loadChrononetData,
  getDataSummary,
};
