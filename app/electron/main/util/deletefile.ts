import fs from 'node:fs';
import { promisify } from 'node:util';

const unlink = promisify(fs.unlink);


const deleteFileWithRetry = async (filePath: string, retries = 5, delay = 1000): Promise<void> => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await unlink(filePath);
      console.log(`File deleted successfully: ${filePath}`);
      return; // Exit the loop if successful
    } catch (err: any) {
      if (err.code === 'EBUSY' && attempt < retries - 1) {
        console.warn(`File is busy, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error(`Failed to delete file: ${filePath}`, err);
        throw err; // Rethrow error if retries are exhausted or not EBUSY
      }
    }
  }
};

export default deleteFileWithRetry;