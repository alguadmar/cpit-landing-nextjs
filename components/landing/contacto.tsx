"use client";
import {
  CardBody,
  Tab,
  Card,
  Tabs,
  Textarea,
  Input,
  Switch,
  Button,
} from "@nextui-org/react";

const Contacto = ({ id }: { id?: string }) => {
  return (
    <section id={id}>
      <p className="text-center font-semibold text-3xl mb-10 mt-32">Contacto</p>
      <div className="flex w-[75%] m-auto flex-col">
        <Tabs aria-label="Options">
          <Tab key="Mensaje" title="Mensaje">
            <Card>
              <CardBody>
                <form className="space-y-6 p-10 w-[80%] m-auto">
                  <p className="text-left font-semibold text-3xl">
                    Envianos un mensaje
                  </p>
                  <Input label="Nombre completo" type="text" className="" />
                  <Input label="Correo Electronico" type="email" className="" />
                  <Textarea
                    label="Mensaje"
                    placeholder="Tus mensajes y dudas..."
                    className=""
                  />
                  <Switch className="text-sm" defaultSelected>
                    Notificame cuando salga la convocatoria
                  </Switch>
                  <br />
                  <Button
                    size="lg"
                    color="primary"
                    variant="solid"
                  >
                    Enviar
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Ubicacion" title="Ubicacion">
            <Card>
              <CardBody>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.075833678945!2d-99.67190872432207!3d19.27906814556526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89b8270b582f%3A0x6496565081665d1b!2sCPIT%20group!5e0!3m2!1ses-419!2smx!4v1706767549730!5m2!1ses-419!2smx"
                  width="100%"
                  height="450"
                  loading="lazy"
                ></iframe>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Contacto;
