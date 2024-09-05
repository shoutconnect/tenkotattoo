import PageHeader from "@/components/UI/PageHeader";
import Features from "@/components/gettattooed/Features";
import Tabs from "@/components/gettattooed/Tabs";
import CTA from "@/components/home/CTA";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Get Tattooed by Top Artists | Thank You | Tenko Tattoo Preston ",
  description:
    "Ready for your next tattoo? Book a session with our talented artists at Tenko Tattoo in Preston today.",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

export default function GetTattooedTY() {
  return (
    <main>
      <h1 className="mt-96 mb-72 text-center w-full">
        thank you for <br />
        your submission
      </h1>
    </main>
  );
}
