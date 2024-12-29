import { useEffect, useState } from 'react';
import packageJson from '../../../package.json';
import logo from '../../assets/logo.png';
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
        <div className="flex items-center">
          <img src={logo} className="mr-2" alt="logo" width="36" height="36" />
          <h1>Media Compressor</h1>
        </div>
        <h4>{description}</h4>
        <p>Version: {version}</p>
    </header>
  )
}
