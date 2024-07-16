import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";

export default function Takey() {
  return (
    <main>
      <ArtistsVideo artist={DataArtist[2]} />
      <div className="margin-x mb-20">
        {" "}
        <ArtistsCard artist={DataArtist[2]} />
      </div>
    </main>
  );
}
