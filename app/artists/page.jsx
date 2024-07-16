import PageHeader from "@/components/UI/PageHeader";
import ArtistsCard from "@/components/artists/Artists";
import CTA from "@/components/home/CTA";
import { DataArtist } from "@/data/DataArtist";
import { StudioImg } from "@/data/DataImages";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ArrowUpLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";

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
      />{" "}
      <section className="margin-x margin-y space-y-10">
        <h4>
          At Tenko Tattoo, we pride ourselves on the diverse talents and unique
          styles of our artists.
        </h4>
        <p>
          Each artist brings their own creative flair and expertise, ensuring
          that every tattoo is a work of art tailored to the individual. Whether
          you’re looking for intricate designs, bold statements, or delicate
          details, our skilled artists are dedicated to bringing your vision to
          life with professionalism and passion. Explore our artists' profiles
          to discover the perfect match for your next tattoo.
        </p>{" "}
      </section>
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
            <ArtistsCard key={i} artist={artist} />
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
