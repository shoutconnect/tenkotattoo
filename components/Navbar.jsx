import Link from "next/link";
import Logo from "./UI/Logo";
import Btn from "./UI/Btn";

// ✨ //////////////////////////////

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Laser Removal", href: "/laser-removal" },
    { name: "Aftercare", href: "/tattoo-aftercare" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="py-6">
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
                  <div className="group-hover:bg-tenko bg-neutral-50 my-transition h-1 w-full " />
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
    </nav>
  );
}
