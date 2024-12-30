import { IMediaFile } from "./type";

export class MediaFile implements IMediaFile {
    path: string;
    size: number;

    constructor(path: string, size: number) {
        this.path = path;
        this.size = size;
    }
}
