import { useState } from "react";
import Img from "/img_image_260x384.png";
import { Button, Card, CardBody, CardFooter, Image, Link } from "@heroui/react";
import { IoLocation } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { BiSolidBath } from "react-icons/bi";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";

const list = [
  {
    title: "Orange",
    img: Img,
    price: "$649,900",
    location: "New Market, Bhopal",
    bed: "3",
    bath: "2",
    area: "1200 sqft",
    type: "Sell",
  },
  {
    title: "Orange",
    img: Img,
    price: "$649,900",
    location: "New Market, Bhopal",
    bed: "3",
    bath: "2",
    area: "1200 sqft",
    type: "Rent",
  },
  {
    title: "Orange",
    img: Img,
    price: "$649,900",
    location: "New Market, Bhopal",
    bed: "3",
    bath: "2",
    area: "1200 sqft",
    type: "Rent",
  },
  {
    title: "Orange",
    img: Img,
    price: "$649,900",
    location: "New Market, Bhopal",
    bed: "3",
    bath: "2",
    area: "1200 sqft",
    type: "Rent",
  },
  {
    title: "Orange",
    img: Img,
    price: "$649,900",
    location: "New Market, Bhopal",
    bed: "3",
    bath: "2",
    area: "1200 sqft",
    type: "Sell",
  },
  {
    title: "Orange",
    img: Img,
    price: "$649,900",
    location: "New Market, Bhopal",
    bed: "3",
    bath: "2",
    area: "1200 sqft",
    type: "Sell",
  },
];

export const Properties: React.FC = () => {
  const [activeProperty, setActiveProperty] = useState("All");

  return (
    <section className="h-auto mt-16 md:px-16 px-4 w-full">
      <h1 className="font-semibold text-3xl dark:text-white">
        Featured Properties
      </h1>

      {/* categories */}
      <div className="flex gap-5 mt-8 flex-wrap">
        {["All", "House", "Apartment", "Condo", "Villa"].map(
          (category, index) => (
            <span
              // data-aos="fade-up"
              // data-aos-delay={index * 100}
              onClick={() => setActiveProperty(category)}
              key={index}
              className={`border-2 cursor-pointer font-semibold border-[#ffceb2] dark:border-[#FACC15] py-1.5 px-5 rounded-xl ${
                activeProperty === category
                  ? "bg-[#FFCEB2] text-black dark:bg-[#FACC15] dark:text-black"
                  : "text-[#f07e3c] dark:text-[#FACC15]"
              }`}
            >
              {category}
            </span>
          )
        )}
      </div>

      <div className="gap-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {list.map((item, index) => (
          <DynamicCard item={item} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          href="/listing"
          data-aos="fade-up"
          size="lg"
          className="text-black font-semibold bg-[#FFCEB2] dark:bg-[#FACC15]"
        >
          View More
        </Button>
      </div>
    </section>
  );
};

export const DynamicCard: React.FC<{ item: any; index: number }> = ({
  item,
  index,
}) => (
  <Card
    key={index}
    // data-aos="fade-up"
    // data-aos-delay={index * 100}
    isPressable
    shadow="sm"
    as={Link}
    href="/listing/12"
    onPress={() => console.log("item pressed")}
  >
    <CardBody className="overflow-visible p-0">
      <Image
        alt={item.title}
        className="w-full object-cover h-[190px]"
        radius="lg"
        shadow="sm"
        src={item.img}
        width="100%"
      />

      <div className="absolute z-10 bg-[#FFE0CE] py-1 px-2.5 text-sm rounded-xl font-semibold top-2 right-2">
        {item.type}
      </div>
    </CardBody>
    <CardFooter className="flex flex-col justify-start items-start px-4 py-6">
      <div className="flex items-center gap-2">
        <IoLocation className="text-lg" />
        <p className="font-semibold text-lg">{item.location}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div className="flex items-center gap-2">
          <FaBed className="text-lg text-gray-700" />
          <p className="text-lg text-gray-700 font-semibold dark:text-gray-400">
            {item.bed} Beds
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BiSolidBath className="text-lg text-gray-700" />
          <p className="text-lg text-gray-700 font-semibold dark:text-gray-400">
            {item.bath} Baths
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PiMapPinSimpleAreaFill className="text-lg text-gray-700" />
          <p className="text-lg text-gray-700 font-semibold dark:text-gray-400">
            {item.area}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-5">
        <Button className="bg-black text-white dark:bg-white dark:text-black">
          View Details
        </Button>
        <h1 className="font-bold text-2xl dark:text-white">{item.price}</h1>
      </div>
    </CardFooter>
  </Card>
);
