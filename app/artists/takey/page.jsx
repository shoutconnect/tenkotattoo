import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Takey | Calligraphy, Fine Line & Oriental Tattoos | Tenko Tattoo ",
  description:
    "Experience Takey’s exceptional skills in calligraphy, fine line, and oriental tattoos at Tenko Tattoo in Preston. ",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

export default function Takey() {
  return (
    <main>
      <ArtistsVideo artist={DataArtist[2]} />
      <div className="margin-x">
        {" "}
        <ArtistsCard artist={DataArtist[2]} instagram />
      </div>{" "}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
      <div
        class="elfsight-app-26c1e656-cb10-478e-a293-b5fdce8cb910"
        data-elfsight-app-lazy
        className=""
      ></div>
    </main>
  );
}
