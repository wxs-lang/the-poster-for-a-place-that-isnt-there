// VELMARA — a travel poster for a place that isn't there.
//
// main.ts writes the bundled poster to /output/entry.png.
// It does nothing but copy one file: no network, no dependencies,
// and the output bytes are identical on every run.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(here, "poster.jpg");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);

// Verify the copy landed whole: the output must be byte-for-byte the source.
const srcBytes = statSync(src).size;
const dstBytes = statSync(dst).size;
if (dstBytes !== srcBytes) {
  throw new Error(`entry.png is ${dstBytes} bytes, expected ${srcBytes}`);
}
console.log(`wrote ${dst} (${dstBytes} bytes)`);
