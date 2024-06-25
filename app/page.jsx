import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import MeetOurArtists from "@/components/home/MeetOurArtists";
import Services from "@/components/home/Services";
import Travel from "@/components/home/Travel";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <MeetOurArtists />
      <Travel />
      <CTA />
    </main>
  );
}
