import About from "../About";
import Demo from "../Demo";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import Why from "../Why";

function App() {
  return (
    <div className="font-sans text-gray-800 min-w-80">
      <Header />
      <main className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <Why />
        <Testimonials />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
