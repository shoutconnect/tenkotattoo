import PageHeader from "@/components/UI/PageHeader";
import Services from "@/components/workwithtenko/Services";
import Image from "next/image";
import Script from "next/script";

export default function WorkWithTenko() {
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
                  Between our Tattoo Studio and Office
                  <br />
                  <span className="font-bold text-white">
                    Flexibility Days:
                  </span>{" "}
                  3-5 days per week
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
                  <span className="text-white pl-6">•</span> Make contact with
                  previous clients, encouraging them to post reviews and promote
                  the studio and artists.
                  <br /> <br />A strong understanding of digital marketing and
                  managing paid campaigns on social media is a plus but not
                  essential.
                  <br />
                  <br />{" "}
                  <span className="font-bold text-white">
                    🚀 Upskilling Opportunities:
                  </span>
                  <br />
                  <br />
                  At Tenko Tattoo, we are committed to supporting your
                  professional growth and development. You will have access to a
                  variety of resources and opportunities to help you enhance
                  your skills, including:
                  <br />
                  <br />
                  <span className=" pl-6 font-bold">
                    • Paid Online Courses:
                  </span>
                  <br /> Access to a wide range of paid online courses to
                  develop new skills in content creation, video production,
                  digital marketing, and more. <br />
                  <span className=" pl-6 font-bold">
                    • Dedicated Learning Time:
                  </span>{" "}
                  <br />
                  Allocated time within your workday to focus on learning and
                  self-improvement, ensuring you can balance professional growth
                  with your daily responsibilities. <br />
                  <span className="pl-6 font-bold">
                    • Mentorship Programs:{" "}
                  </span>
                  <br />
                  Guidance from experienced professionals within our team to
                  help you refine your skills and explore new areas of interest.
                  <br />
                  <span className=" pl-6 font-bold">• Creative Freedom: </span>
                  <br />
                  Encouragement to explore and develop innovative ideas that
                  align with your career goals and our studio's mission.
                  <br />
                  <br />
                </p>{" "}
                <div className="w-full h-[1px] bg-neutral-600 my-6" />
                <p className="text-neutral-400">
                  {/* If you're passionate about the tattoo industry and have the
                  creative skills to drive our brand forward, we'd love to hear
                  from you. Join us at Tenko Tattoo and be a part of our
                  exciting journey. */}
                  By joining Tenko Tattoo, you'll not only be part of a creative
                  and dynamic team but also have the opportunity to grow and
                  advance your career in an environment that values continuous
                  learning and professional development.
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
        <Script
          src="
https://www.cognitoforms.com/f/iframe.js"
        ></Script>
      </section>
    </main>
  );
}
