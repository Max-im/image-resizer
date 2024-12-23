import Header from "../Header";
import Hero from "../Hero";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <img src="/icon-speed.svg" alt="Lightning Fast" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Lightning Fast</h3>
              <p>Compress files in seconds.</p>
            </div>
            <div>
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <img src="/icon-quality.svg" alt="High Quality" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mt-4">High Quality</h3>
              <p>Maintain original quality.</p>
            </div>
            <div>
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <img src="/icon-crossplatform.svg" alt="Cross-Platform" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Cross-Platform</h3>
              <p>Available on Windows, macOS, and Linux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">See How Simple It Is!</h2>
          <video className="mx-auto rounded-lg shadow-lg" width="600" controls>
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MediaCompressor. All rights reserved.</p>
        </div>
      </footer>
    </div >
  );
}

export default App;
