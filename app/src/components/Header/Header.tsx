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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} className="mr-2" alt="logo" width="32" height="32" />
            <h1>Media Compressor</h1>
          </div>
          <div className={`${styles.version} text-sm text-right`}>v: {version}</div>
        </div>
        <h4 className="p-0 m-0 mb-2">{description}</h4>
    </header>
  )
}
