import { useInView } from 'react-intersection-observer';
import blob from '../../assets/blob.svg';
import character from '../../assets/character.svg';
import styles from './About.module.css';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="aboutus" className="py-4 md:py-12 bg-blue-50 rounded-xl bg-accent-dark text-white px-4 md:px-8 mb-5 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
            <img
              src={blob} alt="Team Working Together"
              className={`w-full ${inView ? styles.blob_active : styles.blob}`}
            />
            <img src={character} alt="Team Working Together" className={`${inView ? styles.character_active : styles.character}`} />
          </div>
          <div ref={ref}></div>
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="text-md md:text-lg mb-4">
              MediaCompressor is a team of passionate developers dedicated to making media management
              fast, efficient, and user-friendly. With a strong focus on quality and security, our mission is to simplify your workflow and save you time.
            </p>
            <p className="text-md md:text-lg">
              Since our launch in 2024, we’ve helped thousands of users streamline their media storage,
              and we’re just getting started!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
