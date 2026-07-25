"use client";

import { useRef } from "react";
import HorizontalSlider from "../HorizontalSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const UseCase: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[947px] py-[40px] bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col w-full text-left max-w-7xl mx-auto pr-13">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
          <h1 className="text-[#1a1a1a] text-[40px] font-medium leading-[1.2] tracking-[-3.5px] mb-4">
            Built for every <br />
            <span className="text-[#666666]">Revenue critical team.</span>
          </h1>

          <div className="flex gap-2 shrink-0 mb-7">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-[#fb4a24] text-white hover:bg-[#e03d1c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fb4a24] focus:ring-offset-2"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:pl-20 xl:pl-[calc((100vw-85rem)/2+2rem)]">
        <HorizontalSlider ref={sliderRef} />
      </div>
    </section>
  );
};

export default UseCase;
