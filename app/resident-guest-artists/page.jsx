import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Join Our Team: Resident & Guest Artists | Tenko Tattoo Preston",
  description:
    "Interested in joining Tenko Tattoo as a Resident or Guest Artist? Explore our exciting opportunities in Preston.",
  robots: "index, follow",
  openGraph: {
    title: "Join Our Team: Resident & Guest Artists | Tenko Tattoo Preston",
    description:
      "Interested in joining Tenko Tattoo as a Resident or Guest Artist? Explore our exciting opportunities in Preston.",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png", // Correct format
        width: 800, // Suggested width
        height: 600, // Suggested height
        alt: "Tenko Tattoo Studio Logo", // Descriptive alt text
      },
    ],
    url: "https://www.tenkotattoo.com/resident-guest-artists", // Optional but recommended
    type: "website", // Optional Open Graph type
  },
};

export default function ResidentGuestArtist() {
  return (
    <main className="relative">
      <PageHeader
        text=<>
          <h1 className="text-neutral-50">Resident &</h1>
          <div className="flex items-center gap-4">
            {" "}
            <h1 className="text-neutral-50">Guest</h1>
            <h1 className="bg-tenko text-neutral-50 px-4 py-2 rounded-md">
              artists
            </h1>
          </div>
        </>
        image="/first photoshoot/Tenko Tattoo (11).jpg"
      />

      <Image
        src="/Bg Brush.svg"
        alt="Brush stroke"
        width={100}
        height={100}
        draggable="false"
        className="-z-[10] absolute absolute-center w-full min-w-[1000px] opacity-50"
      />
      <section className="margin-x margin-y">
        {" "}
        <iframe
          src="
https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/10"
          allow="payment"
          height="592"
          className="w-full mb-20"
        ></iframe>
        <Script
          src="
https://www.cognitoforms.com/f/iframe.js"
        ></Script>
      </section>
    </main>
  );
}
