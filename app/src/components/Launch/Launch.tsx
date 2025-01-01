import { IMediaFile } from 'models/MediaFile';
import start from '../../assets/start.png';
import styles from './Launch.module.css';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
}

function formatSize(size: number): string {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

export default function Launch({ showError, success, media, back }: Props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Compress Files</h3>
        <p
          onClick={back}
          className={`text-sm ${styles.back} cursor-pointer`}
        >
          &larr; Back
        </p>
      </div>

      <p className="mb-4">
        <span className="font-medium">Files to compress:</span> ({media.length})
      </p>

      <ul className="bg-white p-0 mb-4 list-none">
        {media.map((file, index) => (
          <li
            key={index}
            className="px-3 py-1 border border-gray-200 flex justify-between items-center"
          >
            <span className="font-medium text-gray-800">{file.name}</span>
            <span className="text-gray-500 text-sm ml-2">({formatSize(file.size)})</span>
          </li>
        ))}
      </ul>

      <button className="bg-black hover:bg-gray-700 text-white border-none text-base py-2 px-3 cursor-pointer flex items-center" onClick={success}>
        Start Compressing
        <img src={start} alt="icon" width="24" height="24" className="ml-1" />
      </button>
    </>
  )
}
