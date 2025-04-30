import PageHeader from "@/components/UI/PageHeader";
import ArtistsCard from "@/components/artists/Artists";
import ArtistsCardVideo from "@/components/artists/ArtistsCardVideo";
import ArtistsWorkTime from "@/components/artists/ArtistsWorkTime";
import CTA from "@/components/home/CTA";
import { DataArtist } from "@/data/DataArtist";
import { StudioImg } from "@/data/DataImages";
import DataWorkTime from "@/data/DataWorkTime";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ArrowUpLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";

export const metadata = {
  title: "Meet Our Talented Tattoo Artists | Tenko Tattoo Studio Preston",
  description:
    "Discover the diverse talents and unique tattoo styles offered by our skilled artists at Tenko Tattoo in Preston.",
  robots: "index, follow",
  openGraph: {
    title: "Meet Our Talented Tattoo Artists | Tenko Tattoo Studio Preston",
    description:
      "Discover the diverse talents and unique tattoo styles offered by our skilled artists at Tenko Tattoo in Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/artists", // Optional but recommended for a specific page link
    type: "website", // Optional Open Graph type
  },
};

export default function Artists() {
  return (
    <main className="">
      <PageHeader
        text=<>
          <h1 className="leading-[60px] text-neutral-50">Find your</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              artist
            </h1>
          </div>
        </>
        image={StudioImg[2]}
      />

      <ArtistsWorkTime data={DataWorkTime} />
      <section className="relative flex flex-col items-center w-auto px-20 text-center">
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
      </section>
      <section>{/* Work time */}</section>
      <section className="relative margin-y">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="-z-[1] absolute absolute-center w-full min-w-[1000px] opacity-50"
        />
        <div className="margin-x">
          {DataArtist.map((artist, i) => (
            // <ArtistsCard key={i} artist={artist} />
            <ArtistsCardVideo key={i} artist={artist} />
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
