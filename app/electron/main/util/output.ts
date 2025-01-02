import path from 'node:path';

export const getOutputPath = (filePath: string) => {
    const { name, ext } = path.parse(filePath);
    const dir = getOutputDir(filePath);
    return path.join(dir, `${name}${ext}`);
}

export const getOutputDir = (filePath: string) => {
    const prefix = '_compressed';
    const { dir } = path.parse(filePath);
    const parentDir = path.dirname(dir);
    return path.join(parentDir, `${path.basename(dir)}${prefix}`);
}