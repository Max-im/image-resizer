import { IMediaFile } from '@/../models/MediaFile';
import { useEffect, useState } from 'react';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
}

export default function Compressing({ showError, success, media }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compress = async () => {
      try {
        for(const file of media) {
          const isSuccess = await window.ipcRenderer.invoke('compress', file.path);
          if (isSuccess) {
            setProgress(progress + 1);
          }
        }
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
      {progress > 0 && <p>{progress / media.length * 100}%</p>}
    </>
  )
}
