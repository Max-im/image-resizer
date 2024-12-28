import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import UploadMedia from '@/components/UploadMedia';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />

      <main className="flex nowrap w-full bg-gray-200">
        <div className="flex-[1.5] flex flex-col">
          <UploadMedia />
          {/* <div className="block back4">
            <h3>The judge</h3>
          </div>
          <div className="block back3">
            <h3>Frank</h3>
          </div> */}
        </div>
        <Aside />
      </main>
      <Footer />
      {/* <UpdateElectron /> */}
    </div>
  )
}

export default App