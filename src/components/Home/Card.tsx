"use client";

import Image from "next/image";
import { DUMMY, IMAGES } from "../../constants/images";
import { Button } from "../Button";
import { useState } from "react";

export const Card: React.FC = () => {
  const [activeTab, setActiveTab] = useState("revenue-intelligence");

  const tabs = [
    { id: "revenue-intelligence", label: "Revenue Intelligence" },
    { id: "sales-automation", label: "Sales Automation" },
    { id: "customer-insights", label: "Customer Insights" },
    { id: "operations-forecasting", label: "Operations & Forecasting" },
  ];

  const tabContent = {
    "revenue-intelligence": {
      image: IMAGES.RevenueChart,
      heading: (
        <>
          Turn complex data <br /> into clear revenue decisions
        </>
      ),
      description:
        "Unify revenue data into one real-time view to surface insights, reduce risk, improve forecasting accuracy, and guide confident decisions.",
      features: [
        "Unified revenue dashboards",
        "Real-time performance insights",
        "Pipeline risk detection",
        "AI-powered forecasts",
      ],
      cta: "Revenue Intelligence",
    },
    "sales-automation": {
      image: IMAGES.RevenueChart,
      heading: (
        <>
          Automate outreach <br /> without losing the human touch
        </>
      ),
      description:
        "Trigger personalized sequences, auto-log activities, and keep your pipeline moving while reps focus on closing.",
      features: [
        "Smart email sequences",
        "Auto-activity logging",
        "Lead scoring & routing",
        "Follow-up reminders",
      ],
      cta: "Sales Automation",
    },
    "customer-insights": {
      image: IMAGES.RevenueChart,
      heading: (
        <>
          Understand every customer <br /> at every stage
        </>
      ),
      description:
        "Aggregate behavioral data, support tickets, and engagement history into living profiles that power targeted action.",
      features: [
        "360° customer profiles",
        "Health score tracking",
        "Churn risk alerts",
        "Expansion signals",
      ],
      cta: "Customer Insights",
    },
    "operations-forecasting": {
      image: IMAGES.RevenueChart,
      heading: (
        <>
          Plan with precision <br /> forecast with confidence
        </>
      ),
      description:
        "Replace spreadsheet guesswork with AI-driven models that learn from your data and adapt to market shifts.",
      features: [
        "AI revenue forecasting",
        "Scenario modeling",
        "Quota & capacity planning",
        "Board-ready reports",
      ],
      cta: "Operations & Forecasting",
    },
  };

  const content = tabContent[activeTab];

  return (
    <section className="relative flex flex-col items-center h-[1009px] w-full overflow-hidden bg-[#f8f8f8]">
      <div className="relative flex flex-col items-center justify-center h-208.5 w-full overflow-hidden">
        <div className="h-[1000px] relative z-10 flex flex-col w-full text-left max-w-7xl py-[40px]">
          {/* Header + Tabs */}
          <div className="relative h-[257px] border-b-2 border-[#e6e6e6] mb-6">
            <h1 className="text-[#1a1a1a] text-[40px] font-medium leading-[1.2] tracking-[-3.5px] mb-4">
              One platform. <br />{" "}
              <span className="text-[#666666]">
                Multiple paths to scale revenue.
              </span>
            </h1>
            <p className="text-[#666666] text-[16px] font-normal leading-7">
              Different teams solve different problems all powered by one
              secure, <br /> intelligent AI platform designed for enterprise
              growth.
            </p>

            <div className="pt-8 absolute bottom-0 left-0 right-0 w-full transition-all duration-300 text-[16px] font-normal leading-7">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`bg-white/0 h-[59px] border transition-colors duration-300 px-4 py-2 ${
                    activeTab === tab.id
                      ? "border-[#fb4a2f] text-[#fb4a24]"
                      : "border-white/0 text-[#1a1a1a] hover:border-[#fb4a2f] hover:text-[#fb4a24]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white h-[548px] py-6 px-6">
            <div className="flex gap-16">
              <Image src={content.image} alt="" className="" />
              <div className="align-center justify-center flex flex-col">
                <h1 className="text-[#1a1a1a] text-[24px] font-medium leading-[1.2] tracking-[-1.2px] mb-3">
                  {content.heading}
                </h1>
                <p className="text-[#666666] text-[16px] font-normal leading-7 w-132">
                  {content.description}
                </p>

                <div className="pt-6 flex flex-col gap-3">
                  {content.features.map((feature) => (
                    <p
                      key={feature}
                      className="text-[#666666] text-[15px] font-normal leading-5 tracking-[-0.5px] flex items-center gap-3"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#fb4a24"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                </div>

                <Button
                  variant=""
                  size="medium"
                  className="bg-[#1a1a1a] w-max h-12 mt-8"
                >
                  {content.cta}
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
    </section>
  );
};

export default Card;
