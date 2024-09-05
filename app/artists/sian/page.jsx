import ArtistsCard from "@/components/artists/Artists";
import ArtistsCardVideo from "@/components/artists/ArtistsCardVideo";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Sian | Black & Grey Dot Work Tattoos | Tenko Tattoo",
  description:
    "Explore Sian’s creative black and grey, and dot work tattoo designs, available at Tenko Tattoo, Preston.",
  openGraph: {
    title: "Sian | Black & Grey Dot Work Tattoos | Tenko Tattoo",
    description:
      "Explore Sian’s creative black and grey, and dot work tattoo designs, available at Tenko Tattoo, Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/artists/sian", // Optional but recommended for specific page link
    type: "profile", // Optional Open Graph type for individual profile
  },
};

export default function Sian() {
  return (
    <main>
      {/* <ArtistsVideo artist={DataArtist[1]} /> */}
      <div className="margin-x mt-32">
        {" "}
        <ArtistsCardVideo artist={DataArtist[1]} instagram />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
      ></Script>
      <div className="elfsight-app-ec72951e-0aad-4008-ae40-25cb74c25d84"></div>
    </main>
  );
}
