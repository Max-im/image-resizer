export function truncateFilename(filename: string, maxLength: number) {
    if (filename.length <= maxLength) return filename;
    const extIndex = filename.lastIndexOf('.');
    const ext = filename.substring(extIndex);
    const name = filename.substring(0, extIndex);
    return name.substring(0, maxLength - ext.length - 3) + '...' + ext;
  }