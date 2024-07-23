import PageHeader from "@/components/UI/PageHeader";
import Services from "@/components/workwithtenko/Services";
import Image from "next/image";
import Script from "next/script";

export default function WorkWithTenko() {
  const job = [
    {
      header: [
        { title: "Position", description: "Social Media & Content Creator " },
        {
          title: "Location",
          description: "Between our Tattoo Studio and Office",
        },
        { title: "Flexibility Days", description: "3-5 days per week" },
        {
          title: "Salary",
          description: "£24,000 pro rata",
        },
      ],

      description: (
        <>
          <span className="font-bold text-white">
            Are you a talented content creator with a passion for the tattoo
            scene?
          </span>
          <br />
          <br />
          Tenko Tattoo is on the lookout for a creative content creator who is
          overflowing with ideas to help build Tenko Tattoo's online presence
          through both short-form and long-form content. You'll be the key face
          of our brand on all platforms.
          <br />
          <br />
          At Tenko Tattoo, we pride ourselves on our exceptional team of artists
          and our commitment to creating unique, high-quality tattoos. As part
          of our mission, we aim to enhance our online presence and showcase the
          incredible work of our artists through engaging video content and
          strategic marketing campaigns.
          <br />
          <br />
          <span className="font-bold text-white">
            ✨ This is an incredible opportunity to showcase your creative
            talent and help us build upon the Tenko story.
          </span>
        </>
      ),
      requiriments: [
        "Regularly update and engage with followers on platforms like Instagram, Facebook, and TikTok to maintain a strong online presence.",
        "Plan, execute, and track the success of marketing campaigns to drive engagement and attract new clients.",
        "Create promotional marketing material for merchandise, products, and services. ",
        "Develop artist videos to showcase the talent and work of our team. ",
        "Develop and maintain a content calendar to ensure consistent and timely delivery of marketing materials. ",
        "Monitor and report on the performance of marketing campaigns, content, and social media engagement, providing insights and recommendations for improvement. ",
        "Make contact with previous clients, encouraging them to post reviews and promote the studio and artists. ",
      ],
      qualities: [
        "Proven experience in content creation, especially in video production and editing. ",
        "Excellent communication and collaboration skills. ",
        "Monitor and analyse performance metrics to optimise content and campaign effectiveness. ",
        "Explore and implement new and innovative ways to enhance our online presence and brand awareness. ",
        "Stay up-to-date with industry trends and best practices in content creation and digital marketing. ",
        "Ability to manage multiple projects and meet deadlines. ",
      ],
      opportunities: [
        {
          title: "Paid Online Courses",
          description:
            "Access to a wide range of paid online courses to develop new skills in content creation, video production, digital marketing, and more.",
        },
        {
          title: "Dedicated Learning Time",
          description:
            "Allocated time within your workday to focus on learning and self-improvement, ensuring you can balance professional growth with your daily responsibilities.",
        },
        {
          title: "Mentorship Programs",
          description:
            "Guidance from experienced professionals within our team to help you refine your skills and explore new areas of interest.",
        },
        {
          title: "Creative Freedom",
          description:
            "Encouragement to explore and develop innovative ideas that align with your career goals and our studio's mission.",
        },
      ],
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
              <div className="margin-x flex flex-col items-start gap-10">
                <div className="bg-tenko px-4 pt-2 pb-1 mt-10 rounded-md">
                  <h4 className="text-white">available opportunity:</h4>
                </div>
                {/* Header */}
                {job.map((job, i) => (
                  <div key={i}>
                    {job.header.map((header, i) => (
                      <p key={i} className="text-neutral-400">
                        <span className="font-bold text-white">
                          {header.title}:{" "}
                        </span>
                        {header.description}
                      </p>
                    ))}
                  </div>
                ))}
                {/* Description */}
                <p className="text-neutral-400">{job[0].description}</p>
                {/* Requiriments */}
                <p className="text-neutral-400">
                  <span className="font-bold text-white">
                    🎨 Role Requirements:
                  </span>
                  {job.map((job, i) => (
                    <div key={i} className="w-[95%] mx-auto space-y-1 mt-4">
                      {job.requiriments.map((requiriments, i) => (
                        <div key={i}>
                          <span className="text-white mr-2">•</span>{" "}
                          {requiriments}
                        </div>
                      ))}
                    </div>
                  ))}
                </p>{" "}
                {/* Qualities */}
                <p className="text-neutral-400">
                  <span className="font-bold text-white">
                    📋 The qualities you will need:
                  </span>
                  {job.map((job, i) => (
                    <div key={i} className="w-[95%] mx-auto space-y-1 mt-4">
                      {job.qualities.map((qualities, i) => (
                        <div key={i}>
                          <span className="text-white mr-2">•</span> {qualities}
                        </div>
                      ))}
                    </div>
                  ))}
                  <br /> A strong understanding of digital marketing and
                  managing paid campaigns on social media is a plus but not
                  essential.
                </p>{" "}
                {/* Upskilling Opportunities */}
                <p className="text-neutral-400">
                  <span className="font-bold text-white">
                    🚀 Upskilling Opportunities
                  </span>{" "}
                  <br />
                  <br /> At Tenko Tattoo, we are committed to supporting your
                  professional growth and development. You will have access to a
                  variety of resources and opportunities to help you enhance
                  your skills, including:
                  <br />
                  <br />
                  {job.map((job, i) => (
                    <div key={i} className="w-[95%] mx-auto space-y-1 mt-4">
                      {job.opportunities.map((opportunities, i) => (
                        <div key={i}>
                          <span className="font-bold text-white">
                            <span className="mr-2">•</span>{" "}
                            {opportunities.title}:
                          </span>
                          <br />
                          {opportunities.description}
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* REST */}
                </p>{" "}
                <div className="w-full h-[1px] bg-neutral-600 my-6" />
                <p className="text-neutral-400">
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
