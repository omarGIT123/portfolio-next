import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import ChatBot from "../components/Chatbot";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Stats />
      <Portfolio />
      <Contact />
      <ChatBot />
      <div id="overlay" />
    </>
  );
}
