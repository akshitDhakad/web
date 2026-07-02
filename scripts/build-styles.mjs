import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const files = [
  "base.css",
  "header.css",
  "banner.css",
  "buttons.css",
  "sections.css",
  "features.css",
  "about.css",
  "faq.css",
  "services.css",
  "testimonials.css",
  "blog.css",
  "blog-pages.css",
  "pages.css",
  "jobs.css",
  "cta.css",
  "footer.css",
];

const banner = "/* Auto-generated from styles/banca/*.css — do not edit directly */\n";
const content = files
  .map((file) => readFileSync(join(root, "styles", "banca", file), "utf8"))
  .join("\n");

writeFileSync(join(root, "styles", "banca.css"), banner + content, "utf8");
console.log(`Built styles/banca.css (${files.length} files)`);
