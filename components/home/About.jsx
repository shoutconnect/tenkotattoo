import Image from "next/image";

export default function About() {
  return (
    <div className="margin-x relative z-20 flex max-lg:flex-col xl:gap-16 gap-20 max-sm:gap-12 lg:gap-12 sm:-mt-24 max-sm:items-center max-sm:justify-center">
      <div className="max-sm:hidden max-md:-mt-10 sm:p-10 w-[575px] max-xl:w-[500px] max-sm:w-full max-lg:mx-auto">
        <div className="relative bg-tenko rounded-full aspect-square w-full max-sm:mb-10">
          <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-6  py-12">
            {" "}
            <Image
              src="/Flower.svg"
              width={100}
              height={100}
              alt="Flower"
              draggable="false"
              className="size-6 sm:h-10 sm:w-10 max-sm:mb-4 -mt-6"
            />
            <h1 className="relative z-10 text-neutral-50 text-3xl sm:text-7xl lg:text-7xl text-center max-sm:-mb-2">
              Tenko
            </h1>
            <div className="relative w-[550px]">
              <Image
                src="/Brush Stroke.svg"
                alt="Brush Stroke"
                width={600}
                height={600}
                className="absolute -top-[66px] sm:-top-28 max-sm:right-20 right-4 w-[400px] sm:w-[550px] h-auto"
              />
            </div>
            <p className="max-sm:text-sm relative z-10 text-neutral-50 font-bold max-sm:w-[80%] w-[85%] text-center md:-mt-4">
              Upon reaching 1,000 years old and gaining its ninth tail, a
              kitsune turns white or golden, becoming a Tenko, the most powerful
              form of the kitsune, and ascends to the heavens.
            </p>
            <div className="h-full w-full relative">
              <Image
                src="/TENKO - Calligraphy (alternative).png"
                width={420}
                height={420}
                className="absolute left-0 right-0 mx-auto w-40 xl:w-60  h-auto"
                alt="Pink circle"
                draggable="false"
              />
            </div>
          </div>
          <Image
            src="/Round Japanese Effect SVG.svg"
            alt="Round Japanese Effect SVG"
            width={600}
            height={600}
            draggable="false"
            className="absolute top-0 left-0 h-full w-full p-5 opacity-40"
          />
        </div>
        <div className="lg:hidden w-full h-full " />
      </div>
      <div className="relative -mt-16">
        <Image
          src="/Tenko Circle (no text).svg"
          width={600}
          height={600}
          alt="Tenko Circle"
          className="w-full h-auto sm:hidden"
        />
        <Image
          src="/TENKO - Calligraphy (alternative).png"
          width={420}
          height={420}
          className="absolute -bottom-16 left-0 right-0 mx-auto w-[100px] h-auto"
          alt="Pink circle"
          draggable="false"
        />
      </div>
      <div className="bg-neutral-800 lg:w-[90%] p-10 space-y-5 max-md:mt-10">
        <h6 className="text-neutral-50 text-base max-sm:text-sm">
          <span className="text-neutral-400">About</span> tenko tattoo
        </h6>
        <h4 className="text-neutral-50">
          Where the <span className="text-tenko">wisdom</span> of ancient
          Japanese folklore and the <span className="text-tenko">art</span> of
          modern tattooing come together.
        </h4>
        <p className="text-neutral-400">
          Inspired by the celestial Tenko fox, our studio believes that every
          tattoo is a transformative experience, a mark of both personal and
          spiritual growth.
          <br />
          <br />
          Here, every needle stroke is an expression of wisdom, every ink drop a
          testament to transformation. As we sketch, draw, and etch, we're
          guided by the values of authenticity, craftsmanship, and
          individuality.
          <br />
          <br />
        </p>
        <div className="bg-tenko h-1.5 w-20" />
      </div>
    </div>
  );
}
