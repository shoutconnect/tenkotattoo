import ArtistsCardVideo from "@/components/artists/ArtistsCardVideo";
import { DataArtist } from "@/data/DataArtist";
import Script from "next/script";

export const metadata = {
  title:
    "Abbie | Illustrative, Blackwork & Animal Realism Tattoos | Tenko Tattoo",
  description:
    "Discover Abbie’ expertise in Illustrative, Blackwork and Animal Realism tattoos at Tenko Tattoo, Preston.",
  openGraph: {
    title:
      "Abbie | Illustrative, Blackwork & Animal Realism Tattoos | Tenko Tattoo",
    description:
      "Discover Abbie’ expertise in Illustrative, Blackwork and Animal Realism tattoos at Tenko Tattoo, Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/artists/abbie", // Optional but recommended for specific page link
    type: "profile", // Optional Open Graph type, 'profile' can be used if focusing on an individual artist
  },
};

export default function Abbie() {
  return (
    <main>
      <div className="margin-x mt-32">
        {" "}
        <ArtistsCardVideo artist={DataArtist[1]} instagram />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
      ></Script>
      <div className="elfsight-app-da81ab31-e2f2-4500-97ee-91fddb5d18fb"></div>
    </main>
  );
}
