"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { CAROUSEL_IMAGES } from "../constants/images";

interface CardContent {
  id: string;
  title: string;
  description: string;
  imageUrl: any;
}

const CARDS: CardContent[] = [
  {
    id: "1",
    title: "Accelerate sales execution",
    description:
      "Automate workflows, prioritize deals, and close revenue faster with AI-driven sales intelligence.",
    imageUrl: CAROUSEL_IMAGES.LivePipeline,
  },
  {
    id: "2",
    title: "Unify revenue operations",
    description:
      "Connect data across teams to gain clear visibility, reduce risk, and improve revenue predictability.",
    imageUrl: CAROUSEL_IMAGES.SystemHealth,
  },
  {
    id: "3",
    title: "Improve customer retention",
    description:
      "Identify churn risks early and uncover expansion opportunities using real-time customer insights.",
    imageUrl: CAROUSEL_IMAGES.CustomerHealth,
  },
  {
    id: "4",
    title: "Forecast with confidence",
    description:
      "Plan growth using accurate forecasts, shared metrics, and complete visibility into future revenue.",
    imageUrl: CAROUSEL_IMAGES.RevenueForecast,
  },
  {
    id: "5",
    title: "Enable executive visibility",
    description:
      "Get a real-time, unified view of revenue performance to align teams, monitor progress, make faster, data-driven strategic decisions.",
    imageUrl: CAROUSEL_IMAGES.AnnualRecurringRevenue,
  },
];

const HorizontalSlider = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 w-full"
    >
      <div className="shrink-0 w-[calc((100vw-80rem)/2)]" />
      {CARDS.map((card, index) => (
        <div
          key={card.id}
          className="snap-start shrink-0 w-[760px] md:w-[380px] flex flex-col gap-6"
        >
          <div className="bg-gray-100 aspect-square w-full relative overflow-hidden shadow-sm">
            <Image
              src={card.imageUrl}
              alt={card.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-2 pr-4">
            <h3 className="text-lg font-medium text-gray-900 leading-relaxed tracking-[-0.7px] ">
              {card.title}
            </h3>
            <p className="text-gray-600 text-[16px] leading-7 w-83">
              {card.description}
            </p>
          </div>
        </div>
      ))}

      <div className="shrink-0 w-4 md:w-8 xl:w-[calc((100vw-80rem)/2+2rem)]" />
    </div>
  );
});

HorizontalSlider.displayName = "HorizontalSlider";

export default HorizontalSlider;
