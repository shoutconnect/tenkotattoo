import PageHeader from "@/components/UI/PageHeader";
import Features from "@/components/getlasered/Features";
import HowWorks from "@/components/getlasered/HowWorks";
import Services from "@/components/getlasered/Services";
import Tabs from "@/components/getlasered/Tabs";
import CTA from "@/components/home/CTA";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";

export default function LaserRemoval() {
  return (
    <main>
      <PageHeader
        text=<>
          <h1 className="text-neutral-50">Laser</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              removal
            </h1>
          </div>
        </>
        image="/first photoshoot/Tenko Tattoo (11).jpg"
      />

      <Services />

      <div className="relative ">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="-z-[1] absolute absolute-center w-full min-w-[1000px] opacity-50"
        />
      </div>
      {/*<Features />
      <Tabs />
      <HowWorks /> */}

      <div className="margin-x mb-20">
        <p className="text-center mb-10">
          <span className="font-bold">
            If you are interested in getting a tattoo removed, please fill out
            the form below and we will get back to you as soon as possible.{" "}
          </span>{" "}
        </p>
        <iframe
          src="https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/4"
          height="450"
          width="100%"
          className=""
        ></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js"></script>
      </div>
      <CTA />
    </main>
  );
}
