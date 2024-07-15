import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Cover Up Offer",
      description: (
        <>
          We’re offering a{" "}
          <span className="text-tenko font-bold">20% discount</span> on laser
          packages for clients booking a cover-up tattoo at Tenko Tattoo.
        </>
      ),
    },
    {
      title: "initial test patch",
      description:
        "All clients must undergo an initial test patch during their consultation to ensure they are not allergic to the treatment.",
    },
    {
      title: "Single & Package Sessions",
      description: (
        <>
          Sessions can be as flexible as you’d like; book a one-off session or
          receive a package discount
        </>
      ),
    },
  ];
  return (
    <div className="margin-x margin-y grid grid-cols-1 md:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <h4 className="">{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
