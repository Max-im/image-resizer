import { IMediaFile } from 'models/MediaFile';
import start from '../../assets/start.png';

interface Props {
  showError: (msg: string) => void;
  success: () => void;
  back: () => void;
  media: IMediaFile[];
}

export default function Launch({ showError, success, media }: Props) {
  return (
    <>
      <h3>Compress</h3>
      <p>Files to compress: {media.length}</p>
      <button className="bg-black hover:bg-gray-700 text-white border-none text-base py-2 px-3 cursor-pointer flex items-center" onClick={success}>
        Start
        <img src={start} alt="icon" width="24" height="24" className="ml-1" />
      </button>
    </>
  )
}
