import fs from 'node:fs';
import path from 'node:path';

const defaultPrefix = '_compressed';

export const getOutputPath = (filePath: string, base: string, prefix: string = defaultPrefix) => {
    const { dir, base: fileName } = path.parse(filePath);
    const relativeDir = path.relative(base, dir);
    const outputDir = path.join(base + prefix, relativeDir);
    return path.join(outputDir, fileName);
};


export const getOutputDir = (baseDir: string) => {
    const prefix = defaultPrefix;
    const parentDir = path.dirname(baseDir);
    return path.join(parentDir, `${path.basename(baseDir)}${prefix}`);
};

export const ensureOutputDir = (outPath: string) => {
    const outDir = path.dirname(outPath);
    
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
};