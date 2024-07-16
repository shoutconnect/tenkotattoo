import Image from "next/image";

export default function Hero() {
  return (
    <div className=" pt-[160px]">
      <div className="max-md:-mt-10 md:py-6">
        <div className="margin-x relative flex items-center justify-center h-[550px] md:h-auto">
          <div className="relative md:px-10 z-10 margin-y flex flex-col items-start justify-center w-full h-[700px]">
            <h1 className="text-7xl lg:text-8xl xl:text-9xl text-tenko">
              Wisdom
            </h1>
            <h1 className="text-7xl lg:text-8xl xl:text-9xl bg-tenko text-neutral-50 px-4 xl:px-8 rounded-md">
              meets
            </h1>
            <h1 className="text-7xl lg:text-8xl xl:text-9xl text-tenko">art</h1>
          </div>
          {/* <Image
          src="/placeholder.png"
          width={1920}
          height={1080}
          className="aspect-video absolute z-2 top-0 left-0 right-0 mx-auto w-full h-full object-cover"
          draggable="false"
        /> */}
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className="aspect-video absolute z-2 top-0 left-0 right-0 mx-auto w-full h-full object-cover"
            playsInline
          >
            <source src="/videos/Dorisu - 26th May.mp4" type="video/mp4" />
            <track
              src="/videos/Dorisu - 26th May.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <div className="aspect-video absolute z-0 top-0 left-0 right-0 mx-auto w-full h-full object-cover bg-gradient-to-br from-neutral-950 via-neutral-950/50 to-transparent opacity-40" />
          <div className="aspect-video absolute z-0 top-0 left-0 right-0 mx-auto w-full h-full object-cover bg-gradient-to-br from-neutral-950 via-neutral-950/50 to-transparent opacity-90" />
        </div>
      </div>{" "}
    </div>
  );
}
