const Jimp = require('jimp');
const fs = require('fs');

const process = async (fileName) => {
  return new Promise((resolve, reject) => {
    Jimp.read(fileName, (err, file) => {
      if (err) reject(err);
      else {
        file.quality(60).write(fileName.replace('./src/', './dist/'));
        resolve();
      }
    });
  });
};

const readDirFiles = (path) => {
  if (!fs.lstatSync(path).isDirectory()) {
    if (Array.isArray(path)) return path;
    return [path];
  }
  const files = fs.readdirSync(path);
  const data = [];
  for (const fileName of files) {
    data.push(...readDirFiles(`${path}/${fileName}`));
  }
  return data;
};

(async function () {
  const dist = fs.readdirSync('./dist');
  for (const fileName of dist) {
    if (fileName !== '.gitkeep') fs.unlinkSync(`./dist/${fileName}`);
  }

  const files = readDirFiles('./src');

  const errors = [];

  let i = 0;
  for (const fileName of files) {
    if (!fileName.match(/.*\.jpg$/i)) {
      i++;
      if (fileName !== '.gitkeep') {
        fs.copyFileSync(fileName, fileName.replace('./src/', './dist/'));
      }
      continue;
    }

    try {
      await process(fileName);
      fs.unlinkSync(fileName);
    } catch (err) {
      console.log(err);
      errors.push(fileName);
    }
    i++;
    console.log(
      `${Math.round((i / files.length) * 100)}% | ${i} from ${files.length}`
    );
  }

  if (errors.length) {
    fs.writeFileSync('errors.txt', JSON.stringify(errors));
    console.log(
      `Done with ${errors.length} errors: find unhandled files in "errors.txt"`
    );
  } else {
    console.log('Success');
  }
})();
