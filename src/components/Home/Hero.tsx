interface HeroProps {
  children: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <section className="relative flex flex-col items-center h-208.5 w-full overflow-hidden bg-[#fb4a2f]">

      <div className="relative flex flex-col items-center justify-center h-208.5 w-full overflow-hidden bg-[#f95b04]/40 bg-blend-soft-light">

      <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover pointer-events-none opacity-24 mix-blend-color-dodge"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24)),
          url('https://design.penpot.app/assets/by-file-media-id/4ff7ff5f-2875-80f9-8008-5a75bfb26a7d')` }} />

      <div className="h-141.5 relative z-10 flex flex-col justify-center w-full text-left max-w-7xl">
        {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
