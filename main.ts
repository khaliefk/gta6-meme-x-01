// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme posted from a public
// account, whose address POST.json names. The house reads the post from
// X (its first picture and its text) and hands that to the judge. This
// program only carries POST.json from the repository root to /output,
// where the gate reads it. Nothing it writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

// POST.json must name the live post: https://x.com/<handle>/status/<id>.
// A placeholder or anything else means the entry has no post to judge,
// so stop here instead of copying a dead pointer into /output.
let postUrl: string;
try {
  postUrl = JSON.parse(readFileSync(source, 'utf8')).url;
} catch (error) {
  console.error(`could not read POST.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}

if (typeof postUrl !== 'string' || !/^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/.test(postUrl)) {
  console.error(`POST.json url is not a live X post URL (expected https://x.com/<handle>/status/<id>): ${postUrl}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy POST.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
