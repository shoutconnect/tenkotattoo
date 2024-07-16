import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";

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
