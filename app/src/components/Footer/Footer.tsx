import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.bg} block`}>
      <div className="max-w-4xl mx-auto text-center">
        <nav>
          <ul className="flex justify-center space-x-6 list-none">
            <li>
              <a 
                href="https://max-im.github.io/media-compressor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
              >
                Site
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Max-im/media-compressor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
