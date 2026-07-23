
import Image from "next/image";
import { DUMMY } from "../../constants/images";

export const Brand: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center h-[299px] w-full overflow-hidden bg-[#f8f8f8]">

      <div className="relative flex flex-col items-center justify-center h-208.5 w-full overflow-hidden">

        <div className="h-25 relative z-10 flex flex-col items-center justify-center w-full max-w-7xl">
          <span className="text-[#1a1a1a] text-[16px] font-normal leading-7">
            Powering the world's best product teams.
          </span>

          <div className="pt-10 flex gap-12 transition-all duration-300">
            <Image src={DUMMY.Logo1} alt="" className="h-6 w-auto grayscale transition-all duration-300 hover:grayscale-0"/>
            <Image src={DUMMY.Logo2} alt="" className="h-6 w-auto grayscale transition-all duration-300 hover:grayscale-0"/>
            <Image src={DUMMY.Logo3} alt="" className="h-6 w-auto grayscale transition-all duration-300 hover:grayscale-0"/>
            <Image src={DUMMY.Logo4} alt="" className="h-6 w-auto grayscale transition-all duration-300 hover:grayscale-0"/>
            <Image src={DUMMY.Logo5} alt="" className="h-6 w-auto grayscale transition-all duration-300 hover:grayscale-0" />
            <Image src={DUMMY.Logo6} alt="" className="h-6 w-auto grayscale transition-all duration-300 hover:grayscale-0"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
