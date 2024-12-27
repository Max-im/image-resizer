import UpdateElectron from '@/components/update'
import './App.css'
import { useEffect, useState } from 'react'
import packageJson from '../package.json'

function App() {
  const [version, setVersion] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setVersion(packageJson.version);
    setDescription(packageJson.description);
  }, [])

  return (
    <div className='App'>
      <div className="box hero back11">
        <h3>Media Compressor</h3>
        <p>{description}</p>
      </div>
      <div className="box back2">
        <h3>Version: {version}</h3>
      </div>
      <div className="box back9 right tall">
        <h3>The guardians of the galaxy</h3>
      </div>
      <div className="box back4">
        <h3>The judge</h3>
      </div>
      <div className="box back3">
        <h3>Frank</h3>
      </div>
      <div className="box back6 right">
        <h3>Big Hero 6</h3>
      </div>
      <div className="box back8 wide">
        <h3>Hunger Games</h3>
      </div>

      <UpdateElectron />
    </div>
  )
}

export default App