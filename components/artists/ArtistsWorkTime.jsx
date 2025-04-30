import React from "react";
import Link from "next/link";

export default function ArtistsWorkTime({ data }) {
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="margin-x flex max-lg:flex-col gap-16 md:px-16 items-start pb-24 max-sm:pb-16 mb-20">
      <div className="mt-16 space-y-6">
        <h4>
          At Tenko Tattoo, we pride ourselves on the diverse talents and unique
          styles of our artists.
        </h4>
        <p>
          Each artist brings their own creative flair and expertise, ensuring
          that every tattoo is a work of art tailored to the individual. Whether
          you're looking for intricate designs, bold statements, or delicate
          details, our skilled artists are dedicated to bringing your vision to
          life with professionalism and passion. Explore our artists' profiles
          to discover the perfect match for your next tattoo.
        </p>
      </div>
      <div className="relative z-30 bg-neutral-800 p-10 space-y-5 lg:-mt-16 sm:min-w-[544px]">
        <h2 className="text-3xl font-bold text-neutral-50">
          <span className="text-pink-500">ARTISTS</span> SCHEDULE
        </h2>
        <p className="text-neutral-50 font-semibold pb-6">
          Check out the weekly work schedule for each of our artists. Need
          something outside these hours? Just{" "}
          <Link href="/contact" className="text-pink-500 hover:text-pink-400">
            get in touch
          </Link>
          , we'll do our best to accommodate you.
        </p>
        <div className="mt-8">
          <div className="grid grid-cols-9 gap-2 sm:gap-4">
            {/* Artist rows */}
            {data.map((artist) => (
              <React.Fragment key={artist.name}>
                <div className="col-span-2 flex items-center">
                  <h6 className="text-neutral-50 font-semibold uppercase">
                    {artist.name}
                  </h6>
                </div>
                {weekDays.map((day, idx) => {
                  const isWorkDay = artist.workTime.includes(
                    day === "M"
                      ? "Mon"
                      : day === "T" && idx === 1
                      ? "Tue"
                      : day === "W"
                      ? "Wed"
                      : day === "T" && idx === 3
                      ? "Thu"
                      : day === "F"
                      ? "Fri"
                      : day === "S" && idx === 5
                      ? "Sat"
                      : "Sun"
                  );
                  return (
                    <div
                      key={`${artist.name}-${day}`}
                      className="size-6 sm:size-10"
                    >
                      <div
                        className={`size-6 sm:size-10 rounded-full flex items-center justify-center ${
                          isWorkDay ? "bg-pink-500" : "bg-neutral-700"
                        }`}
                      >
                        <p className="max-sm:text-xs font-semibold text-neutral-100 leading-none">
                          {day}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="bg-pink-500 h-1 w-20 mt-4" />
      </div>
    </div>
  );
}
