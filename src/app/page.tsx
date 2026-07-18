import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Workshop from "@/components/Workshop";
import Process from "@/components/Process";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Workshop />
      <Process />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
