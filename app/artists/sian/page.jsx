import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Sian | Black & Grey Dot Work Tattoos | Tenko Tattoo ",
  description:
    "Explore Sian’s creative black and grey, and dot work tattoo designs, available at Tenko Tattoo, Preston. ",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

export default function Sian() {
  return (
    <main>
      <ArtistsVideo artist={DataArtist[1]} />
      <div className="margin-x">
        {" "}
        <ArtistsCard artist={DataArtist[1]} instagram />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
      <div
        class="elfsight-app-ec72951e-0aad-4008-ae40-25cb74c25d84"
        data-elfsight-app-lazy
        className=""
      ></div>
    </main>
  );
}
