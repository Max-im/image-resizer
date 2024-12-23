import About from "../About";
import Demo from "../Demo";
import Features from "../Features";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import Why from "../Why";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Why />
        <Features />
        <Testimonials />
        <Demo />
      </main>
      <Footer />
    </div >
  );
}

export default App;
