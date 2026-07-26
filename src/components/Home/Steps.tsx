"use client";

import Image from "next/image";
import { IMAGES, STEPS } from "../../constants/images";
import { Button } from "../Button";
import ProgressBar from "../ProgessBar";
import { useState } from "react";

export const Steps: React.FC = () => {
  const [activeStep, setActiveStep] = useState("connect-your-systems");

  const steps = [
    { sn: "1", id: "connect-your-systems", label: "Connect your systems" },
    { sn: "2", id: "unify-and-clean-data", label: "Unify & clean data" },
    { sn: "3", id: "activate-ai-insights", label: "Activate AI insights" },
    { sn: "4", id: "take-action-at-scale", label: "Take action at scale" },
  ];

  const stepContent = {
    "connect-your-systems": {
      image: STEPS.Connections,
      description:
        "Securely integrate your CRM, product, and data sources in minutes.",
    },
    "unify-and-clean-data": {
      image: STEPS.CleanData,
      description:
        "Unify and clean your data to create a single source of truth for your revenue operations.",
    },
    "activate-ai-insights": {
      image: STEPS.ActivateAI,
      description:
        "Activate AI insights to uncover hidden revenue opportunities",
    },
    "take-action-at-scale": {
      image: STEPS.TakeAction,
      description:
        "Take action at scale with automated workflows and personalized campaigns.",
    },
  };

  const content = stepContent[activeStep as keyof typeof stepContent];

  const progessBarWidth =
    (steps.findIndex((step) => step.id === activeStep) + 1) * 25;

  return (
    <section className="relative flex flex-col items-center justify-center h-[1019px] w-full overflow-hidden bg-[#f8f8f8]">
      <div className="relative flex flex-col items-center justify-center h-208.5 w-full overflow-hidden">
        <div className="h-[1000px] relative z-10 flex flex-col w-full text-left max-w-7xl py-[40px]">
          {/* Header Section */}
          <div className="relative h-[200px]">
            <h1 className="text-[#1a1a1a] text-[40px] font-medium leading-[1.2] tracking-[-3.5px] mb-4">
              From data to <br />{" "}
              <span className="text-[#666666]">
                revenue in four simple steps.
              </span>
            </h1>
            <p className="text-[#666666] text-[16px] font-normal leading-7">
              Integrate systems securely and activate AI insights across your
              revenue operations.
            </p>
          </div>

          {/* Tab Content Area */}
          <div className="bg-white h-[552px] p-12">
            <div className="flex gap-12 h-full">
              {/* Left: Dynamic Image (Full Size as in Card.tsx) */}
              <Image
                src={content.image}
                alt=""
                className="transition-all duration-300 w-auto h-full"
              />

              {/* Right: Steps Navigation */}
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1 mb-6">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onMouseEnter={() => setActiveStep(step.id)}
                      className={`bg-white/0 text-2xl w-max font-medium leading-5 tracking-[-1.2px] transition-colors duration-300 py-3 justify-start text-left ${
                        activeStep === step.id
                          ? "text-gray-900"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {step.label}
                    </button>
                  ))}
                </div>

                {/* Active Step Description */}
                <div className="flex flex-col gap-3.5">
                  <p className="text-gray-600 text-[16px] font-normal leading-7 w-sm transition-all duration-800">
                    {content.description}
                  </p>
                  <ProgressBar progress={progessBarWidth} width="w-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
