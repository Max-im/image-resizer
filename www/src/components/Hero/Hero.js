import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className="mb-8">
      <div className={styles.card}>
        <div className={styles.inner}>
          <div className={`${styles.box} bg-accent-blue px-8 py-8 rounded-xl`}>
            <h1 className="text-4xl font-extrabold mb-4">Compress Your Media Files with Ease!</h1>
            <p className="text-lg mb-6">Reduce file sizes without compromising quality.</p>
            <div className="flex space-x-4">
              <a href="#download" className="bg-black hover:bg-gray-700 text-white px-6 py-3 rounded-md text-lg">Download for Free</a>
              <a href="#features" className="bg-white hover:bg-gray-100 border px-6 py-3 rounded-md text-lg">Learn More</a>
            </div>

            <div className={`${styles.tag} bg-body rounded-xl`}>
              <div className="bg-accent px-4 py-2 text-blue-800 rounded-xl w-full h-full">
                text
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
