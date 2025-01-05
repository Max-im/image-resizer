import { IpcMainInvokeEvent } from 'electron';
import sharp from 'sharp';
import { IMediaFile } from 'models/MediaFile';
import { IPercentData } from 'models/PercentData';

export async function onCompressPhoto(event: IpcMainInvokeEvent, mediaFile: IMediaFile): Promise<string> {
  try {
    await sharp(mediaFile.path)
      .jpeg({ quality: 60 })
      .toFile(mediaFile.outputPath);
      const payload: IPercentData = { filePath: mediaFile.path, percent: 100 };
      event.sender.send('progress', payload);
    return 'Compression successful';
  } catch (error) {
    throw new Error(`Compression failed: ${(error as Error).message}`);
  }
}
