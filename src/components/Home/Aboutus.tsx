"use client";

import Image from "next/image";
import { DUMMY, IMAGES } from "../../constants/images";
import { Button } from "../Button";
import { useState } from "react";

export const AboutUs: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center h-[628px] w-full overflow-hidden bg-white">
      <div className="absolute bottom-0 flex flex-col items-center h-auto w-full overflow-hidden">
        <div className="h-auto relative z-10 flex flex-col w-full text-left max-w-7xl">
          {/*Section Title*/}
          <div className="relative mb-6">
            <h1 className="text-[#1a1a1a] text-[28px] font-medium leading-[1.2] tracking-[-1.2px] mb-4">
              Built to support rapid growth,{" "}
              <span className="text-[#666666]">
                Our automation engine manages
              </span>
              <br />{" "}
              <span className="text-[#666666]">
                large scale workflows while maintaining speed, stability, and{" "}
                <br /> operational accuracy.
              </span>
            </h1>
          </div>

          {/*Cards*/}
          <div className="flex gap-6">
            <div className="h-auto py-6">
              <div className="flex flex-col gap-6">
                <div className="bg-[url('../../public/assets/images/galaxy.png')] bg-cover bg-center bg-no-repeat h-[320px] w-[1224px] relative">
                  <div className="absolute bottom-0 right-0 flex gap-8 pb-10 px-10">
                    <div className="pr-8 border-r-2 border-r-[#4d4d4d]">
                      <h1 className="text-white text-[40px] font-medium leading-[1.2] tracking-[-1.2px] mb-1">
                        50M+
                      </h1>
                      <p className="text-[#b3b3b3FF] text-[16px] font-normal leading-7">
                        Automated actions monthly
                      </p>
                    </div>
                    <div className="pr-8 border-r-2 border-r-[#4d4d4d]">
                      <h1 className="text-white text-[40px] font-medium leading-[1.2] tracking-[-1.2px] mb-1">
                        12K+
                      </h1>
                      <p className="text-[#b3b3b3FF] text-[16px] font-normal leading-7">
                        Workflows executed daily
                      </p>
                    </div>
                    <div className="">
                      <h1 className="text-white text-[40px] font-medium leading-[1.2] tracking-[-1.2px] mb-1">
                        99%
                      </h1>
                      <p className="text-[#b3b3b3FF] text-[16px] font-normal leading-7">
                        System uptime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
