import React from 'react'
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container-xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold flex"><img src={logo} alt="MediaCompressor" className={`${styles.logo} mr-2`} />MediaCompressor</div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#demo" className="hover:text-blue-600">Demo</a>
          <a href="#download" className="hover:text-blue-600">Download</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <a href="#download" className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md ">Download Now</a>
      </div>
    </header>
  )
}
