const fs = require('fs');

function getDirFiles() {
  return new Promise(function(resolve, reject) {
    fs.readdir(__dirname, function(error, files) {
      if(error) return reject(error);
      resolve(files);
    });
  });
}

getDirFiles()
  .then(function(files) {
    console.log('THEN', files);
  })
  .catch(function(error) {
    console.error('CATCH', error);
  });
