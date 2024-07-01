import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function MeetOurArtists() {
  const artists = [
    {
      name: "Dorisu",
      instagram: "/insta",
      portfolio: "/link",
      picture: "/Artists (3).png",
    },
    {
      name: "Sian",
      instagram: "/insta",
      portfolio: "/link",
      picture: "/Artists (1).png",
    },
    {
      name: "Takey",
      instagram: "/insta",
      portfolio: "/link",
      picture: "/Artists (2).png",
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
          width={100}
          height={100}
          className="w-52 h-auto object-cover"
        />
        <Image
          src="/Meet our artists bg.png"
          alt="Meet our artists bg"
          width={600}
          height={600}
          className="absolute absolute-center -z-1 h-80 max-sm:h-64 w-auto object-cover"
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
            <Link href={artist.portfolio}>
              {" "}
              <Image
                src={artist.picture}
                alt="Artists"
                width={500}
                height={500}
                className="h-72 w-auto px-3 object-cover"
              />
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
                className="flex items-center justify-center h-[45px] aspect-square bg-neutral-900"
              >
                {" "}
                <FaInstagram className="h-44 text-neutral-50" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex max-lg:flex-col gap-20 max-lg:gap-8">
        <p className="uppercase font-extrabold text-neutral-900">
          apply for a <span className="text-tenko">residency</span> position{" "}
        </p>
        <p className="uppercase font-extrabold text-neutral-900">
          <span className="text-tenko">guest </span> with tenko tattoo
        </p>
      </div>
    </div>
  );
}
