import ArtistsCard from "@/components/artists/Artists";
import ArtistsVideo from "@/components/artists/ArtistsVideo";
import { DataArtist } from "@/data/DataArtist";

export const metadata = {
  title: "Takey | Calligraphy, Fine Line & Oriental Tattoos | Tenko Tattoo ",
  description:
    "Experience Takey’s exceptional skills in calligraphy, fine line, and oriental tattoos at Tenko Tattoo in Preston. ",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

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
