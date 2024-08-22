import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";

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
      <div className="margin-x mb-20">
        {" "}
        <ArtistsCard artist={DataArtist[0]} />
      </div>
    </main>
  );
}
