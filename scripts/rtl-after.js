// Takes a built version of and changes the CSS files to be an RTL version.
// Run AFTER less files have been compiled to css

var rtl = require('../src/js/util/rtl');

var fs = require('fs');
var glob = require('glob');


// CSS
// ----------------

glob('css/*.css', (er, files) => {

    files.forEach((f) => {
        contents = fs.readFileSync(f).toString();
        contents = rtl.convert(contents);
        if (!f.match('.rtl.css$')) { // don't do it twice
            console.log(f);
            fs.writeFileSync(f.replace('.css', '.rtl.css'), contents);
        }
    });

});


