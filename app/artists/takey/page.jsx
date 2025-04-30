import ArtistsCard from "@/components/artists/Artists";
import ArtistsCardVideo from "@/components/artists/ArtistsCardVideo";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Takey | Calligraphy, Fine Line & Oriental Tattoos | Tenko Tattoo",
  description:
    "Experience Takey’s exceptional skills in calligraphy, fine line, and oriental tattoos at Tenko Tattoo in Preston.",
  openGraph: {
    title: "Takey | Calligraphy, Fine Line & Oriental Tattoos | Tenko Tattoo",
    description:
      "Experience Takey’s exceptional skills in calligraphy, fine line, and oriental tattoos at Tenko Tattoo in Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/artists/takey", // Optional but recommended for a specific page link
    type: "profile", // Optional Open Graph type, 'profile' for an individual artist
  },
};

export default function Takey() {
  return (
    <main>
      {/* <ArtistsVideo artist={DataArtist[2]} /> */}
      <div className="margin-x mt-32">
        {" "}
        <ArtistsCardVideo artist={DataArtist[4]} instagram />
      </div>{" "}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
      ></Script>
      <div className="elfsight-app-26c1e656-cb10-478e-a293-b5fdce8cb910"></div>
    </main>
  );
}
