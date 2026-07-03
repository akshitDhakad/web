import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const templateRoot = join(root, "..", "..", "..", "frontend", "css");

function processTemplateCss(css) {
  return css
    .replace(/@import\s+url\([^)]+\)\s*;/g, "")
    .replace(/^\d+;\d+&display=swap"\);\s*$/gm, "")
    .replace(/url\(\s*["']?\.\.\/img\/([^"')]+)["']?\s*\)/g, "url(/img/$1)")
    .replace(/var\(-([a-zA-Z0-9_]+)\)/g, "var(--$1)");
}

const styleCss = readFileSync(join(templateRoot, "style.css"), "utf8");
const defaultCss = readFileSync(join(templateRoot, "default.css"), "utf8");
const responsiveCss = readFileSync(join(templateRoot, "responsive.css"), "utf8");

const output =
  "/* Processed Banca template styles for home variant pages */\n" +
  processTemplateCss(styleCss) +
  "\n" +
  processTemplateCss(defaultCss) +
  "\n" +
  processTemplateCss(responsiveCss);

writeFileSync(join(root, "styles", "home-variants.css"), output, "utf8");
console.log("Built styles/home-variants.css");
