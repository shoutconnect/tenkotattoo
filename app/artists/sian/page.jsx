import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";

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
      <div className="margin-x mb-20">
        {" "}
        <ArtistsCard artist={DataArtist[1]} />
      </div>
    </main>
  );
}
