import PageHeader from "@/components/UI/PageHeader";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";

export default function Aftercare() {
  return (
    <main>
      <PageHeader
        text=<>
          <h1 className="leading-[60px] text-neutral-50">Aftercare</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              advice
            </h1>
          </div>
        </>
        image={StudioImg[2]}
      />
      <div className="relative margin-y-t">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="-z-[1] absolute absolute-center w-full min-w-[1000px] opacity-50"
        />
      </div>
    </main>
  );
}
