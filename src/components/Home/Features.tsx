"use client";

import Image from "next/image";
import { DUMMY, IMAGES } from "../../constants/images";
import { Button } from "../Button";
import { useState } from "react";

export const Features: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[1074px] w-full overflow-hidden bg-white">
      <div className="relative flex flex-col items-center justify-center h-auto w-full overflow-hidden">
        <div className=" h-auto relative z-10 flex flex-col w-full text-left max-w-7xl py-[40px]">
          {/*Section Title*/}
          <div className="relative mb-6">
            <h1 className="text-[#1a1a1a] text-[40px] font-medium leading-[1.2] tracking-[-3.5px] mb-4">
              The foundation for <br />{" "}
              <span className="text-[#666666]">enterprise revenue teams.</span>
            </h1>
          </div>

          {/*Cards*/}
          <div className="flex gap-6">
            <div className="h-auto py-6">
              <div className="flex flex-col gap-6">
                <Image src={IMAGES.RevenueSignals} alt="" className="" />
                <div className="align-center justify-center flex flex-col">
                  <h1 className="text-[#1a1a1a] text-[24px] font-medium leading-[1.2] tracking-[-1.2px] mb-3">
                    Transform signals <br /> into revenue actions
                  </h1>
                  <p className="text-[#666666] text-[16px] font-normal leading-7">
                    Capture signals across systems and translate them into
                    timely <br /> actions that help teams respond faster and
                    execute with clarity.
                  </p>
                  <Button
                    variant=""
                    size="medium"
                    className="bg-[#1a1a1a] w-max h-12 mt-8"
                  >
                    Explore Revenue Signals
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-auto py-6">
              <div className="flex flex-col gap-6">
                <Image src={IMAGES.TeamKPIs} alt="" className="" />
                <div className="align-center justify-center flex flex-col">
                  <h1 className="text-[#1a1a1a] text-[24px] font-medium leading-[1.2] tracking-[-1.2px] mb-3">
                    Create alignment across <br /> every team
                  </h1>
                  <p className="text-[#666666] text-[16px] font-normal leading-7">
                    Bring sales, finance, and operations onto the same data
                    foundation
                    <br /> to remove silos and accelerate coordinated revenue
                    outcomes.
                  </p>
                  <Button
                    variant=""
                    size="medium"
                    className="bg-[#fb4a24] w-max h-12 mt-8"
                  >
                    View Platform Capabilities
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
