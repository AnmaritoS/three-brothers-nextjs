"use client";
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
      <div className=" bg-[url('/coffeebg.png')] bg-cover">
        {/* <Header /> */}
        <Hero />
        {/* <AboutUs /> */}
      </div>
      <Specialities />
      <div className="bg-[url('/coffeebg2.png')] bg-cover flex flex-col justify-center items-start space-y-12 px-10 py-24">
        <Philosophy />
        <Services />
      </div>
      <Team />
      <FengCha />
      <Projects />
      <Footer />
    </main>
  );
}
