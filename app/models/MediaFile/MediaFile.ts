import { IMediaFile } from "./type";

export class MediaFile implements IMediaFile {
    path: string;
    size: number;
    name: string;

    constructor(path: string, size: number) {
        this.path = path;
        this.size = size;
        this.name = path.split('/').pop() || '';
    }
}
