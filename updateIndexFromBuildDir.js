// BY GPT, I HOLD NO CREDIT
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const buildFilePath = path.join(__dirname, './build/index.html');
const rootFilePath = path.join(__dirname, 'index.html');

fs.readFile(buildFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  // Modify the href attributes by replacing /sth with /build/sth
  const modifiedData = data.replace(/(href=")\/(.*?")/g, '$1/build/$2');

  fs.writeFile(buildFilePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing modified index.html:', err);
      return;
    }

    console.log('index.html modified successfully.');

    // Copy the modified index.html file to the root directory
    fse.copy(buildFilePath, rootFilePath, (err) => {
      if (err) {
        console.error('Error copying index.html to root directory:', err);
        return;
      }

      console.log('index.html copied to the root directory.');
    });
  });
});
