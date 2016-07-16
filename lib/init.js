module.exports = () => {
    'use strict';

    // Make sure both posts/ and site/ exist
    try {
        fs.accessSync('./examples/posts', fs.R_OK);
        fs.accessSync('./examples/site', fs.R_OK | fs.W_OK);
    }
    catch (e) {
        console.error('Error. Please make sure posts/ and site/ exist and can be written to.');
    }
}
