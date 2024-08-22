import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Doris | Pop-Culture & Neo Traditional Tattoos | Tenko Tattoo ",
  description:
    "Discover Doris’ expertise in Pop-Culture, Anime, Neo Traditional, and Blackwork tattoos at Tenko Tattoo, Preston. ",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

export default function Doris() {
  return (
    <main>
      <ArtistsVideo artist={DataArtist[0]} />
      <div className="margin-x">
        {" "}
        <ArtistsCard artist={DataArtist[0]} instagram />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
      <div
        class="elfsight-app-3c2daab0-d10a-41f0-98cd-88f06dc8613d"
        data-elfsight-app-lazy
        className=""
      ></div>
    </main>
  );
}
