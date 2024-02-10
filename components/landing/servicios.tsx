"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { services } from "@/app/constants";

const Servicios = ({ id }: { id: string }) => {
  return (
    <section id={id} className="mt-36 sm:mt-0">
      <p className="text-center font-semibold text-3xl mb-20">Servicios</p>
      {services.map((service) => (
        <Accordion variant="bordered" className="w-[75%] m-auto mt-5">
            <AccordionItem id={service.title} aria-label={service.title} title={service.title}>
                <p>{service.description}</p>
            </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
};

export default Servicios;
