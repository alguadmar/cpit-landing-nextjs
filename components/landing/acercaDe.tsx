import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { cards } from '@/app/constants';
import Clients from "./clients";

const AcercaDe = ({id}:{id?:string}) => {
    return ( 
        <section className="flex flex-col justify-center space-y-6 h-screen" id={id}>
            <p className="text-center font-semibold text-3xl">Acerca de</p>
            <div className="flex flex-col md:flex-row justify-center w-full gap-10 items-center">
                {cards.map((card) => (
                    <Card key={card.title} className="w-[350px] h-[400px] p-6 pt-9">
                        <CardHeader className="text-4xl justify-center">
                            <p className="text-center">{card.icon}</p>
                        </CardHeader>
                        <CardBody>
                            <span className="text-center text-xl mt-6 mb-3">{card.title}</span>
                            <p>{card.description}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <Clients/>
        </section>
     );
}
 
export default AcercaDe;