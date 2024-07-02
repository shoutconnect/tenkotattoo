"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function FAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid gap-10 w-full">
      <div className="">
        {data.map((item, index) => (
          <div
            key={index}
            className="hs-accordion-group divide-y divide-neutral-200 pb-3"
          >
            <div
              className={`mb-4 hs-accordion ${
                activeIndex === index ? "active" : ""
              }`}
              id={`hs-heading-${index}`}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-start justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-neutral-800 rounded-lg transition hover:text-neutral-500"
                aria-controls={`hs-collapse-${index}`}
                aria-expanded={activeIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                <h6>{item.question}</h6>
                <ChevronDownIcon
                  className={`mt-1.5 hs-accordion-active:hidden ${
                    activeIndex !== index ? "block" : "hidden"
                  } flex-shrink-0 size-5 text-neutral-600 group-hover:text-neutral-500`}
                />
                <ChevronUpIcon
                  className={`mt-1.5 hs-accordion-active:block ${
                    activeIndex === index ? "block" : "hidden"
                  } hidden flex-shrink-0 size-5 text-neutral-600 group-hover:text-neutral-500`}
                />
              </button>
              <div
                id={`hs-collapse-${index}`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                aria-labelledby={`hs-heading-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
