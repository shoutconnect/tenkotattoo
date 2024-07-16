import PageHeader from "@/components/UI/PageHeader";
import CTA from "@/components/home/CTA";
import Services from "@/components/workwithtenko/Services";
import Image from "next/image";

export default function WorkWithTenko() {
  const steps = [
    {
      id: "tabs-with-underline-1",
      step: "Title 1",
    },
    {
      id: "tabs-with-underline-2",
      step: "Title 2",
    },
  ];

  return (
    <main className="relative">
      <PageHeader
        text=<>
          <h1 className="text-neutral-50">Work with</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              tenko
            </h1>
          </div>
        </>
        image="/first photoshoot/Tenko Tattoo (11).jpg"
      />

      <Services />

      <Image
        src="/Bg Brush.svg"
        alt="Brush stroke"
        width={100}
        height={100}
        draggable="false"
        className="-z-[10] absolute absolute-center w-full min-w-[1000px] opacity-50"
      />
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
            <div className="margin-y">Form 1</div>
          </div>
          <div
            id="tabs-with-underline-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
          >
            <div className="margin-y">Form 2</div>
          </div>
        </div>
      </section>
    </main>
  );
}
