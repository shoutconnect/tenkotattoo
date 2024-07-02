import CTA from "@/components/getlasered/CTA";
import Features from "@/components/getlasered/Features";
import Services from "@/components/getlasered/Services";
import Tabs from "@/components/getlasered/Tabs";
import Image from "next/image";

export default function LaserRemoval() {
  return (
    <main>
      <header className="relative margin-x margin-y overflow-hidden">
        <div className="relative z-10 ml-10 flex flex-col gap-2">
          <h1 className="text-neutral-50">Laser</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              removal
            </h1>
          </div>
        </div>
        <Image
          src="https://i.ibb.co/WczBmMk/DSCF0310.jpg"
          alt="Background image"
          width={800}
          height={800}
          className="absolute z-[2] top-0 left-0 w-full h-full object-cover blur-sm opacity-60"
        />
        <div className="absolute top-0 left-0 w-full h-full object-cover bg-neutral-900" />
      </header>
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
      </div>
      <Features />
      <Tabs />
      <CTA />
    </main>
  );
}
