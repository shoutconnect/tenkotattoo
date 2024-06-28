import Image from "next/image";

export default function CTA() {
  return (
    <div className="relative margin-y bg-tenko">
      <div className="margin-x">
        <div className="relative z-10 w-full h-full grid grid-cols-4">
          <div className="">
            <div className="col-span-1" />
            <h3 className="text-neutral-50 mb-6">
              Discuss <br />
              your idea
            </h3>
            <p className="text-neutral-50">
              Have something in mind and want to know which artist would be the
              best fit? Let us know your idea and an artist will be in touch.
            </p>
          </div>
          <div></div>
        </div>
        <Image
          src="/Mask group.svg"
          width={1500}
          height={1000}
          alt="Background shape"
          className="absolute top-0 left-0 opacity-10 p-4 h-full w-full"
        />
      </div>
    </div>
  );
}
