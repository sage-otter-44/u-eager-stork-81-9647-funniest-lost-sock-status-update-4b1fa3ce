import { writeFileSync, mkdirSync } from "node:fs";

// A lost sock's status update: specific scene up front, twist in the last words.
const parts = [
  "Day 12 inside the vacuum.",
  "Loud, dark, but he actually listens.",
  "Tell my partner I'm not coming home.",
];
const text = parts.join(" ");
if (text.length > 120) throw new Error(`entry too long: ${text.length} chars`);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
