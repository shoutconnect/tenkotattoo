import Image from "next/image";
import Link from "next/link";

export default function Travel() {
  const items = [
    {
      icon: "/Travel (3).svg",
      title: "Train Station",
      description: "Five-minute stroll from Preston Train Station.",
    },
    {
      icon: "/Travel (4).svg",
      title: "Bus Station",
      description: "Brief ten-minute walk from Preston Bus Station.",
    },
    {
      icon: "/Travel (1).svg",
      title: "Local Parking",
      description: (
        <>
          For those arriving by car, you'll find{" "}
          <Link
            href="https://en.parkopedia.co.uk/parking/carpark/st_wilfrids_street/pr1/preston/?arriving=202407151530&leaving=202407151730"
            className="text-tenko font-bold"
            target="_blank"
          >
            numerous parking options
          </Link>{" "}
          nearby.
        </>
      ),
    },
    {
      icon: "/Travel (5).svg",
      title: "Hotel",
      description: (
        <>
          For our clients travelling from afar and seeking local accommodation,
          we are conveniently situated right beside{" "}
          <Link
            href="https://www.premierinn.com/gb/en/hotels/england/lancashire/preston/preston-central.html?cid=GLBC_PRECEN"
            className="text-tenko font-bold"
            target="_blank"
          >
            Premier Inn
          </Link>
          .
        </>
      ),
    },
  ];
  return (
    <div className="relative z-10 margin-x margin-y -mt-10 flex flex-col items-center gap-10 text-center">
      <Image
        src="/Travel (2).svg"
        alt="Travel"
        draggable="false"
        width={100}
        height={100}
      />
      <h1 className="">
        Travel <span className="text-tenko">&</span>
        <br /> accommodation
      </h1>
      <p className="md:w-[50%]">
        Situated in Preston City Centre, a lively hub in the heart of
        Lancashire, and easily reachable from all parts of the United Kingdom.
      </p>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:w-[70%]">
        {items.map((item, index) => (
          <div key={index} className="group relative">
            <div className="relative z-10 flex flex-col items-center">
              {" "}
              <Image
                src={item.icon}
                alt="Travel and accomodation icons"
                draggable="false"
                width={100}
                height={100}
                className="h-10 w-auto mb-6"
              />
              <h4 className="group-hover:text-tenko my-transition">
                {item.title}
              </h4>
              <p>{item.description}</p>
            </div>
            <div className="my-transition opacity-0 group-hover:opacity-5 absolute absolute-center bg-tenko w-[70%] aspect-square blur-3xl rounded-full" />
          </div>
        ))}{" "}
      </div>
      {/* <p className="md:w-[80%] font-bold">
        Whilst you’re visiting, check out some of our{" "}
        <Link href="/" target="_blank" className="text-tenko underline">
          recommended restaurants
        </Link>{" "}
        in Preston/UK
      </p> */}
    </div>
  );
}
