"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

// ✨ //////////////////////////////

export default function NavBanner() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="relative z-50 group flex items-center gap-x-6 bg-tenko hover:bg-neutral-800 px-6 py-2.5 before:flex-1 my-transition">
          <a
            href="/contact"
            className="text-xs md:text-sm font-title uppercase font-bold tracking-wider text-neutral-100 my-transition"
          >
            Book a free consultation
            <span aria-hidden="true" className="ml-4">
              &rarr;
            </span>
          </a>

          <div className="flex flex-1 justify-end">
            <button type="button" onClick={() => setShow(!show)}>
              <XMarkIcon
                className="size-4 md:size-5 text-neutral-50"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
