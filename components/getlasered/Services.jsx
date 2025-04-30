export default function Services() {
  const servicesList = [
    <>
      <span className="text-tenko">Tattoos that are outdated</span> or no longer
      your style
    </>,
    <>
      <span className="text-tenko">Name</span> tattoos
    </>,
    <>
      <span className="text-tenko">Poor quality</span> tattoos
    </>,
    <>
      <span className="text-tenko">Faded colour</span> tattos
    </>,
    <>
      Tattoos on visible areas like your{" "}
      <span className="text-tenko">face, neck or hands</span>
    </>,
  ];
  return (
    <div className="margin-x grid grid-cols-1 md:grid-cols-2 gap-16 md:px-16 items-start pb-24 max-sm:pb-16">
      <div className="mt-16">
        <p>
          We offer professional laser tattoo removal and fading services, ideal
          for cover-ups. Based in Preston, Lancashire, we proudly serve clients
          across the North West.
          <br />
          <br />
          <span className="font-bold text-neutral-800">
            {" "}
            <span className="text-tenko">
              At Tenko Tattoo, we know every tattoo has its own story – and
              sometimes, that story needs to come to an end.
            </span>{" "}
            Whether you're looking for a clean slate or just want to fade
            something down for a cover-up, we're here to help with safe,
            effective treatments that work.
          </span>{" "}
        </p>
      </div>{" "}
      <div className="relative z-30 bg-neutral-800 p-10 space-y-5 md:-mt-16">
        {" "}
        <h6 className="text-neutral-50 text-base max-sm:text-sm">
          <span className="text-neutral-400">About</span> our service
        </h6>
        <h4 className="text-neutral-50 max-w-[90%]">
          <span className="text-tenko">Laser tattoo removal</span> is a great
          option if you're looking to get rid of:
        </h4>
        <div>
          {servicesList.map((service, index) => (
            <div key={index}>
              <p className="text-neutral-200 font-semibold mb-2">• {service}</p>
            </div>
          ))}
          <br />
        </div>
        <div className="bg-tenko h-1.5 w-20" />
      </div>
    </div>
  );
}
