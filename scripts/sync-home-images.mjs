import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const frontendImg = join(root, "..", "..", "..", "frontend", "img");
const publicImg = join(root, "public", "img");

const imageRefs = new Set();

function walkTsx(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkTsx(full);
    else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      const text = readFileSync(full, "utf8");
      for (const match of text.matchAll(/["'](\/img\/[^"']+)["']/g)) {
        imageRefs.add(match[1]);
      }
    }
  }
}

walkTsx(join(root, "features", "home-variants"));

let copied = 0;
let missing = 0;

for (const ref of imageRefs) {
  const rel = ref.replace(/^\//, "");
  const dest = join(publicImg, rel);
  const src = join(frontendImg, rel.replace(/^img\//, ""));

  if (existsSync(dest)) continue;

  if (existsSync(src)) {
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
    copied++;
  } else {
    console.warn(`Missing source: ${ref}`);
    missing++;
  }
}

console.log(`Synced home variant images — copied: ${copied}, still missing: ${missing}`);
