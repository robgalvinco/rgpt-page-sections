const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');

// Configuration
const INCOMING_FOLDER = './incoming';
const READY_FOLDER = './needs-info';

// Ensure directories exist
async function ensureDirectories() {
  try {
    await fs.mkdir(INCOMING_FOLDER, { recursive: true });
    await fs.mkdir(READY_FOLDER, { recursive: true });
    console.log('Directories ensured');
  } catch (error) {
    console.error('Error creating directories:', error);
  }
}

// Generate markdown content
function generateMarkdownContent(filename) {
  return `---
image: ${filename}
categories:
  - Call To Action
video:
---
Create this section as close as to the design as you can replicate it. The section essentially contains two columns. The first column contains a heading and a paragraph the second column is positioned all the way to the right of the section and it has two buttons that are stacked on top of each other. The section itself has a few elements first, there's a background color, but we also want to place a subtle blurry, Grady and blob in the lower right hand corner so that the section doesn't feel so flat`;
}

// Process new JPG file
async function processJpgFile(filePath) {
  try {
    const filename = path.basename(filePath);
    const nameWithoutExt = path.parse(filename).name;
    
    console.log(`Processing new file: ${filename}`);
    
    // 1. Copy JPG file to ready folder
    const readyJpgPath = path.join(READY_FOLDER, filename);
    await fs.copyFile(filePath, readyJpgPath);
    console.log(`✓ Copied ${filename} to ready folder`);
    
    // 2. Create markdown file with same name
    const markdownPath = path.join(READY_FOLDER, `${nameWithoutExt}.md`);
    const markdownContent = generateMarkdownContent(filename);
    await fs.writeFile(markdownPath, markdownContent);
    console.log(`✓ Created ${nameWithoutExt}.md with frontmatter`);
    
    // 3. Remove the original file from incoming folder
    await fs.unlink(filePath);
    console.log(`✓ Removed ${filename} from incoming folder`);
    
    console.log(`Successfully processed: ${filename}\n`);
    
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Main monitoring function
async function startMonitoring() {
  await ensureDirectories();
  
  console.log(`Starting to monitor: ${INCOMING_FOLDER}`);
  console.log('Waiting for new .jpg files...\n');
  
  // Watch for new files in the incoming folder
  const watcher = chokidar.watch(INCOMING_FOLDER, {
    ignored: /^\./, // ignore dotfiles
    persistent: true,
    ignoreInitial: true // only watch for new files, not existing ones
  });
  
  // Handle new file events
  watcher.on('add', (filePath) => {
    // Check if it's a JPG file (case insensitive)
    if (path.extname(filePath).toLowerCase() === '.jpg') {
      processJpgFile(filePath);
    }
  });
  
  // Handle errors
  watcher.on('error', (error) => {
    console.error('Watcher error:', error);
  });
  
  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('\nShutting down file monitor...');
    watcher.close();
    process.exit(0);
  });
}

// Start the application
startMonitoring().catch(console.error);