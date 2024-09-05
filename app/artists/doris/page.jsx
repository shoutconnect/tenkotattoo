import ArtistsCard from "@/components/artists/Artists";
import ArtistsCardVideo from "@/components/artists/ArtistsCardVideo";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Doris | Pop-Culture & Neo Traditional Tattoos | Tenko Tattoo",
  description:
    "Discover Doris’ expertise in Pop-Culture, Anime, Neo Traditional, and Blackwork tattoos at Tenko Tattoo, Preston.",
  openGraph: {
    title: "Doris | Pop-Culture & Neo Traditional Tattoos | Tenko Tattoo",
    description:
      "Discover Doris’ expertise in Pop-Culture, Anime, Neo Traditional, and Blackwork tattoos at Tenko Tattoo, Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/artists/doris", // Optional but recommended for specific page link
    type: "profile", // Optional Open Graph type, 'profile' can be used if focusing on an individual artist
  },
};

export default function Doris() {
  return (
    <main>
      {/* <ArtistsVideo artist={DataArtist[0]} /> */}
      <div className="margin-x mt-32">
        {" "}
        <ArtistsCardVideo artist={DataArtist[0]} instagram />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
      ></Script>
      <div className="elfsight-app-3c2daab0-d10a-41f0-98cd-88f06dc8613d"></div>
    </main>
  );
}
