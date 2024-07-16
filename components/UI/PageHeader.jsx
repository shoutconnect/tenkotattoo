import Image from "next/image";

export default function PageHeader({ image, text }) {
  return (
    <div className=" pt-[160px]">
      <header className="relative margin-x margin-y overflow-hidden">
        <div className="relative z-10 md:ml-10 flex flex-col gap-2">{text}</div>
        <Image
          src={image}
          alt="Background image"
          draggable="false"
          width={800}
          height={800}
          className="absolute z-[2] top-0 left-0 w-full h-full object-cover blur-sm opacity-60 select-none"
        />
        <div className="absolute top-0 left-0 w-full h-full object-cover bg-neutral-800" />
      </header>
    </div>
  );
}
