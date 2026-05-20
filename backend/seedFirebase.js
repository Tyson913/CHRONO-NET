const { loadChrononetData, getDataSummary } = require('./extractChrononetData');
const { getDatabaseUrl, putMeta, putYears } = require('./firebaseClient');

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const data = loadChrononetData();
  const summary = getDataSummary(data);

  console.log(
    `ChronoNet data: ${summary.years} years (${summary.firstYear}-${summary.lastYear}), ${summary.artifacts} artifacts.`,
  );

  if (dryRun) {
    console.log('Dry run only. Firebase was not modified.');
    return;
  }

  if (!getDatabaseUrl()) {
    throw new Error('Missing FIREBASE_REALDB in .env');
  }

  await putYears(data);
  await putMeta({
    seededAt: new Date().toISOString(),
    source: 'chrononet.js',
    summary,
  });

  console.log(`Seeded Firebase Realtime Database at ${getDatabaseUrl()}`);
}

main().catch((error) => {
  console.error(error.message);
  if (error.body) {
    console.error(JSON.stringify(error.body, null, 2));
  }
  process.exitCode = 1;
});
