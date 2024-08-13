const fs = require('fs');

const walk    = require('walk');
const files   = [];
let summ = 0
// Walker options
const walker  = walk.walk('./', { followLinks: false });

walker.on('file', function(root, stat, next) {

    const path = require('path')
    if(path.extname(stat.name) === '.txt') {
    files.push(root + '/' + stat.name);
    }
    // Add this file to the list of files
    next();
});

walker.on('end', function() {

    for(let i=0; i<files.length; i++){
        let data = fs.readFileSync(`./${files[i]}`).length
        summ+=data;
        console.log('sum', summ/2)
    }
    console.log(files);
});
