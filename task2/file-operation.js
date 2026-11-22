const fs = require('fs');
require('dotenv').config({ quiet: true });

const fileName = process.env.FILENAME;

fs.writeFile(fileName, 'Hello from Node.js! This file was created using fs and dotenv.', (err) => {
  if (err) {
    console.error('Error writing file:', err.message);
    return;
  }
  console.log(`File "${fileName}" created successfully`);

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return;
    }
    console.log('File content:', data);
  });
});
