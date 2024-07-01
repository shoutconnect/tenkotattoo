import Link from "next/link";

export default function Tabs() {
  const steps = [
    {
      id: "tabs-with-underline-1",
      step: "Per session",
      title: (
        <>
          Choosing a <span className="text-tenko">design</span>
        </>
      ),
    },
    {
      id: "tabs-with-underline-2",
      step: "Packages",
      title: (
        <>
          Choosing an <span className="text-tenko">artist</span>
        </>
      ),
    },
    {
      id: "tabs-with-underline-3",
      step: "Cover up offer",
      title: (
        <>
          Paying your <span className="text-tenko">deposit</span>
        </>
      ),
    },
  ];

  return (
    <div className=" margin-y relative z-10">
      {" "}
      <div className=" margin-x ">
        {" "}
        <h1 className="mb-16 text-center">Laser removal pricing</h1>
        <h5 className="text-neutral-400">
          The prices listed here are approximate. The cost of laser treatment
          can vary based on the design's negative space and whether the tattoo
          is multi-coloured. For an accurate quote or any questions about
          pricing, please{" "}
          <Link href="/contact" target="_blank" className="link-tenko">
            contact us
          </Link>{" "}
          for a free consultation.
        </h5>
        <nav
          className="mt-16 grid grid-cols-3"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="justify-center hs-tab-active:font-semibold border-neutral-900 hs-tab-active:border-[#ed028c] hs-tab-active:text-[#ed028c] py-4 px-1 inline-flex items-center gap-x-2 border-b-4 text-sm whitespace-nowrap text-neutral-500 hover:text-[#ed028c] focus:outline-none focus:text-[#ed028c] disabled:opacity-50 disabled:pointer-events-none active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            <h6 className="hs-tab-active:text-tenko">{steps[0].step}</h6>
          </button>
          <button
            type="button"
            className="justify-center hs-tab-active:font-semibold border-neutral-900 hs-tab-active:border-[#ed028c] hs-tab-active:text-[#ed028c] py-4 px-1 inline-flex items-center gap-x-2 border-b-4 text-sm whitespace-nowrap text-neutral-500 hover:text-[#ed028c] focus:outline-none focus:text-[#ed028c] disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            <h6 className="hs-tab-active:text-tenko">{steps[1].step}</h6>
          </button>
          <button
            type="button"
            className="justify-center hs-tab-active:font-semibold border-neutral-900 hs-tab-active:border-[#ed028c] hs-tab-active:text-[#ed028c] py-4 px-1 inline-flex items-center gap-x-2 border-b-4 text-sm whitespace-nowrap text-neutral-500 hover:text-[#ed028c] focus:outline-none focus:text-[#ed028c] disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-underline-item-3"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
          >
            <h6 className="hs-tab-active:text-tenko">{steps[2].step}</h6>
          </button>
        </nav>
      </div>
      <div className="mt-16 margin-x">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <p className="mt-6 mb-16">{steps[0].description}</p>{" "}
          <div className="bg-tenko">
            <h5>
              {" "}
              When booking <span className="text-tenko">
                three or more
              </span>{" "}
              sessions:
            </h5>
            <h6 className="text-base">
              {" "}
              Further packages available for larger bulk session bookings
            </h6>
          </div>
        </div>
        <div
          id="tabs-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          {" "}
          <h4>{steps[1].title}</h4>
          <p className="mt-6 mb-16">{steps[1].description}</p>{" "}
        </div>
        <div
          id="tabs-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          {" "}
          <h4>{steps[2].title}</h4>
          <p className="mt-6 mb-16">{steps[2].description}</p>
        </div>
      </div>
    </div>
  );
}
