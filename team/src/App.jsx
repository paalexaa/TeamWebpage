import './App.css'
import Navbar from "../src/components/navbar";
import Footer from "../src/components/Footer";
import AboutProject from "../src/sections/AboutProject";
import Sprints from "../src/sections/Sprints";
import Team from "../src/sections/Team";
import Documents from "../src/sections/Documents";
import Contact from "../src/sections/Contact";


function App() {

  return (
    <>
      <Navbar />
      <main>
        <section id="about"><AboutProject /></section>
        <section id="sprints"><Sprints /></section>
        <section id="team"><Team /></section>
        <section id="documents"><Documents /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
