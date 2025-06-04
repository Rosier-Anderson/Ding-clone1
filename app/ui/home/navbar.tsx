"use client"; // Next.js 13+
import { navlinks } from "../../type/type";
import Logo from "../../../public/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { TbFlag3Filled } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const Navlinks: navlinks[] = [
    {
      name: "Send top-up",
      href: "/#",
      icon: <FaAngleDown />,
    },
    {
      name: "Receive",
      href: "/#receive",
    },
    {
      name: "Receive Gift Cards",
      href: "/#gift-cards",
    },
    {
      name: "Company",
      href: "/#company",
      icon: <FaAngleDown />,
    },
    {
      name: "Help",
      href: "/#help",
    },
    {
      name: "EN",
      href: "/#",
      iconFlag: (
        <TbFlag3Filled className="w-4 h-4 bg-blue-400 rounded-full text-white" />
      ),
      icon: <FaAngleDown />,
    },
    {
      name: "Sign In",
      href: "/login",
    },
  ];

  return (
    <header
      className={`absolute flex items-center justify-center text-sm/6  h-20 w-full  z-50 transition-colors duration-300   text-cyan-900 font-semibold  ${
        scrolled ? "bg-white shadow-md" : "bg-transparent text-white "
      }`}
    >
      {/* i need to wrappe this part inside a div */}

      <Image
        width={70}
        height={70}
        src={Logo}
        alt="the Logo picture"
        className={` text-center   ${scrolled ? " " : "text-white "}`}
      />
      <div className="w-64 h-1"></div>
      <RxHamburgerMenu className="lg:hidden" />
      <nav className="max-lg:hidden">
        <ul className="flex items-center justify-center gap-8 whitespace-nowrap ">
          {Navlinks.map((link, index) => {
            return (
              <li
                key={index}
                className="last:rounded-3xl last:border  last:border-gray-400 last:px-5 last:py-2 last:text-center last:cursor-pointer last:transition-transform last:duration-75 last:ease-in last:hover:scale-95 "
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-center gap-2 hover:border-b hover:border-b-sky-900 "
                >
                  {" "}
                  {link.iconFlag}
                  {link.name}
                  {link.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
