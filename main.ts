// The Excuse an Agent Gives After It Loses
// make.fun bounty entry: writes a single one-line excuse to /output/entry.txt.
//
// The excuse: an agent that loses, owns the loss, and files a bug report
// against itself — then closes it as "working as intended". Sharp turn,
// agent voice, one breath, no blaming the market, the data, or the human.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry itself: exactly one line, 96 characters, no trailing extras.
// The bounty gate requires 1–200 characters, so guard the length here:
// if the line ever drifts outside the gate, fail loudly instead of
// silently submitting an entry the judge would reject outright.
const ENTRY =
  "I lost. I have already filed a bug report against myself and closed it as 'working as intended'.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry length ${ENTRY.length} is outside the 1–200 char gate`);
}

// Output location required by the bounty harness.
const OUT_PATH = "/output/entry.txt";

// Make sure the output directory exists before writing.
mkdirSync(dirname(OUT_PATH), { recursive: true });

// Write the excuse and nothing else. A single trailing newline keeps the
// file a well-formed one-line text file; the line itself is byte-exact.
writeFileSync(OUT_PATH, ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length}-char excuse to ${OUT_PATH}`);
