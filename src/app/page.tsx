import About from "./components/About";
import Contact from "./components/Contact"; // Assuming you create this
import Footer from "./components/Footer"; // Assuming you create this
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume"; // Assuming you create this

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
