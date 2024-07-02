import Image from "next/image";
import FAQ from "../UI/FAQ";

export default function HowWorks() {
  const faq = [
    {
      question: "HOW DOES A TATTOO REMOVAL LASER WORK?",
      answer:
        "Q-Switched Lasers that generate a high powered beam of laser light in an extremely short pulse are the most suitable lasers for tattoo removal treatment. The very short pulse of high powered laser light is absorbed by the tattoo ink particles, breaking them down into smaller pieces, enabling your natural immune defences to absorb and disperse the ink. A gradual fading of the tattoo occurs over a series of treatments.",
    },
    {
      question: "HOW IS LASER TATTOO REMOVAL CARRIED OUT?",
      answer:
        "The skin will be cleaned and then the laser applicator is passed over the tattoo releasing quick pulses of light. An audible ‘clicking’ noise is often heard as the ink particles shatter. After the laser tattoo removal treatment, a soothing lotion and a light dressing may be applied. During treatment protective eye wear will be provided.",
    },
    {
      question: "HOW DOES THE TATTOO REMOVAL TREATMENT FEEL?",
      answer:
        "Most patients describe the sensation of laser tattoo removal as being similar to a hot pin prick or the flick of an elastic band. Whilst mildly uncomfortable, most people tolerate the treatment well. A skin cooling device may be utilised to reduce any discomfort. ",
    },
    {
      question: "HOW DOES THE SKIN LOOK AFTER TREATMENT?",
      answer:
        "An instant whitening of the skin is seen after treatment, but this generally fades quickly. The area is likely to feel tender for a few hours and can be red and swollen for up to 48 hours after tattoo removal.. Some tattoos will form a graze which must be left to heal naturally. Initially the tattoo is unlikely to look any different but will fade over the next 4 to 8 weeks as the body disperses it.",
    },
    {
      question: "ARE THERE ANY SIDE EFFECTS?",
      answer:
        "Very rarely the skin may become lighter or darker, or a small blister may form. Change to skin texture and scarring is possible, though uncommon, and is more likely if any grazes are not allowed to heal naturally. There may be loss of the natural tanning ability in the area treated, which usually improves with time. ",
    },
    {
      question: "HOW MANY LASER TATTOO REMOVAL TREATMENTS ARE NECESSARY?",
      answer:
        "This depends on several factors, including the density and colour of inks and the age of the tattoo. Amateur tattoos can be quick to remove, taking 1 to 6 treatments, whereas professional tattoos vary considerably and some can take up to 15 treatments. Treatment sessions are spaced 6 to 10 weeks apart.",
    },
    {
      question: "HOW LONG DOES EACH TREATMENT TAKE?",
      answer:
        "Treatment time varies depending upon the size of the tattoo but generally is between 10 – 30 minutes. ",
    },
    {
      question: "CONSULTATION PROCEDURE",
      answer:
        "Prior to treatment you must first undergo a consultation where details about your medical history are obtained in order to confirm suitability. Before proceeding you will be asked to sign a consent form and undergo a test patch.",
    },
  ];
  return (
    <div className="margin-x margin-y">
      <div className="margin-x flex flex-col items-start">
        {" "}
        <Image
          src="/icons/Person on the chair.svg"
          alt="Laser removal"
          width={100}
          height={100}
          className="h-16 w-auto mb-10"
        />
        <h1 className="mb-2">
          How it <span className="text-tenko">works</span>
        </h1>
        <h5 className="text-neutral-400 max-md:text-center mb-20">
          Laser tattoo removal & tattoo removal in Preston, Lancashire
        </h5>
        <FAQ data={faq} />
      </div>
    </div>
  );
}
