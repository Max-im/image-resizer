
export default function Why() {
  return (
    <section id="why-desktop" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose a Desktop App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/icon-security.svg" alt="Security" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Enhanced Security</h3>
              <p>Your data stays private without relying on the cloud.</p>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/icon-performance.svg" alt="Performance" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Superior Performance</h3>
              <p>Optimized for your desktop’s processing power.</p>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/icon-offline.svg" alt="Offline Access" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Offline Access</h3>
              <p>Use the app anytime, even without an internet connection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
