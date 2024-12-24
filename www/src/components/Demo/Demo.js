
export default function Demo() {
  return (
    <section id="demo" className="py-16 bg-white px-8 rounded-xl mb-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">See How Simple It Is!</h2>
        <video className="mx-auto rounded-lg shadow-lg" width="600" controls>
          <source src="/demo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
