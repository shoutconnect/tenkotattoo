import Features from "@/components/getlasered/Features";
import Tabs from "@/components/getlasered/Tabs";
import Image from "next/image";

export default function LaserRemoval() {
  return (
    <main>
      <div className="margin-x pb-24 max-sm:pb-16 pt-16">
        <div className="">
          <h1 className="leading-[60px]">
            Laser
            <br />
          </h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              removal
            </h1>
          </div>
        </div>
      </div>
      <div className="relative ">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          className="absolute absolute-center w-full opacity-50"
        />
      </div>
      <Features />
      <Tabs />
    </main>
  );
}
