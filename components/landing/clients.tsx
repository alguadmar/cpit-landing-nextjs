import { Card, CardBody, CardHeader, User } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import {clients} from '@/app/constants';
import { randomUUID } from "crypto";

const Clients = () => {
  return (
    <div className="relative flex items-center m-auto w-[75%] h-[230px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
    <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        <div className="slide-track flex w-[calc(250px*10)] gap-16">
            {clients.map((client, index) => (
                <Card className="slide flex w-[600px] items-center justify-center"
                key={index}>
                    <CardHeader>
                        <User
                            name={client.name}
                            description={client.work}
                        />
                    </CardHeader>
                    <CardBody>
                        <p>{client.comment}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    </div>
    </div>
)
};

export default Clients;
