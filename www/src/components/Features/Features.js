
export default function Features() {
  return (
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
  )
}
