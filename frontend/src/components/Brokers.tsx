import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";

const list = [
  {
    img: "https://heroui.com/images/hero-card-complete.jpeg",
    name: "Broker 1",
    rating: 4.5,
  },
  {
    img: "https://heroui.com/images/hero-card-complete.jpeg",
    name: "Broker 2",
    rating: 4.5,
  },
  {
    img: "https://heroui.com/images/hero-card-complete.jpeg",
    name: "Broker 3",
    rating: 4.5,
  },
  {
    img: "https://heroui.com/images/hero-card-complete.jpeg",
    name: "Broker 4",
    rating: 4.5,
  },
  {
    img: "https://heroui.com/images/hero-card-complete.jpeg",
    name: "Broker 5",
    rating: 4.5,
  },
  {
    img: "https://heroui.com/images/hero-card-complete.jpeg",
    name: "Broker 6",
    rating: 4.5,
  },
];

export const Brokers: React.FC = () => {
  return (
    <section className="h-auto mt-16 md:px-16 px-4 w-full">
      <h1 className="font-semibold text-3xl dark:text-white">
        Our Top Brokers
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index} className="py-10">
            <Card className="py-4 w-full shadow-none border border-[#FFCEB2] dark:border-[#878786]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.img}
                  // width={270}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  {item.rating}
                  <span className="text-default-500">/5</span>
                </p>
                <h4 className="font-bold text-large"> {item.name}</h4>
              </CardHeader>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
