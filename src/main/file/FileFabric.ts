import PhotoFile from './PhotoFile';
import NonTargetedFile from './NonTargetedFile';

export default class FileFabric {
  static getConstructor(ext: string) {
    const imgRegexp = /^\.(jpe?g|png|gif|bmp|webp)$/i;

    if (imgRegexp.test(ext)) {
      return PhotoFile;
    }

    return NonTargetedFile;
  }
}
