import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";

export default function ArtistsCardVideo({ artist, instagram }) {
  return (
    <section className="group margin-y">
      <div className="flex max-md:flex-col gap-16 xl:gap-20">
        <div className="overflow-hidden">
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className="max-md:h-[400px] max-md:w-full w-[700px] xl:w-[800px] h-full xl:h-[650px] object-cover my-transition group-hover:scale-110"
            playsInline
          >
            <source src={artist.video} type="video/mp4" />
            <track
              src={artist.video}
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          {/* <Image
            src={artist.picture[0]}
            alt={artist.name}
            draggable="false"
            width={400}
            height={400}
            className="max-md:h-[400px] max-md:w-full w-[700px] xl:w-[800px] h-full object-cover my-transition group-hover:scale-110"
          /> */}
          <div className="relative z-10 md:hidden grid grid-cols-3 mx-10 gap-6 md:gap-20 -mt-12">
            {artist.picture.slice(2, 5).map((pic, i) => (
              <Image
                key={i}
                src={pic}
                alt={artist.name}
                draggable="false"
                width={200}
                height={200}
                className="object-cover aspect-square"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start w-full">
          {artist.logo ? (
            <>
              {" "}
              <Image
                src={artist.logo}
                alt={artist.name}
                draggable="false"
                width={400}
                height={400}
                className="object-cover w-60 h-auto"
              />
            </>
          ) : (
            <h1>
              <span className="text-tenko">{artist.name}</span> Tattoo
            </h1>
          )}
          <div className="h-[1px] w-full my-6 bg-neutral-200" />
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="flex flex-wrap gap-2">
              {artist.tags.map((tag, i) => (
                <p
                  key={i}
                  className="text-sm border border-[#ed028c]/20 bg-[#ed028c]/5 px-2 rounded-sm"
                >
                  {tag}
                </p>
              ))}
            </div>
            <p>{artist.description}</p>
            {instagram ? (
              <Link
                href={artist.instagramURL}
                target="_blank"
                className="flex items-center gap-2 w-full hover:text-tenko my-transition"
              >
                <FaInstagramSquare className="h-6 w-auto text-tenko mr-2" />
                <h5 className="hover:text-tenko my-transition">
                  View <span className="text-tenko">{artist.name}</span>{" "}
                  portfolio
                </h5>
                <ArrowUpRightIcon className="h-4 w-auto" />
              </Link>
            ) : (
              <Link
                href={artist.url}
                className="flex items-center gap-2 w-full hover:text-tenko my-transition"
              >
                <h5 className="hover:text-tenko my-transition">
                  View more about{" "}
                  <span className="text-tenko">{artist.name}</span>
                </h5>
                <ArrowUpRightIcon className="h-4 w-auto" />
              </Link>
            )}
            <div className="max-md:hidden h-28 w-full" />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-md:hidden grid grid-cols-4  mx-12 lg:mx-20 md:gap-12 lg:gap-20 md:-mt-24">
        {artist.picture.slice(2, 6).map((pic, i) => (
          <Image
            key={i}
            src={pic}
            alt={artist.name}
            draggable="false"
            width={200}
            height={200}
            className="object-cover aspect-square"
          />
        ))}
      </div>
    </section>
  );
}
