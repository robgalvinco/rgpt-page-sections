const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const PDFDocument = require('pdfkit');
const matter = require('gray-matter');

async function createPDFFromImagesAndMarkdown(inputDir, outputPath) {
  try {
    // Get all files in the directory
    const files = await fsPromises.readdir(inputDir);
    
    // Group files by their base name (without extension)
    const fileGroups = {};
    
    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);
      
      if (!fileGroups[baseName]) {
        fileGroups[baseName] = {};
      }
      
      if (ext === '.jpg' || ext === '.jpeg') {
        fileGroups[baseName].image = path.join(inputDir, file);
      } else if (ext === '.md') {
        fileGroups[baseName].markdown = path.join(inputDir, file);
      }
    });
    
    // Filter to only include groups that have both image and markdown
    const completeGroups = Object.entries(fileGroups)
      .filter(([name, group]) => group.image && group.markdown)
      .sort(([a], [b]) => a.localeCompare(b)); // Sort alphabetically
    
    if (completeGroups.length === 0) {
      console.log('No matching image/markdown pairs found');
      return;
    }
    
    console.log(`Found ${completeGroups.length} image/markdown pairs`);
    
    // Create PDF document
    const doc = new PDFDocument({ 
      margin: 50,
      size: 'A4'
    });
    
    // Pipe the PDF to a file
    doc.pipe(fs.createWriteStream(outputPath));
    
    // Process each group
    for (let i = 0; i < completeGroups.length; i++) {
      const [name, group] = completeGroups[i];
      console.log(`Processing: ${name}`);
      
      // Add new page (except for the first one)
      if (i > 0) {
        doc.addPage();
      }
      
      // Add title
      doc.fontSize(16)
         .font('Helvetica-Bold')
         .text(name, { align: 'center' })
         .moveDown();
      
      // Add image
      try {
        const imageBuffer = await fsPromises.readFile(group.image);
        
        // Calculate image dimensions to fit on page
        const maxWidth = doc.page.width - 100; // Account for margins
        const maxHeight = doc.page.height / 2 - 100; // Use half page for image
        
        doc.image(imageBuffer, {
          fit: [maxWidth, maxHeight],
          align: 'center'
        });
        
        doc.moveDown(2);
        
      } catch (imageError) {
        console.error(`Error loading image ${group.image}:`, imageError.message);
        doc.fontSize(12)
           .font('Helvetica')
           .text(`[Error loading image: ${group.image}]`)
           .moveDown();
      }
      
      // Process markdown file
      try {
        const markdownContent = await fsPromises.readFile(group.markdown, 'utf8');
        const parsed = matter(markdownContent);
        
        // Extract design notes section
        const designNotes = extractDesignNotes(parsed.content);
        
        if (designNotes) {
        //   doc.fontSize(14)
        //      .font('Helvetica-Bold')
        //      .text('Design Notes:', { continued: false })
        //      .moveDown(0.5);
          
          doc.fontSize(11)
             .font('Helvetica')
             .text(designNotes, {
               align: 'left',
               lineGap: 2
             });
        } else {
          doc.fontSize(11)
             .font('Helvetica-Oblique')
             .text('[No design notes found]');
        }
        
      } catch (markdownError) {
        console.error(`Error processing markdown ${group.markdown}:`, markdownError.message);
        doc.fontSize(11)
           .font('Helvetica')
           .text(`[Error processing markdown: ${group.markdown}]`);
      }
    }
    
    // Finalize the PDF
    doc.end();
    
    console.log(`PDF created successfully: ${outputPath}`);
    
  } catch (error) {
    console.error('Error creating PDF:', error);
  }
}

function extractDesignNoteso(markdownContent) {
  // Look for "Design notes:" section (case insensitive)
  const lines = markdownContent.split('\n');
  let inDesignNotes = false;
  let designNotes = [];
  
  for (const line of lines) {
    // Check if this line starts the design notes section
    if (line.toLowerCase().includes('design notes:')) {
      inDesignNotes = true;
      continue;
    }
    
    // If we're in design notes section, collect everything
    if (inDesignNotes) {
      designNotes.push(line);
    }
  }
  
  // Join all lines and clean up
  return designNotes.length > 0 ? designNotes.join('\n').trim() : null;
}

function extractDesignNotes(markdownContent) {
  // Return all content after frontmatter (gray-matter already stripped it)
  return markdownContent.trim() || null;
}
// Usage
const inputDirectory = './image-prompt-library/inspiration'; // Change this to your folder path
const outputPDF = './inspiration.pdf'; // Change this to your desired output path

createPDFFromImagesAndMarkdown(inputDirectory, outputPDF);