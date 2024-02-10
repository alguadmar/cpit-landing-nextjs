import Logo from "@/public/logo.svg";
import { Divider, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = ({id}:{id?:string}) => {
    return ( 
        <footer id={id}>
            <div className="flex w-[75%] m-auto flex-col mt-24">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <Image className="mb-4" src={Logo} alt="Logo" width={60} />
                    </div>
                    <div className="flex gap-6 text-2xl text-primary">
                        <a href="#"><FaFacebook /></a>
                        <Tooltip content='cpit.contacto@gmail.com'>
                            <IoMdMail className="hover:cursor-pointer"/>
                        </Tooltip>
                        <Tooltip content='7226735498'>
                            <IoLogoWhatsapp className="hover:cursor-pointer" />
                        </Tooltip>
                    </div>
                </div>
                <Divider/>
                <div className="flex items-center text-center m-auto gap-3">
                    <p className="text-center my-10">© 2024 - Todos los derechos reservados</p>
                    <p> | </p>
                    <p>Hecho por <a href="#" className=" text-blue-600 hover:text-blue-800 transition">Alejandro Guadmar</a></p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;