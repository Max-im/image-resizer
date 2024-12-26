import styles from './Hero.module.scss';
import amico from '../../assets/amico.svg';

export default function Hero() {
  return (
    <section className="mb-8">
      <div className={styles.card}>
        <div className={styles.inner}>
          <div className={`${styles.box} bg-accent-blue px-4 md:px-8 py-10 md:py-12 rounded-xl`}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Compress <br /> Media Files with Ease!</h1>
            <p className="text-lg mb-4 md:mb-9">Reduce file sizes without compromising quality.</p>
            <div className="flex space-x-2 md:space-x-4">
              <a href="/mediaCompressor.zip" download className="bg-black hover:bg-gray-700 text-white px-3 md:px-6 py-2 md:py-3 rounded-md text-lg">Download for Free</a>
              <a href="#aboutus" className="bg-white hover:bg-gray-100 border px-3 md:px-6 py-2 md:py-3 rounded-md text-lg">Learn More</a>
            </div>

            <div className={`${styles.tag} bg-body rounded-xl`}>
              <div className="bg-accent px-4 py-2 rounded-xl w-full h-full flex items-end justify-center">
                <img src={amico} alt='' className={`w-5/6 ${styles.img}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
