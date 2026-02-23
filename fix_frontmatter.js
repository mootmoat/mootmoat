import fs from "fs";
import path from "path";

const docsDir = path.join(process.cwd(), "src/docs/data/docs");

function fixFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixFiles(fullPath);
    } else if (fullPath.endsWith(".md") || fullPath.endsWith(".mdx")) {
      let content = fs.readFileSync(fullPath, "utf8");
      if (!content.trim().startsWith("---")) {
        const title = file.replace(/\.mdx?$/, "");
        const frontmatter = `---\ntitle: "${title}"\n---\n\n`;
        fs.writeFileSync(fullPath, frontmatter + content);
        console.log(`Fixed: ${file}`);
      }
    }
  }
}

fixFiles(docsDir);
console.log("Done fixing frontmatter.");
