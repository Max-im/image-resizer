import GithubCorner from 'react-github-corner';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';
import { APP_URL } from '../../constants';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-[99] w-full overflow-hidden">
      <div className="container-xl mx-auto flex justify-between items-center py-4 px-6">
        <img src={logo} alt="MediaCompressor" className={`${styles.logo} mr-2`} />
        <div>
          <a href={APP_URL} target='_blank' rel="noreferrer" className="bg-black hover:bg-gray-700 animate-pulse text-white px-4 py-2 mr-12 rounded-md " download>Download</a>
          <GithubCorner href="https://github.com/max-im/media-compressor" />
        </div>
      </div>
    </header>
  )
}
