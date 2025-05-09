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
          <span className="font-bold text-neutral-800">
            <span className="text-tenko">
              At Tenko Tattoo, we're passionate about the art of tattooing and
              helping people express their unique stories through beautiful,
              custom designs.
            </span>{" "}
            You don't just need to be a tattoo artist to be involved in the
            tattoo scene.
          </span>{" "}
          <br />
          <br />
          We're always looking for skilled individuals keen to get involved and
          express their own creativity in a variety of positions. Explore our
          current job openings below and see if there's a role that matches your
          passion and skills.
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
            send your resume and cover letter using the form below. Tell us
            about your experience and why you’d be a great fit for Tenko Tattoo.
            <br />
            <br />
            <span className="font-bold text-white">
              Join us at Tenko Tattoo and become a part of our vibrant, creative
              team. We can't wait to work with you!
            </span>
          </p>
        </div>
        <div className="bg-tenko h-1.5 w-20" />
      </div>
    </div>
  );
}
