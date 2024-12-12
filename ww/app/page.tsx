
export default function Home() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Video Compressor</h1>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#why-desktop">Why Desktop</a></li>
            <li><a href="#price">Price</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <h2>Compress Your Videos Easily</h2>
        <p>Fast and efficient video compression tool.</p>
        <button>Get Started</button>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Us</h2>
        <p>We provide the best video compression tool to save your storage and bandwidth.</p>
      </section>

      {/* Process Section */}
      <section id="process">
        <h2>How It Works</h2>
        <ol>
          <li>Upload your video</li>
          <li>Select compression settings</li>
          <li>Download the compressed video</li>
        </ol>
      </section>

      {/* Why Desktop Section */}
      <section id="why-desktop">
        <h2>Why Use Our Desktop App?</h2>
        <p>Our desktop app offers faster processing and more features.</p>
      </section>

      {/* Price Section */}
      <section id="price">
        <h2>Price</h2>
        <p>Our tool is completely free to use!</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Video Compressor. All rights reserved.</p>
      </footer>
    </div>
  );
}
