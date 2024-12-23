
export default function About() {
  return (
    <section id="about-us" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left md:pr-10">
            <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="text-lg mb-4">
              MediaCompressor is a team of passionate developers dedicated to making media management
              fast, efficient, and user-friendly. With a strong focus on quality, security, and
              cross-platform accessibility, our mission is to simplify your workflow and save you time.
            </p>
            <p className="text-lg">
              Since our launch in 2024, we’ve helped thousands of users streamline their media storage,
              and we’re just getting started!
            </p>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/path-to-about-us-image.png"
              alt="Team Working Together"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
