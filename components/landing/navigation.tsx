"use client";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { links } from "@/app/constants";

const Navigation = () => {
  return (
    <Navbar className="pt-6">
      <NavbarBrand>
        <Image src={Logo} alt="Logo" width={70} />
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden gap-5 sm:flex">
        {links.map((link) => (
          <NavbarItem key={link.name}>
            <Link
              onClick={() => {
                const element = document.getElementById(`${link.link}`);
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              color="foreground"
              className="hover:text-emerald-500 transition hover:cursor-pointer"
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          size="md"
          color="primary"
          variant="shadow"
          className="bg-emerald-500"
        >
          Inscribete
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
