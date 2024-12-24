import blob from '../../assets/blob.svg';
import character from '../../assets/character.svg';

export default function About() {
  return (
    <section id="about-us" className="py-16 bg-blue-50 rounded-xl bg-accent-dark text-white px-8 mb-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-1/2 mt-8 md:mt-0 relative">
            <img
              src={blob} alt="Team Working Together"
              className="w-full"
            />
            <img src={character} alt="Team Working Together" className="w-1/2 absolute top-0 left-10" />
          </div>
          <div className="w-1/2 text-center md:text-left md:pr-10">
            <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="text-lg mb-4">
              MediaCompressor is a team of passionate developers dedicated to making media management
              fast, efficient, and user-friendly. With a strong focus on quality and security, our mission is to simplify your workflow and save you time.
            </p>
            <p className="text-lg">
              Since our launch in 2024, we’ve helped thousands of users streamline their media storage,
              and we’re just getting started!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
