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
    // <div className="margin-x grid grid-cols-1 md:grid-cols-2 gap-16 md:px-16 items-start pb-24 max-sm:pb-16">
    //   <div className="mt-16">
    //     <p>
    //       We specialise in professional laser tattoo removal and fading services
    //       for cover-ups, serving Lancashire and the wider North West of England.
    //       <br />
    //       <br />
    //       <span className="font-bold text-neutral-800">
    //         {" "}
    //         <span className="text-tenko">
    //           At Tenko Tattoo, we understand that every tattoo has its own story
    //           and reason for removal.
    //         </span>{" "}
    //         Our highly skilled team is committed to providing a quality service
    //         using state-of-the-art Lynton Q-switched lasers.
    //       </span>{" "}
    //       These lasers are recognised by dermatologists as the safest and most
    //       effective technology for removing multi-coloured tattoos, ensuring
    //       reliable and predictable results. <br />
    //       <br />
    //       <span className="font-bold text-neutral-800">
    //         {" "}
    //         No matter your reason for seeking tattoo removal, Tenko Tattoo is
    //         here to help you achieve a fresh start with professional and
    //         effective treatments.
    //       </span>
    //     </p>
    //   </div>{" "}
    //   <div className="relative z-30 bg-neutral-800 p-10 space-y-5 md:-mt-16">
    //     {" "}
    //     <h6 className="text-neutral-50 text-base max-sm:text-sm">
    //       <span className="text-neutral-400">About</span> our service
    //     </h6>
    //     <h4 className="text-neutral-50">
    //       <span className="text-tenko">Laser tattoo removal</span> is perfect
    //       for those looking to remove:
    //     </h4>
    //     <div>
    //       {servicesList.map((service, index) => (
    //         <div key={index}>
    //           <p className="text-neutral-300 font-semibold mb-2">• {service}</p>
    //         </div>
    //       ))}
    //       <br />
    //     </div>
    //     <div className="bg-tenko h-1.5 w-20" />
    //   </div>
    // </div>
    <div className="margin-x grid grid-cols-1 md:grid-cols-2 gap-16 md:px-16 items-start pb-24 max-sm:pb-16">
      <div className="mt-16">
        <p>
          <span className="font-bold text-neutral-800">
            {" "}
            <span className="text-tenko">
              At Tenko Tattoo, we're passionate about the art of tattooing and
              helping people express their unique stories through beautiful,
              custom designs.
            </span>{" "}
            Our mission is to provide exceptional artistry, personalized
            service, and a welcoming environment for every client.
          </span>{" "}
          <br />
          <br />
          If you're enthusiastic about the tattoo industry and eager to make a
          positive impact, we'd love to hear from you!
        </p>
      </div>{" "}
      <div className="relative z-30 bg-neutral-800 p-10 space-y-5 md:-mt-16">
        {" "}
        <h6 className="text-neutral-400 text-base max-sm:text-sm">
          Join our team
        </h6>
        <h4 className="text-neutral-50">How to Apply</h4>
        <div>
          <p className="text-neutral-400">
            If you’re ready to make a difference and contribute to our mission,
            send your resume and a portfolio of your work on the form bellow.
            Tell us about your experience and why you’d be a great fit for Tenko
            Tattoo.
            <br />
            <br />
            <span className="font-bold text-white">
              {" "}
              Join us in creating lasting art and unforgettable experiences. We
              can't wait to work with you!
            </span>
          </p>
        </div>
        <div className="bg-tenko h-1.5 w-20" />
      </div>
    </div>
  );
}
