
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/user1.jpg"
                alt="User 1"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Emily R.</h3>
                <p className="text-sm text-gray-500">Photographer</p>
              </div>
            </div>
            <p className="text-gray-700">
              “MediaCompressor has been a game-changer for my workflow. It’s fast, reliable,
              and keeps my photo quality intact.”
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/user2.jpg"
                alt="User 2"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">James P.</h3>
                <p className="text-sm text-gray-500">Video Editor</p>
              </div>
            </div>
            <p className="text-gray-700">
              “I can’t believe how easy it is to compress large video files.
              It saves me hours of upload time!”
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/user3.jpg"
                alt="User 3"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Sophia L.</h3>
                <p className="text-sm text-gray-500">Content Creator</p>
              </div>
            </div>
            <p className="text-gray-700">
              “The offline functionality is a lifesaver when I’m traveling.
              Highly recommend it to anyone managing media files.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
