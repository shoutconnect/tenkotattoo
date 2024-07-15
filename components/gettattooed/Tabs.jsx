import { DorisImg, SianImg, TakeyImg } from "@/data/DataImages";
import Image from "next/image";
import Link from "next/link";

export default function Tabs() {
  const steps = [
    {
      id: "tabs-with-underline-1",
      step: "Step 1",
      title: (
        <>
          Choosing a <span className="text-tenko">design</span>
        </>
      ),
      description: (
        <>
          Explore online platforms like{" "}
          <Link
            href="https://www.pinterest.co.uk/"
            target="_blank"
            className="link-tenko"
          >
            Pinterest
          </Link>{" "}
          and{" "}
          <Link
            href="https://images.google.co.uk/"
            target="_blank"
            className="link-tenko"
          >
            Google Image Search{" "}
          </Link>
          to find images that capture your vision. Each of our artists
          specialises in custom tattoos in their own style, so the images don't
          need to be perfect.
          <br />
          <br />
          Share photos or sketches of your idea, the desired size and placement,
          a picture of the area you want tattooed, and your preference for
          colour or black and grey. This is your chance to define the style
          you'd like, or if you're choosing a preferred artist, it will likely
          align with their style.
          <br />
          <br />
          Finally, set your budget. Each artist will price their work
          individually, and depending on whether the tattoo requires multiple
          sessions or can be completed in a day, this will influence the cost.
          <br />
          <br />
          Be mindful that although the artist will aim to keep the price within
          your budget, factors such as size, design intricacy, and time may
          require flexibility. This could mean adjusting your budget or reducing
          the size and complexity of the tattoo.
        </>
      ),
    },
    {
      id: "tabs-with-underline-2",
      step: "Step 2",
      title: (
        <>
          Choosing an <span className="text-tenko">artist</span>
        </>
      ),
      description: (
        <>
          At Tenko Tattoo, each of our artists specialise in different styles.
          You can browse through our{" "}
          <Link href="/artists" target="_blank" className="link-tenko">
            artists portfolios
          </Link>{" "}
          to find the one that best suits you, or you can submit your booking
          inquiry without selecting a preference and the artists who we feel
          most fitting will be in touch.
        </>
      ),
    },
    {
      id: "tabs-with-underline-3",
      step: "Step 3",
      title: (
        <>
          Paying your <span className="text-tenko">deposit</span>
        </>
      ),
      description: (
        <>
          Once you've settled on a concept and chosen an artist, you'll need to
          pay a deposit to secure your booking. The deposit amount, typically a
          percentage of the total price with a set minimum, will be discussed
          with, and is paid directly to your artist.
          <br />
          <br />
          <span className="font-bold text-neutral-800">
            When will you see the design?
          </span>{" "}
          This depends on the artist, but it's generally either the night before
          or the morning of your appointment.
          <br />
          <br />
          Deposits are non-refundable if your session is cancelled within
          48-hours of you appointment time. This policy is strictly enforced by
          the studio and is independent of our artists' individual practices.
        </>
      ),
    },
  ];

  return (
    <div className=" margin-y relative z-10">
      {" "}
      <div className=" margin-x">
        {" "}
        <Image
          src="/icons/Person on the chair.svg"
          alt="Person on the chair"
          width={100}
          height={100}
          className="h-16 w-auto mb-10 mx-auto"
        />
        <h1 className="mb-16 text-center">First time getting a tattoo?</h1>
        <nav className="grid grid-cols-3" aria-label="Tabs" role="tablist">
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
          <button
            type="button"
            className="justify-center hs-tab-active:font-semibold border-neutral-800 hs-tab-active:border-[#ed028c] hs-tab-active:text-[#ed028c] py-4 px-1 inline-flex items-center gap-x-2 border-b-4 text-sm whitespace-nowrap text-neutral-500 hover:text-[#ed028c] focus:outline-none focus:text-[#ed028c] disabled:opacity-50 disabled:pointer-events-none"
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
          <h4>{steps[0].title}</h4>
          <p className="mt-6 mb-16">{steps[0].description}</p>{" "}
          <div className="relative">
            <Image
              src={DorisImg[4]}
              alt="Artist image"
              draggable="false"
              width={1200}
              height={1500}
              className="absolute absolute-center z-[1] w-full h-[250px] md:h-[400px] object-cover opacity-60"
            />
            <div className="w-full h-[250px] md:h-[400px] bg-neutral-800" />
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
          <div className="relative">
            <Image
              src={SianImg[2]}
              alt="Artist image"
              draggable="false"
              width={1200}
              height={1500}
              className="absolute absolute-center z-[1] w-full h-[250px] md:h-[400px] object-cover opacity-60"
            />
            <div className="w-full h-[250px] md:h-[400px] bg-neutral-800" />
          </div>
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
          <div className="relative">
            <Image
              src={TakeyImg[3]}
              alt="Artist image"
              draggable="false"
              width={1200}
              height={1500}
              className="absolute absolute-center z-[1] w-full h-[250px] md:h-[400px] object-cover opacity-60"
            />
            <div className="w-full h-[250px] md:h-[400px] bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
