// VELMARA — a travel poster for a place that isn't there.
//
// main.ts writes the bundled poster to /output/entry.png.
// It does nothing but copy one file: no network, no dependencies,
// and the output bytes are identical on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "poster.jpg"), join(outDir, "entry.png"));
