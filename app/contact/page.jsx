import PageHeader from "@/components/UI/PageHeader";
import Features from "@/components/gettattooed/Features";
import CTA from "@/components/home/CTA";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <PageHeader
        text=<>
          <div className="flex items-center gap-4">
            <h1 className="leading-[60px] text-neutral-50">Get in</h1>
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              Contact
            </h1>{" "}
          </div>
          <h1 className="leading-[60px] text-neutral-50">with us</h1>
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
        <div className="pb-10">
          <div className="margin-x relative z-10">
            <p className="text-center mb-10 pt-10">
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
https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/4"
              height="450"
              width="100%"
              className=""
            ></iframe>
            <script
              src="
https://www.cognitoforms.com/f/iframe.js"
            ></script>
          </div>
        </div>{" "}
      </div>
      <CTA />
    </main>
  );
}
