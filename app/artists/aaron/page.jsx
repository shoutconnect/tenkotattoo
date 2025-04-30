import ArtistsCardVideo from "@/components/artists/ArtistsCardVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title: "Aaron | Traditional & Blackwork Tattoos | Tenko Tattoo",
  description:
    "Discover Aaron’ expertise in Traditional & Blackwork tattoos at Tenko Tattoo, Preston.",
  openGraph: {
    title:
      "Aaron | Illustrative, Blackwork & Animal Realism Tattoos | Tenko Tattoo",
    description:
      "Discover Aaron’ expertise in Traditional & Blackwork tattoos at Tenko Tattoo, Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/artists/Aaron", // Optional but recommended for specific page link
    type: "profile", // Optional Open Graph type, 'profile' can be used if focusing on an individual artist
  },
};

export default function Aaron() {
  return (
    <main>
      <div className="margin-x mt-32">
        {" "}
        <ArtistsCardVideo artist={DataArtist[2]} instagram />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
      ></Script>
      <div className="elfsight-app-9f4d9657-e738-4e46-baa7-8f17e12bd25d"></div>
    </main>
  );
}
