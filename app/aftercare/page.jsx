import PageHeader from "@/components/UI/PageHeader";
import CTA from "@/components/home/CTA";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Tattoo Aftercare Tips | Ensure Beautiful & Vibrant Healing | Tenko Tattoo ",
  description:
    "Ensure your tattoo heals beautifully and remains vibrant by following Tenko Tattoo’s expert aftercare guidelines. ",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

export default function Aftercare() {
  const steps = [
    {
      id: "tabs-with-underline-1",
      step: "Cling Film",
      items: [
        {
          title: "Preparation",
          description:
            "Wash and dry your hands thoroughly before handling the tattoo area.",
        },
        {
          title: "Cleaning",
          description:
            "Remove the cling film and wash or shower your tattoo using warm water. Mild, fragrance-free soap may be used to gently wash away plasma and ink.",
        },
        {
          title: "Drying",
          description:
            "Pat the area dry with a clean, unused towel or kitchen roll. Do not rub the tattoo.",
        },
        {
          title: "Moisturising",
          description:
            "Apply a thin layer of aftercare cream. We recommend Palmers Cocoa Butter or Yayo aftercare balm. Avoid over-moisturising, as this can clog pores and cause spots around the tattoo.",
        },
        {
          title: "Re-Wrapping",
          description:
            "Secure the area with fresh cling film and micropore tape, particularly if you are wearing clothing over the tattoo, are around animals, or are working in a dirty environment.",
        },
        {
          title: "Frequency",
          description: "Change the cling film every four hours or as needed.",
        },
        {
          title: "Night Care",
          description:
            "Keep the tattoo wrapped before going to bed for at least the first 2-3 days.",
        },
      ],
    },
    {
      id: "tabs-with-underline-2",
      step: "Tattoo Film",
      items: [
        {
          title: "Initial Removal",
          description:
            "The morning after receiving your tattoo, remove the film in the shower using lukewarm water. Gently peel it off.",
        },
        {
          title: "Cleaning and Drying",
          description:
            "Gently wash away plasma and ink and pat dry with a clean, unused towel or kitchen roll. Do not rub the tattoo. ",
        },
        {
          title: "New Sheet Application",
          description: (
            <>
              Remove the thin back strip (side with the grids) and part of the
              larger backing .<br />
              Place onto the tattoo, leaving at least an inch around the tattoo
              for potential leakage.
              <br />
              Peel off sides with the green arrows, smoothing out any air
              bubbles.
            </>
          ),
        },
        {
          title: "Duration",
          description:
            "Leave the new sheet on for up to 5 days, removing it in the same manner as initially done.",
        },
        {
          title: "Post-Film Care",
          description:
            "After removal of the film, continue to moisturise the tattoo with recommended aftercare creams such as Palmers Cocoa Butter or Yayo aftercare.",
        },
      ],
    },
  ];

  return (
    <main className="relative">
      <Image
        src="/Bg Brush.svg"
        alt="Brush stroke"
        width={100}
        height={100}
        draggable="false"
        className="-z-[10] absolute absolute-center w-full min-w-[1000px] opacity-50"
      />{" "}
      <PageHeader
        text=<>
          <h1 className="leading-[60px] text-neutral-50">Aftercare</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              advice
            </h1>
          </div>
        </>
        image="/first photoshoot/Tenko Tattoo (5).jpg"
      />
      <div className="relative">
        <section className="margin-x margin-y space-y-10">
          <h4>Congratulations on your new tattoo!</h4>
          <p>
            Proper aftercare is crucial to ensure your tattoo heals beautifully
            and stays vibrant for years to come. Following these guidelines will
            help you protect your new ink, avoid infection, and maintain the
            quality of your tattoo. Below are the steps you need to follow to
            take care of your tattoo during the healing process.
          </p>{" "}
        </section>
      </div>
      <section className="margin-x">
        <nav className="grid grid-cols-2" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="justify-center hs-tab-active:font-semibold border-neutral-800 hs-tab-active:border-[#ed028c] hs-tab-active:text-[#ed028c] py-4 px-1 inline-flex items-center gap-x-2 border-b-4 text-sm whitespace-nowrap text-neutral-500 hover:text-[#ed028c] focus:outline-none focus:text-[#ed028c] disabled:opacity-50 disabled:pointer-events-none active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            <h6 className="hs-tab-active:text-tenko">{steps[0].step}</h6>
          </button>
          <button
            type="button"
            className="justify-center hs-tab-active:font-semibold border-neutral-800 hs-tab-active:border-[#ed028c] hs-tab-active:text-[#ed028c] py-4 px-1 inline-flex items-center gap-x-2 border-b-4 text-sm whitespace-nowrap text-neutral-500 hover:text-[#ed028c] focus:outline-none focus:text-[#ed028c] disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            <h6 className="hs-tab-active:text-tenko">{steps[1].step}</h6>
          </button>
        </nav>
        <div className="mt-16">
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
          >
            <div className="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-4 gap-12">
              <div className="col-span-3 flex flex-col">
                {steps[0].items.map((item, i) => (
                  <div
                    key={i}
                    className={`group flex flex-col items-start gap-2 p-6  ${
                      i % 2 === 0 ? "" : "bg-neutral-300/40"
                    }`}
                  >
                    <div
                      className={`px-4 py-1 ${
                        i % 2 === 0 ? "bg-neutral-800" : "bg-[#ed028c]"
                      }`}
                    >
                      <h6 className=" text-white">{item.title}</h6>
                    </div>

                    <p className="-mt-1">{item.description}</p>
                  </div>
                ))}
              </div>{" "}
              <div className="bg-neutral-900 col-span-1 overflow-hidden max-lg:h-48">
                <Image
                  src="/first photoshoot/Tenko Tattoo (12).jpg"
                  alt="Tattoo aftercare"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover opacity-50 md:scale-125"
                />
              </div>
            </div>
          </div>
          <div
            id="tabs-with-underline-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
          >
            <div className="max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-4 gap-12">
              {" "}
              <div className="bg-neutral-900 col-span-1 overflow-hidden max-lg:h-48">
                <Image
                  src="/first photoshoot/Tenko Tattoo (15).jpg"
                  alt="Tattoo aftercare"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover opacity-50 md:scale-125"
                />
              </div>
              <div className="col-span-3 flex flex-col">
                {steps[1].items.map((item, i) => (
                  <div
                    key={i}
                    className={`group flex flex-col items-start gap-2 p-6  ${
                      i % 2 === 0 ? "" : "bg-neutral-300/40"
                    }`}
                  >
                    <div
                      className={`px-4 py-1 ${
                        i % 2 === 0 ? "bg-neutral-800" : "bg-[#ed028c]"
                      }`}
                    >
                      <h6 className=" text-white">{item.title}</h6>
                    </div>

                    <p className="-mt-1">{item.description}</p>
                  </div>
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="margin-x margin-y">
        <div className="flex max-md:flex-col items-center gap-12 w-[80%] mx-auto">
          <Image
            src="/Yayo Logo.png"
            alt="Yayo Logo"
            width={400}
            height={400}
            draggable="false"
            className="h-32 w-auto object-cover select-none"
          />
          <h4 className="max-md:text-center">
            You can purchase yayo aftercare balm{" "}
            <span className="text-tenko">in-person</span> from tenko tattoo or{" "}
            <span className="text-tenko">online</span> directly from{" "}
            <Link className="link-tenko" href="https://yayofamilia.uk/">
              www.yayofamilia.uk
            </Link>
          </h4>
        </div>
      </section>
      <CTA />
    </main>
  );
}
