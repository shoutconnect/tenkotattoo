import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import MeetOurArtists from "@/components/home/MeetOurArtists";
import Services from "@/components/home/Services";
import Travel from "@/components/home/Travel";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <div className="relative ">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="-z-[1] absolute absolute-center w-full opacity-50"
        />

        <MeetOurArtists />
        <Travel />
      </div>
      <CTA />
    </main>
  );
}
