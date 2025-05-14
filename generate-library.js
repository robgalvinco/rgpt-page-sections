const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

const baseDir = path.join(__dirname, 'image-prompt-library'); // your image+markdown folders
const outputFile = path.join(__dirname, 'library.json');       // output JSON file

// Recursively walk folders and build prompt entries
const walkFolders = async (dir) => {
  const items = await fs.readdir(dir, { withFileTypes: true });
  let results = [];

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      const subResults = await walkFolders(fullPath);
      results.push(...subResults);
    } else if (item.name.endsWith('.md')) {
      const mdContent = await fs.readFile(fullPath, 'utf-8');
      const { data, content } = matter(mdContent);

      const folderName = path.relative(baseDir, path.dirname(fullPath));
      const imageFile = data.image || '';
      const fileBaseName = path.basename(imageFile, path.extname(imageFile));

      // Generate short, stable, human-readable ID
      const id = `${folderName}-${fileBaseName}`.replace(/\s+/g, '-').toLowerCase();

      // Normalize path for cross-platform consistency
      const imagePath = path.join(folderName, imageFile).replace(/\\/g, '/');

      results.push({
        id,
        image: imagePath,
        prompt: content.trim(),
        categories: data.categories || [],
        video: data.video || ''
      });
    }
  }

  return results;
};

// Main runner
(async () => {
  try {
    const entries = await walkFolders(baseDir);
    await fs.writeJson(outputFile, entries, { spaces: 2 });
    console.log(`✅ Generated ${entries.length} items in library.json`);
  } catch (err) {
    console.error('❌ Error generating JSON:', err);
  }
})();
