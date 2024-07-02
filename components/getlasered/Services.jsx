export default function Services() {
  const servicesList = [
    <>
      <span className="text-tenko">Outdated</span> tattoos
    </>,
    <>
      <span className="text-tenko">Name</span> tattoos
    </>,
    <>
      Tattoos of <span className="text-tenko">poor quality</span>
    </>,
    <>
      <span className="text-tenko">Faded</span> colour tattos
    </>,
    <>
      Tattoos on the <span className="text-tenko">face, neck or hands</span>
    </>,
  ];
  return (
    <div className="margin-x grid grid-cols-1 md:grid-cols-2 gap-16 md:px-16 items-start pb-24 max-sm:pb-16">
      <div className="mt-16">
        <p>
          We specialise in professional laser tattoo removal and fading services
          for cover-ups, serving Lancashire and the wider North West of England.
          <br />
          <br />
          <span className="font-bold text-neutral-900">
            {" "}
            <span className="text-tenko">
              At Tenko Tattoo, we understand that every tattoo has its own story
              and reason for removal.
            </span>{" "}
            Our highly skilled team is committed to providing a quality service
            using state-of-the-art Lynton Q-switched lasers.
          </span>{" "}
          These lasers are recognised by dermatologists as the safest and most
          effective technology for removing multi-coloured tattoos, ensuring
          reliable and predictable results. <br />
          <br />
          <span className="font-bold text-neutral-900">
            {" "}
            No matter your reason for seeking tattoo removal, Tenko Tattoo is
            here to help you achieve a fresh start with professional and
            effective treatments.
          </span>
        </p>
      </div>{" "}
      <div className="relative z-30 bg-neutral-800 p-10 space-y-5 md:-mt-16">
        {" "}
        <h6 className="text-neutral-50 text-base max-sm:text-sm">
          <span className="text-neutral-400">About</span> our service
        </h6>
        <h4 className="text-neutral-50">
          <span className="text-tenko">Laser tattoo removal</span> is perfect
          for those looking to remove:
        </h4>
        <div>
          {servicesList.map((service, index) => (
            <div key={index}>
              <p className="text-neutral-300 font-semibold mb-2">• {service}</p>
            </div>
          ))}
          <br />
        </div>
        <div className="bg-tenko h-1.5 w-20" />
      </div>
    </div>
  );
}
