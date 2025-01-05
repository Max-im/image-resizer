export type MediaFileType = 'photo' | 'video';

export interface IMediaFile {
    size: number;
    path: string;
    name: string;
    outputPath: string;
    type: MediaFileType;
}


