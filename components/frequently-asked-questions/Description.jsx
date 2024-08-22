import Link from "next/link";

export default function Description() {
  return (
    <div className="margin-x grid grid-cols-1 md:grid-cols-3 gap-16 md:px-16 items-start">
      <div className="max-md:hidden">
        <p></p>
      </div>{" "}
      <div className="col-span-2 relative z-30 bg-neutral-800 p-10 space-y-5 -mt-8 md:-mt-16">
        {" "}
        <h4 className="text-neutral-50">
          Everything<span className="text-tenko"> you need to know</span> can be
          found below.
        </h4>
        <p className="text-neutral-400">
          If it’s not answered here, feel free to message the shop at:
          <br />
          <Link
            href="mailto:info@tenkotattoo.com"
            target="_blank"
            className="font-bold text-white"
          >
            info@tenkotattoo.com
          </Link>
        </p>
        <div className="bg-tenko h-1.5 w-20" />
      </div>
    </div>
  );
}
