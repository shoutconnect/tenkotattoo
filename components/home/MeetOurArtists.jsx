import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function MeetOurArtists() {
  const artists = [
    {
      name: "Dorisu",
      instagram: "https://www.instagram.com/dorisu_tattoo/",
      portfolio: "/artists/doris",
      picture: "/doris/26th May - 4.jpg",
    },
    {
      name: "Sian",
      instagram: "https://www.instagram.com/sian.tattoo/",
      portfolio: "/artists/sian",
      picture: "/sian/26th May - 4.jpg",
    },
    {
      name: "Takey",
      instagram: "https://www.instagram.com/takeytattoo.uk/",
      portfolio: "/artists/takey",
      picture: "/takey/26th May - 3.jpg",
    },
  ];
  return (
    <div className="margin-y margin-x flex flex-col gap-16 items-center justify-center  text-center">
      <div className="relative flex flex-col items-center w-auto px-20">
        <h1 className="relative z-10">
          Meet <br />
          Our <br />
          <span className="text-tenko">Artists</span>
        </h1>
        <Image
          src="/Table.svg"
          alt="Table"
          draggable="false"
          width={230}
          height={80}
          className="w-52 h-auto object-cover select-none"
        />
        <Image
          src="/TENKO - Calligraphy (alternative).png"
          alt="Meet our artists bg"
          draggable="false"
          width={350}
          height={350}
          className="absolute absolute-center -z-1 h-80 max-sm:h-64 w-auto object-cover opacity-10 select-none"
        />
      </div>
      <p>
        Each of our artists specialise in a unique style. <br />
        Explore their portfolios to find the perfect match for your next tattoo.
      </p>
      <div className="flex max-lg:flex-col gap-8 items-center justify-center">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="group relative bg-white pt-3 shadow-xl shadow-neutral-100 hover:shadow-[rgba(237,2,140,0.05)] group hover:rotate-6 my-transition flex flex-col items-end"
          >
            <Link href={artist.portfolio} className="h-72 w-full px-3">
              <div className="overflow-hidden">
                <Image
                  src={artist.picture}
                  alt="Artists"
                  draggable="false"
                  width={1000}
                  height={1000}
                  className="h-72 w-full object-cover aspect-square group-hover:scale-125 my-transition select-none"
                />
              </div>
            </Link>
            <div className="bg-tenko flex mt-3 h-auto">
              <Link href={artist.portfolio}>
                {" "}
                <h5 className="text-neutral-50 py-2 px-6">
                  {artist.name}
                </h5>{" "}
              </Link>

              <Link
                href={artist.instagram}
                target="_blank"
                className="flex items-center justify-center h-[45px] aspect-square bg-neutral-800"
                aria-label="Instagram icon"
              >
                {" "}
                <FaInstagram className="h-44 text-neutral-50" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex max-lg:flex-col gap-20 max-lg:gap-8">
        <Link href="/work-with-tenko" className="group my-transition">
          <p className="uppercase font-extrabold text-neutral-800">
            apply for a <span className="text-tenko underline">residency</span>{" "}
            position{" "}
          </p>
        </Link>
        <Link href="/work-with-tenko" className="group">
          <p className="uppercase font-extrabold text-neutral-800">
            <span className="text-tenko underline">guest</span> with tenko
            tattoo
          </p>
        </Link>
      </div>
    </div>
  );
}
