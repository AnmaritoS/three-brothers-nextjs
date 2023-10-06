"use client";
import AboutUs from "./components/AboutUs";
import FengCha from "./components/FengCha";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Specialities from "./components/Specialities";
import Team from "./components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Specialities />
      <Philosophy />
      <Services />
      <Team />
      <FengCha />
      <Projects />
      <Footer />
    </main>
  );
}
