import styles from './UploadMedia.module.css';

export default function UploadMedia() {
  const handleUpload = async () => {
    const result = await window.ipcRenderer.invoke('selectfolder');
    console.log(result);
  };

  return (
    <div className={`${styles.bg} block grow-1`}>
        <h3>Upload Media</h3>
        <button className={styles.btn} onClick={handleUpload}>
          Select Folder
        </button>
    </div>
  )
}
