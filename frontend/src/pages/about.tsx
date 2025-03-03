import DefaultLayout from "@/layouts/default";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "/img_rectangle_5592.png";
import img2 from "/img_rectangle_5593.png";
import img3 from "/img_rectangle_5595.png";
import img4 from "/img_rectangle_5594.png";
import { Achievements } from "@/components/Achievements";
import { Brokers } from "@/components/Brokers";

const about = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
      paragraphControls.start("hidden");
    }
  }, [isInView, mainControls, paragraphControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        onComplete: () => paragraphControls.start("visible"),
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <DefaultLayout>
      <section
        ref={ref}
        className="dark:text-white h-auto pt-10 flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10"
          initial="hidden"
          animate={mainControls}
          variants={textVariants}
        >
          <div className="max-w-[1320px] mx-auto">
            <motion.h2
              className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-yellow-400 mb-6"
              initial="hidden"
              animate={mainControls}
              variants={headingVariants}
            >
              {[
                "Reimagining",
                "real",
                "estate",
                "to.",
                "\n",
                "make",
                "it",
                "easier",
                "to",
                "unlock",
              ].map((word, index) =>
                word === "\n" ? (
                  <br key={index} />
                ) : (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{
                      display: "inline-block",
                      marginRight: "0.5rem",
                      transform: `translateY(${scrollY * 0.2}px)`,
                    }}
                  >
                    {word}
                  </motion.span>
                )
              )}
            </motion.h2>
            <motion.p
              className="mb-12 max-w-2xl mx-auto dark:text-white font-light text-sm md:text-base lg:text-lg"
              initial="hidden"
              animate={paragraphControls}
              variants={textVariants}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble.
            </motion.p>
          </div>
        </motion.div>
      </section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 px-4">
          <div className="col-span-1 md:col-span-2 rounded-xl overflow-hidden">
            <img src={img1} alt="img1" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={img2} alt="img2" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-1 rounded-xl overflow-hidden">
            <img src={img3} alt="img1" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-xl col-span-1 md:col-span-2 overflow-hidden">
            <img src={img4} alt="img2" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <Achievements />
      <Brokers />
    </DefaultLayout>
  );
};

export default about;
