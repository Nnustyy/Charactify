'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as LinkHero, Button} from "@heroui/react";
import { label } from "framer-motion/client";
import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";

export const Logo = () => {
  return (
      <Image
      src='/logo.png'
      alt="logo"
      width={110}
      height={110}
      priority
      />
  );
};

export default function Header() {

  const navItem = [
    {href:'/', label:'Треды'},
    {href:'/add', label:'Добавить'},
    {href:'/about', label:'О нас'},
  ];

  const pathname = usePathname();

  return (
    <Navbar>
        <NavbarBrand>
        
            <Link href='/' className="flex gap-1 items-center">
              <Logo />
              <p className="font-bold text-inherit">THREAD</p>
            </Link>
          
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {navItem.map((item) => {
        const isActive = pathname === item.href
        return (
          <NavbarItem key={item.href}>
            <Link 
            color="foreground"
            href={item.href}
            className={`px-3 py-1 ${isActive ? 'text-blue-500' : 'text-foreground'}
                border border-transparent
                hover:text-blue-300 hover:border-blue-300 hover:rounded-md
                transition-all duration-200
            `
            
          }
            >{item.label}</Link>
          </NavbarItem>
        )
      })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <LinkHero href="#">Login</LinkHero>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
