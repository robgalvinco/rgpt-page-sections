const fs = require('fs-extra');
const path = require('path');

// 🛠️ Configuration (edit this section as needed)
const targetDir = path.join(__dirname, 'image-prompt-library', 'pricing-sections');
const categories = ['Pricing'];
const defaultPrompt = 'Create this section as close as to the design as you can replicate it.';

// 🔍 Scan the folder and create missing .md files
(async () => {
  const files = await fs.readdir(targetDir);
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const mdFile = path.join(targetDir, `${baseName}.md`);

    if (!await fs.pathExists(mdFile)) {
      const content = `---\nimage: ${file}\ncategories:\n${categories.map(c => `  - ${c}`).join('\n')}\nvideo:\n---\n${defaultPrompt}\n`;
      await fs.writeFile(mdFile, content, 'utf8');
      console.log(`✅ Created: ${baseName}.md`);
      count++;
    }
  }

  console.log(`✨ Done. ${count} markdown files created in "${targetDir}".`);
})();
