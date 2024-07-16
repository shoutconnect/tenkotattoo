import PageHeader from "@/components/UI/PageHeader";
import CTA from "@/components/home/CTA";
import Services from "@/components/workwithtenko/Services";
import Image from "next/image";

export default function WorkWithTenko() {
  const steps = [
    {
      id: "tabs-with-underline-1",
      step: "Residence/Guest Artist",
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
      <section className="">
        <div className="">
          <Image
            src="/Ripped paper (1).svg"
            alt="Brush stroke"
            width={100}
            height={100}
            draggable="false"
            className="object-cover w-[105%] -mb-1 select-none"
          />
          <div className="bg-neutral-800 pb-10">
            <div className="margin-x">
              <div className="margin-x flex flex-col items-start">
                <div className="bg-tenko px-4 pt-2 pb-1 mb-10 mt-10 rounded-md">
                  <h4 className="text-white">available opportunity:</h4>
                </div>
                <p className="text-neutral-400">
                  <span className="font-bold text-white">Position:</span>{" "}
                  Content Creator
                  <br />
                  <span className="font-bold text-white">Location:</span>{" "}
                  Between our Tattoo Studio and Office, with Remote
                  <br />
                  <span className="font-bold text-white">
                    Flexibility Days:
                  </span>{" "}
                  3-5 days per week, flexible
                  <br />
                  <br />{" "}
                  <span className="font-bold text-white">
                    Are you a talented content creator with a passion for the
                    tattoo scene?{" "}
                  </span>
                  <br />
                  Tenko Tattoo is on the lookout for a creative content creator
                  who is overflowing with ideas to help build Tenko Tattoo's
                  online presence through both short-form and long-form content.
                  You'll be the key face of our brand on all platforms. <br />{" "}
                  <br /> At Tenko Tattoo, we pride ourselves on our exceptional
                  team of artists and our commitment to creating unique,
                  high-quality tattoos. As part of our mission, we aim to
                  enhance our online presence and showcase the incredible work
                  of our artists through engaging video content and strategic
                  marketing campaigns. <br /> <br />
                  <span className="font-bold text-white">
                    ✨ This is an incredible opportunity to showcase your
                    creative talent and help us build upon the Tenko story.
                  </span>{" "}
                  <br /> <br />
                  <span className="font-bold text-white">
                    🎨 Role Requirements:
                  </span>
                  <br /> <br />
                  <span className="text-white pl-6">•</span> Proven experience
                  in content creation, especially in video production and
                  editing. <br />
                  <span className="text-white pl-6">•</span> Excellent
                  communication and collaboration skills. <br />
                  <span className="text-white pl-6">•</span> A creative mindset
                  with a flair for storytelling and visual aesthetics. <br />
                  <span className="text-white pl-6">•</span> A genuine interest
                  in the tattoo scene and willingness to attend events and
                  conventions.
                  <br />
                  <span className="text-white pl-6">•</span> Monitor and analyse
                  performance metrics to optimise content and campaign
                  effectiveness. <br />
                  <span className="text-white pl-6">•</span> Explore and
                  implement new and innovative ways to enhance our online
                  presence and brand awareness. <br />
                  <span className="text-white pl-6">•</span> Stay up-to-date
                  with industry trends and best practices in content creation
                  and digital marketing. <br />
                  <span className="text-white pl-6">•</span> Ability to manage
                  multiple projects and meet deadlines. <br />
                  <span className="text-white pl-6">•</span> Create promotional
                  marketing material for merchandise, products, and services.{" "}
                  <br />
                  <span className="text-white pl-6">•</span> Develop artist
                  videos to showcase the talent and work of our team. <br />
                  <br />A strong understanding of digital marketing and managing
                  paid campaigns on social media is a plus but not essential.
                </p>{" "}
                <div className="w-full h-[1px] bg-neutral-600 my-6" />
                <p className="text-neutral-400">
                  If you're passionate about the tattoo industry and have the
                  creative skills to drive our brand forward, we'd love to hear
                  from you. Join us at Tenko Tattoo and be a part of our
                  exciting journey.
                  <br />
                  <br />{" "}
                  <span className="font-bold text-white">
                    Apply now and help us tell the Tenko Tattoo story!
                  </span>
                </p>
              </div>{" "}
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
        <iframe
          src="https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/11"
          allow="payment"
          height="592"
          className="w-full mb-20 mt-10 margin-x"
        ></iframe>
        <script
          src="
https://www.cognitoforms.com/f/iframe.js"
        ></script>
      </section>
    </main>
  );
}
