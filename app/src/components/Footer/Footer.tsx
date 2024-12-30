import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.bg} block`}>
      <h3>Footer</h3>
      <nav>
        <ul>
          <li><a href="https://max-im.github.io/media-compressor" target="_blank" rel="noopener noreferrer">Site</a></li>
          <li><a href="https://github.com/Max-im/media-compressor" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </footer>
  )
}
