"use client";
import  AboutMe from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HireMe from "./components/HireMe";
import SpiderPreloader from "./components/Preloader";
import Projects from "./components/Projects";
import SpiderTrail from "./components/SpiderTrail";


export default function Home() {
  return (
   <>
   <SpiderPreloader />
   <SpiderTrail/>
   <Hero/>
   <AboutMe/>
   <Experience/>
    <Projects/>
    <HireMe/>
    <Footer/>
   </>
  );
}
