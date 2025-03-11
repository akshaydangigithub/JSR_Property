import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useState } from "react";

export default function AddProperty() {
  const [submitted2, setSubmitted2] = useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  console.log(submitted2);
  
  return (
    <div className="h-full w-full">
      <h1 className="text-2xl font-semibold">Add Property</h1>
      <div className="mt-4 w-full min-h-full">
        <Form
          className="w-full mt-5 "
          onReset={() => setSubmitted2(null)}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            console.log(data);

            setSubmitted2(data);
          }}
        >
          <div className="grid w-full grid-cols-2 gap-3">
            <Input
              isRequired
              label="Property Name"
              name="name"
              type="text"
              size="sm"
              errorMessage="Property name is required"
            />
            <Input
              isRequired
              label="Sub Name"
              name="subname"
              type="text"
              size="sm"
              errorMessage="Sub Name is required"
            />
            <Select
              isRequired
              disableSelectorIconRotation
              label="Property Type"
              name="propertyType"
              size="sm"
              selectorIcon={<SelectorIcon />}
            >
              {propertyTypes.map((propertyType) => (
                <SelectItem key={propertyType.key}>
                  {propertyType.label}
                </SelectItem>
              ))}
            </Select>

            <Select
              isRequired
              disableSelectorIconRotation
              name="priceRange"
              label="Price Range"
              size="sm"
              selectorIcon={<SelectorIcon />}
            >
              {priceRanges.map((priceRange) => (
                <SelectItem key={priceRange.key}>{priceRange.label}</SelectItem>
              ))}
            </Select>
            <Select
              isRequired
              disableSelectorIconRotation
              name="type2"
              label="Select Type"
              size="sm"
              selectorIcon={<SelectorIcon />}
            >
              <SelectItem>For Buy</SelectItem>
              <SelectItem>For Rent</SelectItem>
            </Select>
            <Input
              isRequired
              label="Location"
              name="location"
              type="text"
              size="sm"
              errorMessage="Location is required"
            />
            <Input
              isRequired
              label="Area"
              name="area"
              type="text"
              size="sm"
              errorMessage="Area is required"
            />
            <Input
              isRequired
              label="Bedrooms"
              name="bedrooms"
              type="text"
              size="sm"
              errorMessage="Bedrooms is required"
            />
            <Input
              isRequired
              label="Bathrooms"
              name="bathrooms"
              type="text"
              size="sm"
              errorMessage="Bathrooms is required"
            />
            <Input label="Parking" name="parking" type="text" size="sm" />
            <Input label="AC" name="ac" type="text" size="sm" />
            <Input label="Year Built" name="yearBuilt" type="text" size="sm" />
          </div>
          <div className="grid grid-cols-1 mt-2 w-full gap-3">
            <Input
              isRequired
              label="Image"
              name="image"
              type="file"
              multiple
              size="sm"
              errorMessage="Image is required"
            />
            <Input
              isRequired
              label="Video"
              name="video"
              type="file"
              size="sm"
              errorMessage="Video is required"
            />
            <Textarea
              isRequired
              label="Description"
              name="description"
              type="text"
              size="sm"
              errorMessage="Description is required"
            />
          </div>

          <Button type="submit" className="mt-3 bg-black text-white w-full">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export const SelectorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};

export const propertyTypes = [
  { key: "Apartment", label: "Apartment" },
  { key: "House", label: "House" },
  { key: "Villa", label: "Villa" },
  { key: "Land", label: "Land" },
  { key: "Commercial", label: "Commercial" },
  { key: "Office", label: "Office" },
  { key: "Others", label: "Others" },
];

export const priceRanges = [
  { key: "0-100000", label: "0 - 100,000" },
  { key: "100000-200000", label: "100,000 - 200,000" },
  { key: "200000-300000", label: "200,000 - 300,000" },
  { key: "300000-400000", label: "300,000 - 400,000" },
  { key: "400000-500000", label: "400,000 - 500,000" },
  { key: "500000-600000", label: "500,000 - 600,000" },
  { key: "600000-700000", label: "600,000 - 700,000" },
  { key: "700000-800000", label: "700,000 - 800,000" },
  { key: "800000-900000", label: "800,000 - 900,000" },
  { key: "900000-1000000", label: "900,000 - 1,000,000" },
  { key: "1000000+", label: "1,000,000+" },
];
