import { IMediaFile } from 'models/MediaFile';
import { useEffect } from 'react';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
}

export default function Compressing({ showError, success, media }: Props) {
  useEffect(() => {
    const compress = async () => {
      try {
        await window.ipcRenderer.invoke('compress', media);
        success();
      } catch (error) {
        let message = 'An error occurred while compressing files';
        if (error instanceof Error) {
          message = error.message;
        }
        showError(message);
      }
    };
    compress();
  }, []);

  return (
    <>
      <h3>Compressing...</h3>
    </>
  )
}
