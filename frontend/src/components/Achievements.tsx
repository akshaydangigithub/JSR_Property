import { useEffect } from "react";
import Img1 from "/img_frame.svg";
import Img2 from "/img_settings_orange_a700_60x60.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    img: Img1,
    title: "$15.4M",
    desc: "Owned from Properties transactions",
  },
  {
    img: Img1,
    title: "25K+",
    desc: "Properties for Buy & sell Successfully",
  },
  {
    img: Img1,
    title: "$15.4M",
    desc: "Owned from Properties transactions",
  },
  {
    img: Img2,
    title: "600+",
    desc: "Reagular Clients",
  },
];

export const Achievements: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="h-auto py-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white md:px-16 px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          className="flex flex-col md:mt-0 mt-5 items-center justify-center"
        >
          <div className="h-14 cursor-pointer mb-6 w-14 p-2 bg-white rounded-full flex items-center justify-center">
            <img src={card.img} alt="icon" />
          </div>
          <h1 className="font-bold text-2xl sm:text-3xl">{card.title}</h1>
          <p className="mt-4 text-base sm:text-lg font-semibold text-gray-600 text-center">
            {card.desc}
          </p>
        </div>
      ))}
    </section>
  );
};
