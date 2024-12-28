import { useEffect, useState } from 'react';
import packageJson from '../../../package.json';
import styles from './Header.module.css';

export default function Header() {
    const [version, setVersion] = useState('')
    const [description, setDescription] = useState('')
  
    useEffect(() => {
      setVersion(packageJson.version);
      setDescription(packageJson.description);
    }, [])
  return (
    <header className={`${styles.bg} block`}>
        <h1>Media Compressor</h1>
        <h4>{description}</h4>
        <p>Version: {version}</p>
    </header>
  )
}
