import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/seconday-button";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section id="hero" className="my-16 lg:my-32">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl md:text-[60px] lg:leading-[70px]">
          Empowering Lives Through <br /> Innovative{" "}
          <span className="font-bold underline decoration-8 decoration-[#6881FF]">
            AI
          </span>{" "}
          Technologies.
        </h1>

        <p className="text-xl md:text-[22px] text-[#C0C2CC]">
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4">
          <PrimaryButton>Explore Our Services</PrimaryButton>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>

        <Marquee className="mt-16">
          <div className="text-[24px] mr-2">
            From Ideas to Software Solutions 💡✨
          </div>
          <div className="text-[24px] mr-2">
            From Ideas to Software Solutions 💡✨
          </div>
          <div className="text-[24px] mr-2">
            From Ideas to Software Solutions 💡✨
          </div>
          <div className="text-[24px] mr-2">
            From Ideas to Software Solutions 💡✨
          </div>
        </Marquee>
      </div>
    </section>
  );
}
