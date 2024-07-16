import FAQ from "@/components/UI/FAQ";
import PageHeader from "@/components/UI/PageHeader";
import Description from "@/components/faq/Description";
import CTA from "@/components/home/CTA";
import { StudioImg } from "@/data/DataImages";
import Image from "next/image";
import Link from "next/link";

export default function Faq() {
  const faq = [
    {
      question: "How do I book an appointment at Tenko Tattoo?",
      answer:
        "You can book an appointment through our online form on the website, by emailing the studio at info@tenkotattoo.com, or by directly messaging the shop.",
    },
    {
      question: "What should I do to prepare for my tattoo appointment?",
      answer:
        "Ensure you are well-rested, have had a substantial meal, and are wearing comfortable clothing that allows easy access to the tattoo area. Clean the area thoroughly and avoid alcohol and blood-thinning medication for 24 hours prior to your appointment.",
    },
    {
      question: "How much will my tattoo cost?",
      answer:
        "Tattoo prices are discussed with your artist and are based on several factors, including the time required, complexity, colour, and whether the tattoo can be completed in a single session or requires multiple sessions.",
    },
    {
      question:
        "What is the minimum age requirement for getting a tattoo at Tenko Tattoo?",
      answer:
        "Under UK law, it is illegal to tattoo anyone under the age of 18. All clients must present a valid form of ID at their appointment. The studio operates as an 18+ establishment, and no one under the age of 18 is permitted on the premises.",
    },
    {
      question:
        "Can I bring my own design, or will the artist create one for me?",
      answer:
        "Our artists specialise in custom work within their own styles. They prefer to reinterpret your design in their style, though you should discuss specifics directly with your artist. We do not copy existing work without the original artist's permission.",
    },
    {
      question: "How do I care for my new tattoo?",
      answer: (
        <>
          For detailed aftercare instructions, please refer to the{" "}
          <Link href="/aftercare" className="link-tenko">
            aftercare page
          </Link>{" "}
          on our website.
        </>
      ),
    },
    {
      question: "Do you offer cover-up tattoos?",
      answer:
        "Yes, our artists offer cover-up services. Depending on the existing tattoo, you may need laser removal treatment before a cover-up can be done. Tenko Tattoo will soon offer a 20% discount on laser removal services when booking a cover-up with one of our artists.",
    },
    {
      question: "What if I need to cancel or reschedule my appointment?",
      answer:
        "Tenko Tattoo requires 48-hours notice for cancellations or rescheduling. Failure to provide sufficient notice will result in the forfeiture of your deposit. This policy ensures we can manage our appointments effectively and accommodate other clients.",
    },
    {
      question: "How do you ensure the cleanliness and safety of your studio?",
      answer:
        "We adhere to strict guidelines for safety and hygiene, ensuring a clean and safe environment for both clients and artists.",
    },
    {
      question: "Can I bring a friend to my tattoo appointment?",
      answer:
        "Please discuss this with your artist beforehand. It is generally acceptable to bring one friend, though this may depend on how busy the studio is on the day of your appointment.",
    },
    {
      question: "What is the healing process like for a tattoo?",
      answer:
        "The healing process can vary depending on the tattoo’s size, detail, and colour. Generally, we advise allowing up to two weeks before resuming normal activities.",
    },
    {
      question: "Can I get a tattoo if I’m pregnant or breastfeeding?",
      answer:
        "It is not advisable to get a tattoo if you are pregnant or breastfeeding.",
    },
  ];
  return (
    <main>
      <PageHeader
        text=<>
          <h1 className="leading-[60px] text-neutral-50">Frequently asked</h1>
          <div className="flex items-center gap-4">
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              questions
            </h1>
          </div>
        </>
        image="/first photoshoot/Tenko Tattoo (4).jpg"
      />
      <div className="relative">
        <Image
          src="/Bg Brush.svg"
          alt="Brush stroke"
          width={100}
          height={100}
          draggable="false"
          className="-z-[1] absolute absolute-center w-full min-w-[1000px] opacity-50"
        />
        <Description />
        <div className="margin-x margin-y">
          <FAQ data={faq} />
        </div>
      </div>
      <CTA />
    </main>
  );
}
