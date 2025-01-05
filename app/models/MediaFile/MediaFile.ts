import path from "node:path";
import { IMediaFile, MediaFileType } from "./type";
import { supportedPhoto, supportedVideo } from "./supported";

export class MediaFile implements IMediaFile {
    path: string;
    size: number;
    name: string;
    outputPath: string;
    type: MediaFileType;

    constructor(filePath: string, size: number, output: string, type: MediaFileType) {
        this.path = filePath;
        this.size = size;
        this.name = path.basename(filePath);
        this.outputPath = output;
        this.type = type;
    }

    static getType(fileName: string): MediaFileType | undefined {
        const ext = path.extname(fileName).toLowerCase().replace('.', '');
        if (supportedVideo.includes(ext)) {
            return 'video';
        }
        if (supportedPhoto.includes(ext)) {
            return 'photo';
        }
        return;
    }
}
