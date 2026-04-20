import Hero from "../components/Hero";
import Services from "../components/Services";
import  Schedule  from "../components/Schedule";
import Plans from "../components/Plans";
import About from "../components/About";
import Contact from "../components/contact";
import JoinForm from "../components/JoinForm";
export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Services />
      <Schedule />
      <Plans />
      <About />
      <Contact />
      <JoinForm />
    </div>
  );
}