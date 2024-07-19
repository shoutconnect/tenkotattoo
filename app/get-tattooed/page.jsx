import PageHeader from "@/components/UI/PageHeader";
import Features from "@/components/gettattooed/Features";
import Tabs from "@/components/gettattooed/Tabs";
import CTA from "@/components/home/CTA";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";
import Script from "next/script";

export default function GetTattooed() {
  return (
    <main>
      <PageHeader
        text=<>
          <h1 className="leading-[60px] text-neutral-50">
            <span className="text-tenko">Get</span>tattooed
            <br />
          </h1>
          <div className="flex items-center gap-4">
            {" "}
            <h1 className="leading-[60px] text-neutral-50">booking </h1>
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              form
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
        <Features />
      </div>
      <div className="mt-20">
        <Image
          src="/Ripped paper (1).svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="object-cover w-[105%] -mb-1 select-none"
        />
        <div className="bg-neutral-800 pb-10">
          <div className="margin-x relative z-10">
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
            <Script
              src="
https://www.cognitoforms.com/f/iframe.js"
            ></Script>
          </div>
        </div>{" "}
        <Image
          src="/Ripped paper (2).svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="object-cover w-[105%] -mt-1 select-none"
        />
      </div>
      <Tabs /> <CTA />
    </main>
  );
}
