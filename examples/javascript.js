// Filter and rank the platforms dataset.
//
//   node javascript.js
//
// No dependencies. Works in Node 18+.

const URL =
  "https://raw.githubusercontent.com/lucaspowell8020/ai-agent-platforms/main/platforms.json";

const data = await fetch(URL).then((r) => r.json());

console.log(`Verified: ${data.verifiedDate}`);
console.log(`Total platforms: ${data.platforms.length}\n`);

// Top picks per category
const byCategory = {};
for (const p of data.platforms) {
  (byCategory[p.category] ??= []).push(p);
}

for (const [category, list] of Object.entries(byCategory)) {
  const top = list.sort((a, b) => b.rating - a.rating)[0];
  console.log(`${category.toUpperCase()}: ${top.name} (${top.rating}) — ${top.bestFor}`);
}

console.log("\nOpen-source picks for builders comfortable with code:\n");
const oss = data.platforms.filter(
  (p) => p.openSource && p.techLevel !== "no-code"
);
for (const p of oss.sort((a, b) => b.rating - a.rating)) {
  console.log(`  ${p.name.padEnd(20)} ${p.rating}  ${p.tagline}`);
}
