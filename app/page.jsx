import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import MeetOurArtists from "@/components/home/MeetOurArtists";
import Services from "@/components/home/Services";
import Travel from "@/components/home/Travel";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <div className="relative -mb-16">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="-z-[1] absolute absolute-center w-full min-w-[1000px] opacity-50"
        />

        <MeetOurArtists />
        <Travel />
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
      ></Script>
      <div class="elfsight-app-4d0e8535-5784-423c-99a8-566bae659a02"></div>
      <CTA />
    </main>
  );
}
