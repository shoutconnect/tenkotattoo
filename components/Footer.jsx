import Link from "next/link";
import Logo from "./UI/Logo";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { DataStudio } from "@/data/DataStudio";

const navigation = {
  studio: [
    { name: "Get Tattooed", href: "/get-tattooed" },
    { name: "Laser Removal", href: "/laser-removal" },
    { name: "Work with Tenko", href: "/work-with-tenko" },
    { name: "Resident & Guest Artists", href: "/resident-guest-artists" },
  ],
  artists: [
    { name: "Dorisu Tattoo", href: "/artists/doris" },
    { name: "Sian Tattoo", href: "/artists/sian" },
    { name: "Takey Tattoo", href: "/artists/takey" },
  ],
  important: [
    { name: "Tattoo Aftercare", href: "/aftercare" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/frequently-asked-questions" },
    // { name: "Terms & conditions", href: "/terms-and-conditions" },
    // { name: "Cookies policy", href: "/cookies-policy" },
  ],

  social: [
    {
      name: "Facebook",
      href: DataStudio.facebookURL,
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: DataStudio.instagramURL,
      icon: FaInstagram,
    },
    {
      name: "Tiktok",
      href: DataStudio.tiktokURL,
      icon: FaTiktok,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-50 bg-neutral-800">
      <div className="margin-x pt-14 pb-7">
        <div className="flex items-start max-md:flex-col max-md:items-center max-md:gap-16 ">
          <div className="">
            <Logo css="h-auto lg:w-44 max-lg:w-32" />
          </div>
          <div className="w-full flex max-sm:flex-wrap items-start justify-end max-sm:justify-start gap-10 max-sm:gap-x-0 max-sm:gap-y-10 max-md:justify-around">
            <div className="w-36 max-sm:w-1/2 max-sm:text-center">
              <h3 className="uppercase font-bold tracking-wider text-sm  text-tenko my-transition">
                Studio
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.studio.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-semibold tracking-wider text-neutral-400 hover:text-neutral-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-36 max-sm:w-1/2 max-sm:text-center">
              <h3 className="uppercase font-bold tracking-wider text-sm  text-tenko my-transition">
                Artists
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.artists.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-semibold tracking-wider text-neutral-400 hover:text-neutral-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-36 max-sm:w-1/2 max-sm:text-center">
              <h3 className="uppercase font-bold tracking-wider text-sm  text-tenko my-transition">
                Information
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.important.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-semibold tracking-wider text-neutral-400 hover:text-neutral-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:gap-8 mt-8 border-t border-neutral-200/10 pt-8 select-none">
          <p className="text-xs font-normal text-neutral-300 tracking-wider">
            &copy; {new Date().getFullYear()} Tenko Tattoo. All rights reserved.
          </p>
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-neutral-300 hover:text-tenko my-transition"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
