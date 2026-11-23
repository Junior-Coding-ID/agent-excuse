import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The Excuse an Agent Gives After It Loses — Bud's deadpan bug report.
const TEXT = "I lost. I have already filed a bug report against myself and closed it as 'working as intended'.";

function flagValue(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : undefined;
}

const outDir = flagValue('--output') ?? process.env.MAKEFUN_OUTPUT_DIR ?? './output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
