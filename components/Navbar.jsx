"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./UI/Logo";
import Btn from "./UI/Btn";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavBanner from "./NavBanner";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Laser Removal", href: "/laser-removal" },
    { name: "Aftercare", href: "/aftercare" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="fixed z-[99999] top-0 bg-neutral-50 border-b-[1px] border-neutral-50 backdrop-blur-md w-full">
        <NavBanner />
        <div className="py-0 relative z-10">
          <nav className="margin-x w-full flex justify-between items-start flex-wrap lg:flex-nowrap text-sm py-4">
            <Logo css="h-16 md:h-20 w-auto" black />
            <div className="lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium text-neutral-800 align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent transition-all text-sm"
                aria-controls="navbar-dark"
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
              >
                <Bars3Icon
                  className={`${
                    isOpen ? "hidden" : "block"
                  } flex-shrink-0 size-6`}
                />
                <XMarkIcon
                  className={`${
                    isOpen ? "block" : "hidden"
                  } flex-shrink-0 size-6`}
                />
              </button>
            </div>

            <div
              id="navbar-dark"
              className={`hs-collapse overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isOpen ? "max-h-screen" : "max-h-0"
              } basis-full grow lg:flex lg:items-center lg:justify-end lg:max-h-full`}
            >
              <div className="flex flex-col p-5 gap-4 lg:gap-5 mt-5 lg:flex-row items-end lg:items-center lg:justify-end lg:mt-0 lg:ps-5">
                {menuItems.map((item, i) => (
                  <Link href={item.href} key={i} onClick={closeNavbar}>
                    <div className="pt-1 group flex flex-col gap-1">
                      <p className="max-lg:text-lg mx-1.5 uppercase font-extrabold text-neutral-600 group-hover:text-tenko">
                        {item.name}
                      </p>
                      <div className="group-hover:bg-tenko bg-transparent my-transition h-1 w-full" />
                    </div>
                  </Link>
                ))}
                <Btn
                  text={
                    <>
                      <span className="text-tenko duration-300 delay-200 group-hover:text-neutral-50 ease">
                        GET
                      </span>
                      <span className="text-neutral-50">TATTOOED</span>
                    </>
                  }
                  href="/get-tattooed"
                  onClick={closeNavbar}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
