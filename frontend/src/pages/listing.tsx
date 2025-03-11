import DefaultLayout from "@/layouts/default";
import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import { useState } from "react";
import Img from "/img_image_260x384.png";
import { DynamicCard } from "@/components/Properties";

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

const propertyTypes = [
  { key: "Apartment", label: "Apartment" },
  { key: "House", label: "House" },
  { key: "Villa", label: "Villa" },
  { key: "Others", label: "Others" },
];

const priceRanges = [
  { key: "0-100000", label: "0 - 100,000" },
  { key: "100000-200000", label: "100,000 - 200,000" },
  { key: "200000-300000", label: "200,000 - 300,000" },
  { key: "300000-400000", label: "300,000 - 400,000" },
  { key: "400000-500000", label: "400,000 - 500,000" },
  { key: "1000000+", label: "1,000,000+" },
];

export default function ListingPage() {
  const [propertyType, setPropertyType] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 relative md:px-12 px-4">
        <h1 className="font-semibold text-3xl dark:text-white">
          Find Property
        </h1>
        <div className="mt-6 flex flex-col md:flex-row gap-4 min-h-[100vh]">
          <div className="w-full md:w-1/4 rounded-xl h-fit md:sticky top-20 left-0 bg-[#fffaf7] border border-[#ffdec9] px-4 py-6 dark:bg-[#1a1b1e] dark:text-white">
            <h2 className="font-semibold text-lg mb-3">Location</h2>
            <Input
              isRequired
              label="City/Location"
              name="city"
              type="text"
              errorMessage="City/Location is required"
              size="sm"
            />
            <h2 className="font-semibold text-lg mt-4 mb-3">Property Type</h2>

            <RadioGroup value={propertyType} onValueChange={setPropertyType}>
              {propertyTypes.map((propertyType) => (
                <Radio color="warning" value={propertyType.key}>
                  {propertyType.label}
                </Radio>
              ))}
            </RadioGroup>

            <h2 className="font-semibold text-lg mt-4 mb-3">Price Range</h2>

            <RadioGroup value={priceRange} onValueChange={setPriceRange}>
              {priceRanges.map((priceRange) => (
                <Radio color="warning" value={priceRange.key}>
                  {priceRange.label}
                </Radio>
              ))}
            </RadioGroup>

            <Button color="warning" variant="bordered" className="mt-6 w-full">
              Reset Filters
            </Button>

            <Button color="warning" className="mt-3 w-full">
              Search Properties
            </Button>
          </div>

          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto">
            {list.map((item, index) => (
              <DynamicCard item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
