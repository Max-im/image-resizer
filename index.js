const Jimp = require("jimp");
const fs = require('fs');

const process = async (fileName) => {
    return new Promise((resolve, reject) => {
        Jimp.read(`./src/${fileName}`, (err, file) => {
            if (err) reject(err);
            else {
                file.quality(60).write(`./dist/${fileName}`);
                resolve();
            }
        });
    });
}

(async function() {
    const files = fs.readdirSync('./src');

    const results = {success: [], errors: []}
    
    let i = 0;
    for (const fileName of files) {
        try {
            await process(fileName);
            results.success.push(fileName)
        } catch(err) {
            console.log(err);
            results.errors.push(fileName)
        }
        i++;
        console.log(Math.round(i / files.length * 100) / 100 + '%');
    }

    results.success.forEach(fileName => {
        fs.unlinkSync(`./src/${fileName}`);
    });

    if (results.errors.length) {
        fs.writeFileSync('errors.txt', results.errors);
        console.log(`Done with ${results.errors.length} errors: find unhandled files in "errors.txt"`);
    } else {
        console.log('Success');
    }
})();



    
