'use strict';

// Load Modules
const fs = require('fs');
const glob = require('glob');
const marked = require('marked');

class Spyre {
    constructor() {
        // Make sure both posts/ and site/ exist
        try {
            fs.accessSync('./posts', fs.R_OK);
            fs.accessSync('./site', fs.R_OK | fs.W_OK);
        }
        catch (e) {
            console.error('Error. Please make sure posts/ and site/ exist and can be written to.');
        }
    }

    init(config) {
        // Configure AWS eventually
    }

    start() {
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
    }
}

module.exports = Spyre;
