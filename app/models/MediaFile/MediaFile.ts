import path from "node:path";
import fs from "node:fs";
import { IMediaFile } from "./type";

export class MediaFile implements IMediaFile {
    path: string;
    size: number;
    name: string;
    outputPath: string;

    constructor(filePath: string, size: number, output: string) {
        this.path = filePath;
        this.size = size;
        this.name = path.basename(filePath);
        this.outputPath = output
    }

    deleteSrcFile() {
        fs.unlinkSync(this.path);
    }
}
