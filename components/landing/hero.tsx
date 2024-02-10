'use client'
import { Button, Chip } from "@nextui-org/react";

const Hero = ({id}:{id?:string}) => {
  return (
    <section className="flex justify-center h-screen mt-16" id={id}>
      <div className="space-y-10 text-center w-[90%] md:w-[70%]">
        <Chip
          color="secondary"
          variant="bordered"
          className="hover:translate-x-2 transition"
        >
          <a href="#">
            Inscripciones junio del 2024 (Notificame) <em>→</em>
          </a>
        </Chip>
        <h1 className=" text-6xl md:text-9xl font-bold text-left bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Curso Propedeutico Intensivo Toluca
        </h1>
        <h2 className="text-lg">Preparate para tu exmaen de admision</h2>
        <div className="flex gap-20 justify-center mt-9">
          <Button
            variant="shadow"
            size="lg"
            color="primary"
            className="bg-emerald-500"
          >
            Inscribete
          </Button>
          <Button size="lg" onClick={() => {
            const element = document.getElementById('acercade');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>Saber mas</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
