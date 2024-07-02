import { BanknotesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Tabs() {
  const steps = [
    {
      id: "tabs-with-underline-1",
      step: "Per session",
      price: {
        small: 30,
        medium: 80,
        large: 100,
      },
    },
    {
      id: "tabs-with-underline-2",
      step: "Packages",
      price: {
        small: 25,
        medium: 75,
        large: 95,
      },
    },
    {
      id: "tabs-with-underline-3",
      step: "Cover up offer",
      price: {
        small: 20,
        medium: 60,
        large: 80,
      },
    },
  ];

  return (
    <div className=" margin-y relative z-10">
      {" "}
      <div className="margin-x flex flex-col items-center">
        {" "}
        <Image
          src="/icons/Laser Removal.svg"
          alt="Laser removal"
          width={100}
          height={100}
          className="h-16 w-auto mb-10"
        />
        <h1 className="mb-16 text-center">
          Laser removal
          <span className="text-tenko"> pricing</span>
        </h1>
        <h5 className="text-neutral-400 max-md:text-center">
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
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-20">
            <div className="md:text-center flex flex-col items-center group">
              <h4 className="group-hover:text-tenko my-transition">Small</h4>
              <h6 className="text-sm hover:text-tenko my-transition">
                (3cm x 3cm)
              </h6>
              <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
              <h1 className="text-7xl group-hover:text-tenko my-transition">
                £{steps[0].price.small}
              </h1>
              <p className="text-sm text-neutral-400 mt-4">
                £10 per additional 1cm² for small session
              </p>
            </div>{" "}
            <div className="md:text-center flex flex-col items-center group">
              <h4 className="group-hover:text-tenko my-transition">Medium</h4>
              <h6 className="text-sm hover:text-tenko my-transition">
                (8cm x 8cm)
              </h6>
              <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
              <h1 className="text-7xl group-hover:text-tenko my-transition">
                £{steps[0].price.medium}
              </h1>
              <p className="text-sm text-neutral-400 mt-4">
                £10 per additional 2cm² for medium session
              </p>
            </div>{" "}
            <div className="md:text-center flex flex-col items-center group ">
              <h4 className="group-hover:text-tenko my-transition">Large</h4>
              <h6 className="text-sm">(12cm x 12cm)</h6>
              <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
              <h1 className="text-7xl group-hover:text-tenko my-transition">
                £{steps[0].price.large}
              </h1>
              <p className="text-sm text-neutral-400 mt-4">
                £10 per additional 2cm² for large session
              </p>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <div className="-mt-6 max-md:text-center">
            <h5>
              {" "}
              When booking <span className="text-tenko">
                three or more
              </span>{" "}
              sessions:
            </h5>
            <p className="text-base">
              {" "}
              Further packages available for larger bulk session bookings.
            </p>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-20">
              <div className="text-center flex flex-col items-center group">
                <h4 className="group-hover:text-tenko my-transition">Small</h4>
                <h6 className="text-sm hover:text-tenko my-transition">
                  (3cm x 3cm)
                </h6>
                <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
                <h1 className="text-7xl group-hover:text-tenko my-transition">
                  £{steps[1].price.small}
                </h1>
                <p className="text-sm text-neutral-400 mt-4">
                  £10 per additional 1cm² for small session
                </p>
              </div>{" "}
              <div className="text-center flex flex-col items-center group">
                <h4 className="group-hover:text-tenko my-transition">Medium</h4>
                <h6 className="text-sm hover:text-tenko my-transition">
                  (8cm x 8cm)
                </h6>
                <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
                <h1 className="text-7xl group-hover:text-tenko my-transition">
                  £{steps[1].price.medium}
                </h1>
                <p className="text-sm text-neutral-400 mt-4">
                  £10 per additional 2cm² for medium session
                </p>
              </div>{" "}
              <div className="text-center flex flex-col items-center group ">
                <h4 className="group-hover:text-tenko my-transition">Large</h4>
                <h6 className="text-sm">(12cm x 12cm)</h6>
                <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
                <h1 className="text-7xl group-hover:text-tenko my-transition">
                  £{steps[1].price.large}
                </h1>
                <p className="text-sm text-neutral-400 mt-4">
                  £10 per additional 2cm² for large session
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <div className="-mt-6 max-md:text-center">
            <h5>
              {" "}
              When <span className="text-tenko">
                booking a tattoo session
              </span>{" "}
              with an artists:
            </h5>
            <p className="text-base">
              {" "}
              Tattoo deposit must be paid to artist for discount to be applied.
              The 20% discount is applicable to both individual sessions and
              session packages. The prices below reflect the discount as applied
              to packages.{" "}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-20">
              <div className="text-center flex flex-col items-center group">
                <h4 className="group-hover:text-tenko my-transition">Small</h4>
                <h6 className="text-sm hover:text-tenko my-transition">
                  (3cm x 3cm)
                </h6>
                <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
                <h1 className="text-7xl group-hover:text-tenko my-transition">
                  £{steps[2].price.small}
                </h1>
                <p className="text-sm text-neutral-400 mt-4">
                  £10 per additional 1cm² for small session
                </p>
              </div>{" "}
              <div className="text-center flex flex-col items-center group">
                <h4 className="group-hover:text-tenko my-transition">Medium</h4>
                <h6 className="text-sm hover:text-tenko my-transition">
                  (8cm x 8cm)
                </h6>
                <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
                <h1 className="text-7xl group-hover:text-tenko my-transition">
                  £{steps[2].price.medium}
                </h1>
                <p className="text-sm text-neutral-400 mt-4">
                  £10 per additional 2cm² for medium session
                </p>
              </div>{" "}
              <div className="text-center flex flex-col items-center group ">
                <h4 className="group-hover:text-tenko my-transition">Large</h4>
                <h6 className="text-sm">(12cm x 12cm)</h6>
                <div className="my-4 w-[50%] h-[1px] bg-neutral-300" />
                <h1 className="text-7xl group-hover:text-tenko my-transition">
                  £{steps[2].price.large}
                </h1>
                <p className="text-sm text-neutral-400 mt-4">
                  £10 per additional 2cm² for large session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
