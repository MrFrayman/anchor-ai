"use client";

import Image from "next/image";
import { TESTIMONIALS } from "../../constants/images";

export const Testimonials: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[760px] w-full overflow-hidden bg-white">
      {/* Centered Container */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-7xl px-6 gap-24">
        {/* Left: Section Title / Quote */}
        <div className=" flex flex-col gap-8 text-left max-w-2xl">
          <h1 className="text-gray-900 text-[28px] font-medium leading-[1.4] tracking-[-1.2px]">
            "Before this platform, our revenue data lived across too many tools.{" "}
            <span className="text-gray-400">
              Now our teams operate from one system, making execution faster,
              forecasting clearer, and leadership decisions far more confident."
            </span>
          </h1>
          <div>
            <p className="text-gray-900 font-medium text-[16px] leading-7">
              Micheal Chen
            </p>
            <p className="text-gray-600 font-normal text-[14px] leading-7">
              Founder & CEO - ANCHOR
            </p>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src={TESTIMONIALS.MichealChen}
            alt="Micheal Chen"
            className="w-[460px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
