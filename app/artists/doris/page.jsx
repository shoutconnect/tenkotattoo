import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";

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
