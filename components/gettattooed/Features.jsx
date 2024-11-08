import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Opening Hours",
      description:
        "Tenko Tattoo is open between: Monday to Sunday from 12pm til 6pm.",
    },
    {
      title: "Appointment Only",
      description:
        "We don’t accept walk-in bookings or consultations, all appointments must be made in advance.",
    },
    {
      title: "Studio Email",
      description: (
        <>
          You can complete the below form or email the studio at{" "}
          <Link className="link-tenko" href="mailto:info@tenkotattoo.com">
            info@tenkotattoo.com
          </Link>
          .
        </>
      ),
    },
  ];
  return (
    <div className="margin-x grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <h4 className="">{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
