import security from '../../assets/security.svg';
import rocket from '../../assets/rocket.svg';
import wifi from '../../assets/wifi.svg';

export default function Why() {

  const items = [
    { img: security, title: "Enhanced Security", text: "Your data stays private without relying on the cloud." },
    { img: rocket, title: "Superior Performance", text: "Optimized for your desktop’s processing power." },
    { img: wifi, title: "Offline Access", text: "Use the app anytime, even without an internet connection." },
  ]

  return (
    <section id="whydesktop" className="py-4 md:py-12 bg-white rounded-xl px-4 md:px-8 mb-5">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Why Choose a Desktop App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index}>
              <div className="bg-accent-blue p-4 md:p-6 rounded-lg shadow-md">
                <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 p-2 border-4 overflow-hidden'>
                  <img src={item.img} alt="Security" className="w-16 h-16 mx-auto w-5/6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
