import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import AcercaDe from "@/components/landing/acercaDe";
import Servicios from "@/components/landing/servicios";
import Contacto from "@/components/landing/contacto";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
   <>
    <Navigation/>
     <Hero id="inicio"/>
    <AcercaDe id="acercade"/>
    <Servicios id="servicios"/>
    <Contacto id="contacto"/>
    <Footer/>
   </> 
  );
}
