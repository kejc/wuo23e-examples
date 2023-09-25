const path = require('path');
const fs = require('fs');

function lisbeth(cb) {
  console.log('alpha');
  fs.readdir(__dirname, function(err, data) {
    console.log('bravo');
    cb(data);
  });
  console.log('charlie');
}

lisbeth(function(data) {
  console.log(data);
});

//const lisbeth = (sanne) => {
//  console.log('alpha');
//  fs.readdir(__dirname, (err, data) => {
//    console.log('bravo');
//    sanne(data);
//  });
//  console.log('charlie');
//}

//lisbeth((data) => {
//  console.log(data);
//});
