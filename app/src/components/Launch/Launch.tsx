import folder from '../../assets/folder.svg';
import styles from './UploadMedia.module.css';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: string[];
}

export default function Launch({ showError, success, media }: Props) {
  const handleUpload = async () => {
    try {
      const result = await window.ipcRenderer.invoke('selectfolder');
    } catch (error) {
      let message = 'An error occurred while selecting folder';
      if (error instanceof Error) {
        message = error.message;
      }
      showError(message);
    }
  };

  return (
    <>
      <h3>Compress</h3>
      <button className="bg-black hover:bg-gray-700 text-white border-none text-base py-2 px-3 cursor-pointer flex items-center" onClick={handleUpload}>
        <img src={folder} alt="icon" width="24" height="24" className="mr-1" />
        Start
      </button>
    </>
  )
}
