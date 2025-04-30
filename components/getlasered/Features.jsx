import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Cover-Up Offer",
      description: (
        <>
          Thinking about a cover-up? We’re offering{" "}
          <span className="text-tenko font-bold">20% off laser sessions</span>{" "}
          when you book your new tattoo with us at the same time.
        </>
      ),
    },
    {
      title: "initial test patch",
      description: (
        <>
          Before starting any removal, we’ll carry out a{" "}
          <strong className="text-tenko font-bold">small test patch </strong>{" "}
          during your consultation. It helps us check your skin’s reaction and
          make sure you're not allergic to the treatment.
        </>
      ),
    },
    {
      title: "Single & Package Sessions",
      description: (
        <>
          Whether you just need one session or a few, we’ll work around what
          suits you.{" "}
          <strong className="text-tenko font-bold">
            Book as you go, or save with a package deal.
          </strong>
        </>
      ),
    },
  ];
  return (
    <div className="margin-x margin-y grid grid-cols-1 md:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <h4 className="mb-4">{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
