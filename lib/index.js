'use strict';

// Load Modules
const fs = require('fs');
const glob = require('glob');
const init = require('./init');
const marked = require('marked');
const program = require('commander');

init();

// Glob over posts getting all .md files
glob('posts/*.md', (er, files) => {
    files.forEach((file) => {
        const newName = file.replace('posts', 'site').replace('md', 'html');

        // Read in the Markdown and return HTML
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;

            // Write HTML to file
            fs.writeFile(newName, marked(data), (err) => {
                if (err) throw err;
            });
        });

    });
});
