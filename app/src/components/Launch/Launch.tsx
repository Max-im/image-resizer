import { IMediaFile } from 'models/MediaFile';
import start from '@/assets/start.png';
import { formatSize } from '@/utils/size';
import BackBtn from '../BackBtn';
import { truncateFilename } from '@/utils/truncateName';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
}

export default function Launch({ success, media, back }: Props) {
  return (
    <> 
      <div className="flex justify-between items-center">
        <h3>Compress Files</h3>
        <BackBtn action={back} />
      </div>

      <p className="mb-4">
        <span className="font-medium">Files to compress:</span> ({media.length})
      </p>

      <ul className="p-0 mb-4 list-none max-h-64 overflow-y-auto">
        {media.map((file, index) => (
          <li
            key={index}
            className="bg-white px-3 py-1 border border-gray-200 flex justify-between items-center mb-2"
          >
            <span className="flex items-center">
              <span className="font-xs text-gray-400 w-[26px] align-center">{index + 1}</span>
              <span className="font-medium text-gray-800" title={file.name}>{truncateFilename(file.name, 26)}</span>
            </span>
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
