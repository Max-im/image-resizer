import folder from '../../assets/folder.svg';
import styles from './UploadMedia.module.css';

export default function UploadMedia() {
  const handleUpload = async () => {
    const result = await window.ipcRenderer.invoke('selectfolder');
    console.log(result);
  };

  return (
    <div className={`${styles.bg} block grow-1`}>
        <h3>Upload Media</h3>
        <button className="bg-black hover:bg-gray-700 text-white border-none text-base py-2 px-3 cursor-pointer flex items-center" onClick={handleUpload}>
          <img src={folder} alt="icon" width="24" height="24" className="mr-1" />
          Select Folder
        </button>
    </div>
  )
}
