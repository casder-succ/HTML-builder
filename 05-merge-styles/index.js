const fsPromises = require('fs/promises');
const path = require('path');

function mergeStyles (stylePath, bundlePath) {
  fsPromises.writeFile(bundlePath, '').catch(error => {if (error) throw error;});
  fsPromises.readdir(stylePath, {withFileTypes: true})
    .then(files => {
      for (const item of files) {
        if (item.isFile()) {
          const pathItem = path.join(stylePath, item.name);
          const itemExt = path.extname(pathItem);
          if (itemExt === '.css') {
            fsPromises.readFile(pathItem).then(data => fsPromises.appendFile(bundlePath, data));
          }
        }
      }
    });

}

mergeStyles(path.join(__dirname, 'styles'), path.join(__dirname, 'project-dist', 'bundle.css'));