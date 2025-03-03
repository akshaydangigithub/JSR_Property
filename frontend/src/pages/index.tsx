import { Hero } from "@/components/Hero";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img1 from "/img_settings.svg";
import Img2 from "/img_settings_orange_a700.svg";
import Img3 from "/img_thumbs_up.svg";
import Img4 from "/img_settings_orange_a700_30x30.svg";
import { useEffect } from "react";
import { Achievements } from "@/components/Achievements";
import { Properties } from "@/components/Properties";
import { Brokers } from "@/components/Brokers";

const cards = [
  {
    img: Img1,
    title: "Search your location",
  },
  {
    img: Img2,
    title: "Visit Appointment",
  },
  {
    img: Img3,
    title: "Get your dream house",
  },
  {
    img: Img4,
    title: "Enjoy your Appointment",
  },
];

export default function IndexPage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <DefaultLayout>
      <Hero />
      <div className="h-auto mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 px-4">
        <div
          data-aos="fade-up"
          className="bg-[#FFE0CE] w-full rounded-2xl px-10 py-16 dark:bg-[#1A202C]"
        >
          <h1 className="font-semibold text-3xl">
            Simple & easy way to find <br /> your dream Appointment
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            className="mt-8 bg-black text-white dark:bg-white dark:text-black"
            size="lg"
          >
            Get Started
          </Button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={200}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="px-8 md:py-0 py-8 h-full flex flex-col justify-center rounded-xl bg-[#FBEEE6] dark:bg-[#2D3748]"
            >
              <img src={card.img} width={25} className="mx-auto" alt="img1" />
              <h1 className="font-bold text-2xl mt-4 md:text-start text-center">
                {card.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <Achievements />
      <Properties />
      <Brokers />
    </DefaultLayout>
  );
}
