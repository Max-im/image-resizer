import { IMediaFile } from 'models/MediaFile';
import start from '@/assets/start.png';
import styles from './Launch.module.css';
import { formatSize } from '@/utils/size';
import BackBtn from '../BackBtn';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
}

export default function Launch({ showError, success, media, back }: Props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Compress Files</h3>
        <BackBtn action={back} />
      </div>

      <p className="mb-4">
        <span className="font-medium">Files to compress:</span> ({media.length})
      </p>

      <ul className="p-0 mb-4 list-none">
        {media.map((file, index) => (
          <li
            key={index}
            className="bg-white px-3 py-1 border border-gray-200 flex justify-between items-center mb-2"
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
