import Features from "@/components/gettattooed/Features";
import Tabs from "@/components/gettattooed/Tabs";
import CTA from "@/components/home/CTA";
import Image from "next/image";

export default function GetTattooed() {
  return (
    <main>
      {" "}
      <div className="margin-x pb-24 max-sm:pb-16 pt-16">
        <div className="">
          <h1 className="leading-[60px]">
            <span className="text-tenko">Get</span>tattooed
            <br />
          </h1>
          <div className="flex items-center gap-4">
            {" "}
            <h1 className="leading-[60px]">booking </h1>
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              form
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
      <div className="mt-20">
        <Image
          src="/Ripped paper (1).svg"
          alt="Brush stroke"
          width={100}
          height={100}
          className="object-cover w-[105%] -mb-1"
        />
        <div className="bg-neutral-900 pb-10">
          <div className="margin-x">
            <p className="text-neutral-50 text-center mb-10 pt-10">
              <span className="font-bold">
                Please complete the form in its entirety.
              </span>{" "}
              <br />
              <span className="opacity-70">
                {" "}
                This ensures our artists can provide an accurate quote and
                timeframe for your desired tattoo.
              </span>
            </p>
            <iframe
              src="
https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/8"
              height="1204"
              width="100%"
              className=""
            ></iframe>
            <script
              src="
https://www.cognitoforms.com/f/iframe.js"
            ></script>
          </div>
        </div>{" "}
        <Image
          src="/Ripped paper (2).svg"
          alt="Brush stroke"
          width={100}
          height={100}
          className="object-cover w-[105%] -mt-1"
        />
      </div>
      <Tabs /> <CTA />
    </main>
  );
}
