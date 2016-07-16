'use strict';

// Load Modules
const fs = require('fs');
const glob = require('glob');

// Make sure both posts/ and site/ exist
try {
    fs.access('posts', fs.constants.R_OK);
    fs.accessSync('site', fs.constants.R_OK | fs.constants.W_OK);
}
catch (e) {
    console.error('Error. Please make sure posts/ and site/ exist and can be written to.');
}

// Glob over posts getting all .md files
glob('posts/*.md', (er, files) => {
    console.log(files);
});
