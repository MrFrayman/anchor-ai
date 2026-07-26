import Hero from "@/components/Home/Hero";
import { Brand } from "@/components/Home/Brand";
import { Button } from "@/components/Button";
import { Card } from "@/components/Home/Card";
import { Features } from "@/components/Home/Features";
import { Steps } from "@/components/Home/Steps";
import { AboutUs } from "@/components/Home/Aboutus";
import { UseCase } from "@/components/Home/UseCase";
import { Testimonials } from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero>
        <h1 className="text-white text-[68px] font-medium leading-none tracking-[-3.5px] mb-4">
          One AI Platform built to <br /> run Enterprise revenue
        </h1>
        <p className="text-white text-[18px] font-normal leading-7">
          Unify data, automate workflows, enable smarter decisions across <br />{" "}
          sales, finance, and operations all from one secure AI platform.
        </p>

        <div className="pt-16 flex gap-4">
          <Button variant="primary" size="medium">
            Request a Demo
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
          <Button variant="secondary" size="medium">
            Contact Sales
          </Button>
        </div>
      </Hero>
      <Brand />
      <Card />
      <Features />
      <AboutUs />
      <UseCase />
      <Steps />
      <Testimonials />
    </>
  );
}
