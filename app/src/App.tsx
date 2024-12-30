import { useState } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import UploadMedia from '@/components/UploadMedia';
import Launch from '@/components/Launch';
import Compressing from './components/Compressing';
import { IMediaFile } from 'models/MediaFile';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [media, setMedia] = useState<IMediaFile[]>([]);

  const nextStep = () => {
    setStep(step + 1);
  }
  
  const prevStep = () => {
    setStep(step - 1);
    saveMedia([]);
  }
  const showError = (msg: string) => {
    console.error(msg)
  }

  const saveMedia = (media: IMediaFile[]) => {
    nextStep();
    setMedia(media);
  }

  return (
    <div className='App'>
      <Header />
      <main className="main operationbg flex nowrap w-full bg-gray-200">
        <div className="flex-[1.5] flex flex-col">
          <div className={`block grow-1`}>
            {step === 1 && <UploadMedia success={saveMedia} showError={showError} />}
            {step === 2 && <Launch success={nextStep} showError={showError} back={prevStep} media={media} />}
            {step === 3 && <Compressing success={nextStep} showError={showError} back={prevStep} media={media} />}
          </div>
        </div>
        <Aside />
      </main>
      <Footer />
    </div>
  )
}

export default App