import PhotoFile from './PhotoFile';
import NonTargetedFile from './NonTargetedFile';
import VideoFile from './VideoFile';

export default class FileFabric {
  static getConstructor(ext: string) {
    const imgRegexp = /^\.(jpe?g|png|gif|bmp|webp)$/i;
    const videoRegexp = /\.(mp4|mov|avi|wmv|flv|webm|mkv)$/i;

    if (imgRegexp.test(ext)) return PhotoFile;
    if (videoRegexp.test(ext)) return VideoFile;

    return NonTargetedFile;
  }
}
