import Link from "next/link";
import Logo from "./UI/Logo";
import Btn from "./UI/Btn";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavBanner from "./NavBanner";

// ✨ //////////////////////////////

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Laser Removal", href: "/laser-removal" },
    { name: "Aftercare", href: "/aftercare" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <div className="fixed z-[99999] bg-neutral-50 border-b-[1px] border-neutral-50 backdrop-blur-md w-full">
        {" "}
        <NavBanner />
        <div className="py-0 relative z-10">
          <nav className="margin-x w-full flex justify-between items-start flex-wrap  lg:flex-nowrap text-sm py-4">
            <Logo css="h-20 w-auto" black />
            <div className="lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium  text-neutral-800 align-middle  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent transition-all text-sm"
                data-hs-collapse="#navbar-dark"
                aria-controls="navbar-dark"
                aria-label="Toggle navigation"
              >
                <Bars3Icon className="hs-collapse-open:hidden flex-shrink-0 size-6" />
                <XMarkIcon className="hs-collapse-open:block hidden flex-shrink-0 size-6" />
              </button>
            </div>

            <div
              id="navbar-dark"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block "
            >
              <div className="flex flex-col p-5 gap-4 lg:gap-5 mt-5 lg:flex-row items-end lg:items-center lg:justify-end lg:mt-0 lg:ps-5">
                {menuItems.map((item, i) => (
                  <Link href={item.href} key={i} className="">
                    <div className="pt-1 group flex flex-col gap-1">
                      <p className="max-lg:text-lg mx-1.5 uppercase font-extrabold text-neutral-600 group-hover:text-tenko">
                        {item.name}
                      </p>{" "}
                      <div className="group-hover:bg-tenko bg-transparent my-transition h-1 w-full " />
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
                />
              </div>
            </div>
          </nav>
        </div>
        {/* <nav className="py-6 relative z-10">
        <div className="margin-x w-full flex justify-between items-start">
          <Logo css="h-20 w-auto" black />

          <div className="flex items-start gap-4">
            <div className="flex items-start">
              {menuItems.map((item, i) => (
                <Link href={item.href} key={i} className=" mt-1">
                  <div className="pt-1 px-2 group flex flex-col gap-1">
                    <p className="mx-1.5 uppercase font-extrabold text-neutral-600 group-hover:text-tenko">
                      {item.name}
                    </p>{" "}
                    <div className="group-hover:bg-tenko bg-transparent my-transition h-1 w-full " />
                  </div>
                </Link>
              ))}
            </div>

            <Btn
              text={
                <>
                  <span className="text-tenko duration-300 delay-200 group-hover:text-neutral-50 ease">
                    GET
                  </span>
                  <span className="text-neutral-50">TATTOOED</span>
                </>
              }
              href="/contact"
            />
          </div>
        </div>
      </nav> */}
      </div>
    </div>
  );
}
