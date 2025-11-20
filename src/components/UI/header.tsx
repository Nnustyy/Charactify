'use client'
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,} from "@heroui/react";
import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import Button from "./common/button";


export default function Header() {

  const pathname = usePathname();

  return (
    <Navbar className={`py-3.5 h-[${layoutConfig.headerHeight}]`}>
        <NavbarBrand>
        
            <Link href='/' className="flex gap-1 items-center">
              <Image
              src='/logo.png'
              alt={siteConfig.title}
              width={110}
              height={110}
              priority
              />
              <p className="font-bold text-inherit">CHARACTIFY</p>
            </Link>
          
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {siteConfig.navItem.map((item) => {
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
          {/* <Link href='/login' 
          className="border border-transparent
        hover:text-blue-300 hover:rounded-md
          transition-all duration-200">
            Логин
            </Link> */}
            <Button type="button">Логин</Button>
        </NavbarItem>
        <NavbarItem>
          {/* <Link href='/register' 
          className="border border-transparent
        hover:text-blue-300 hover:rounded-md
          transition-all duration-200">
            Регистрация
            </Link> */}
            <Button type="button">Регистрация</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
