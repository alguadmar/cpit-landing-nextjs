import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import AcercaDe from "@/components/landing/acercaDe";
import Servicios from "@/components/landing/servicios";

export default function Home() {
  return (
   <>
    <Navigation/>
     <Hero id="inicio"/>
    <AcercaDe id="acercade"/>
    <Servicios id="servicios"/>
   </> 
  );
}
