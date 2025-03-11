import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useState } from "react";
import {
  priceRanges,
  propertyTypes,
  SelectorIcon,
} from "../admin/property/AddProperty";

export default function AddProperties() {
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
