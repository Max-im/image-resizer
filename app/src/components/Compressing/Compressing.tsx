import { useEffect, useState } from 'react';
import BackBtn from '@/components/BackBtn';
import { formatSize } from '@/utils/size';
import errorImg from '@/assets/error.png';
import successImg from '@/assets/success.png';
import { IMediaFile } from 'models/MediaFile';
import { IPercentData } from 'models/PercentData';
import { ISettings } from 'models/Settings';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
  settings: ISettings;
}

export default function Compressing({ showError, success, media, back, settings }: Props) {
  const [done, setDone] = useState(false);
  const [items, setItems] = useState(media.map(item => ({ ...item, progress: 0, compressedSize: 0, success: false, error: false, done: false })));

  const startCompress = async () => {
    try {
      await window.ipcRenderer.invoke('compress', {media, settings});
    } catch (error) {
      let message = 'An error occurred while compressing files';
      if (error instanceof Error) {
        message = error.message;
      }
      showError(message);
    }
  };

  const updateProgress = (e: Electron.IpcRendererEvent, data: IPercentData) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.path === data.filePath) {
          return { ...item, progress: data.percent };
        }
        return item;
      });
    });
  }

  const onFileEnd = (e: Electron.IpcRendererEvent, {path, size}: {path: string, size: number}) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.path === path) {
          return { ...item, done: true, success: true, compressedSize: size};
        }
        return item;
      });
    });
  }

  const onCompleted = () => {
    setDone(true);
  }

  const onLog = (e: Electron.IpcRendererEvent, msg: any) => {
    console.log(msg);
  }

  const onShowError = (e: Electron.IpcRendererEvent, data: { filePath: string, message: string }) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.path === data.filePath) {
          return { ...item, done: true, error: true };
        }
        return item;
      });
    });
    showError(data.message);
  }

  useEffect(() => {
    window.ipcRenderer.on('progress', updateProgress);
    window.ipcRenderer.on('fileEnd', onFileEnd);
    window.ipcRenderer.on('completed', onCompleted);
    window.ipcRenderer.on('fileError', onShowError);
    window.ipcRenderer.on('log', onLog);
    startCompress();

    return () => {
      window.ipcRenderer.off('progress', updateProgress);
      window.ipcRenderer.off('fileEnd', onFileEnd);
      window.ipcRenderer.off('completed', onCompleted);
      window.ipcRenderer.off('fileError', onShowError);
      window.ipcRenderer.off('log', onLog);
    }
  }, []);

  const onCancel = () => {
    window.ipcRenderer.invoke('cancelCompress');
    back();
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h3>{done ? 'Done' : 'Compressing...'}</h3>
        {done ? <BackBtn action={success} text="OK" /> : <BackBtn action={onCancel} text="Cancel" />}
      </div>

      <ul className="p-0 mb-4 list-none">
        {items.map((file, index) => (
          <li
            key={index}
            className="bg-white px-3 py-1 border border-gray-200 flex justify-between items-center relative mb-2"
          >
            <span className="font-medium text-gray-800 relative z-10">{file.name}</span>
            <div className="text-gray-800 text-sm flex relative z-10 align-center">
              <span>{formatSize(file.size)}</span>
              {file.compressedSize > 0 && <span className="text-green-400">{" -> "}{formatSize(file.compressedSize)}</span>}
              {file.error && <img src={errorImg} className="ml-2" alt='error' width="18" height="18" />}
              {file.success && <img src={successImg} className="ml-2" alt='success' width="18" height="18" />}
            </div>
            <span className={`absolute bg-green-600 ease-in-out h-full top-0 left-0 z-[0]`} style={{ width: file.progress + '%', transition: 'width 0.5s' }}></span>
            <span className={`absolute h-full mt-1 text-green-400 w-full top-0 left-0 z-[0] flex align-center justify-center`}>{Math.round(file.progress)}%</span>
          </li>
        ))}
      </ul>
    </>
  )
}
