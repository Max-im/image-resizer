import { IMediaFile } from '@/../models/MediaFile';
import folder from '@/assets/folder.png';

interface Props {
  showError: (msg: string) => void;
  success: (media: IMediaFile[]) => void;
}

export default function UploadMedia({ showError, success }: Props) {
  const handleUpload = async () => {
    try {
      const result = await window.ipcRenderer.invoke('selectfolder') as IMediaFile[];
      if (result) {
        success(result);
      }
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
      <h3>Upload Media</h3>
      <button className="bg-black hover:bg-gray-700 text-white border-none text-base py-2 px-3 cursor-pointer flex items-center" onClick={handleUpload}>
        Select Folder
        <img src={folder} alt="icon" width="18" height="18" className="ml-3" />
      </button>
    </>
  )
}
