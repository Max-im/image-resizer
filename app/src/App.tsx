import { useState } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import UploadMedia from '@/components/UploadMedia';
import Launch from '@/components/Launch';
import Compressing from '@/components/Compressing';
import ErrorMessage from '@/components/ErrorMessage';
import { IMediaFile } from 'models/MediaFile';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [media, setMedia] = useState<IMediaFile[]>([]);
  const [error, setError] = useState<string | null>(null);

  const init = () => {
    setMedia([]);
    toStep(1);
    setError(null);
  }

  const showError = (msg: string) => {
    console.error(msg);
    setError(msg);
  }

  const toStep = (step: number) => {
    setStep(step);
  }

  const clearError = () => {
    setError(null);
  };

  const saveMedia = (media: IMediaFile[]) => {
    setMedia(media);
    setStep(2);
  }

  return (
    <div className='App'>
      <Header />
      <main className="main operationbg flex nowrap w-full bg-gray-200">
        <div className="flex-[1.5] flex flex-col">
          <div className={`block grow-1`}>
            {step === 1 && <UploadMedia success={(saveMedia)} showError={showError} />}
            {step === 2 && <Launch success={() => toStep(3)} showError={showError} back={() => init()} media={media} />}
            {step === 3 && <Compressing success={() => init()} showError={showError} back={() => toStep(2)} media={media} />}
          </div>
        </div>
        {step !== 3 && <Aside />}
      </main>
      <Footer />
      <ErrorMessage message={error} clearError={clearError} />
    </div>
  )
}

export default App