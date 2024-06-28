import Image from "next/image";

export default function Services() {
  const services = [
    {
      name: "Tattoing",
      description:
        "Our artists specialise in unique tattoos that create lasting memories.",
      icon: "/Home Services Icon (2).svg",
    },
    {
      name: "Laser removal",
      description:
        "Safely and effectively eliminate unwanted tattoos with our laser treatment, so you can love your skin again.",
      icon: "/Home Services Icon (3).svg",
    },
  ];
  return (
    <div className="relative flex flex-col items-center justify-center margin-y">
      <div className="relative z-10 max-sm:mt-20 margin-x w-full h-full flex flex-col items-center justify-center gap-6 sm:px-[10%] lg:px-[15%]">
        <Image
          src="/Home Services Icon (1).svg"
          alt="Services icon"
          width="100"
          height="100"
          className="w-14 h-14 object-cover"
          draggable="false"
        />
        <h1 className="text-6xl text-neutral-50 font-bold uppercase">
          Our services
        </h1>
        <p className="text-neutral-50 text-center">
          We offer a comforting and personalised service to our clients,
          featuring the industry's most sought-after tattoo artists and laser
          removal experts, situated in Preston City Centre, all within the cosy
          and relaxed atmosphere of a studio designed with your needs in mind.
        </p>
        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <Image
                src={service.icon}
                alt="Services icon"
                width="100"
                height="100"
                className="w-10 h-10 object-cover"
                draggable="false"
              />
              <h2 className="text-2xl text-neutral-50 font-bold uppercase">
                {service.name}
              </h2>
              <p className="text-neutral-50 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/Home Services Brush (1).svg"
        alt="Services brush bg"
        width="900"
        height="800"
        className="mt-10 absolute top-0 left-0 right-0 mx-auto w-auto h-[700px] object-cover"
        draggable="false"
      />{" "}
      <Image
        src="/Home Services Brush (1).svg"
        alt="Services brush bg"
        width="900"
        height="800"
        className="mt-10 absolute top-0 left-0 right-0 mx-auto w-auto h-[700px] object-cover"
        draggable="false"
      />
      <Image
        src="/Home Services Brush (2).svg"
        alt="Services brush bg"
        width="900"
        height="800"
        className="mt-10 absolute top-0 left-0 right-0 mx-auto w-auto h-[700px] object-cover"
        draggable="false"
      />
      <Image
        src="/Home Services Brush (2).svg"
        alt="Services brush bg"
        width="900"
        height="800"
        className="md:hidden mt-10 absolute -bottom-32 left-0 right-0 mx-auto w-auto h-[700px] object-cover"
        draggable="false"
      />
    </div>
  );
}
