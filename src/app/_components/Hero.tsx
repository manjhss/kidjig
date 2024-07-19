"use client";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/seconday-button";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, parentFadeIn } from "@/variants";

export default function Hero() {
  return (
    <motion.section
      variants={parentFadeIn}
      initial="initial"
      animate="animate"
      className="my-16 lg:my-32"
    >
      <div className="flex flex-col gap-6">
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-[60px] lg:leading-[70px]"
        >
          Empowering Lives Through <br /> Innovative{" "}
          <span className="font-bold underline decoration-8 decoration-[#6881FF]">
            AI
          </span>{" "}
          Technologies.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-[22px] text-[#C0C2CC]"
        >
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-2 md:gap-4"
        >
          <PrimaryButton>Explore Our Services</PrimaryButton>
          <SecondaryButton>Learn more</SecondaryButton>
        </motion.div>

        <motion.div variants={fadeIn}>
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
        </motion.div>
      </div>
    </motion.section>
  );
}
