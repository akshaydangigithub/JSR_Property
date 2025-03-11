import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
  Checkbox,
} from "@heroui/react";

const propertyTypes = [
  { key: "Apartment", label: "Apartment" },
  { key: "House", label: "House" },
  { key: "Villa", label: "Villa" },
  { key: "Land", label: "Land" },
  { key: "Commercial", label: "Commercial" },
  { key: "Office", label: "Office" },
  { key: "Others", label: "Others" },
];

const priceRanges = [
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

const SelectorIcon = (props: React.SVGProps<SVGSVGElement>) => {
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

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitted, setSubmitted] = React.useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const [submitted2, setSubmitted2] = React.useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

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

  console.log(submitted, submitted2);

  return (
    <>
      <section
        ref={ref}
        className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 flex items-center justify-center p-4 relative overflow-hidden"
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10"
          initial="hidden"
          animate={mainControls}
          variants={textVariants}
        >
          <div className="max-w-[1320px] mx-auto">
            <motion.h2
              className="text-4xl md:text-6xl font-bold dark:text-yellow-400 mb-6"
              initial="hidden"
              animate={mainControls}
              variants={headingVariants}
            >
              {[
                "Find",
                "Your",
                "Dream",
                "Home.",
                "\n",
                "Secure",
                "Reliable",
                "Hassle-Free.",
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
              className="mb-12 max-w-2xl mx-auto dark:text-white font-light text-base md:text-lg"
              initial="hidden"
              animate={paragraphControls}
              variants={textVariants}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              JSR Property is the trusted real estate platform offering the best
              property listings, zero hidden charges, 24/7 support, and seamless
              buying and selling experiences.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
              initial="hidden"
              animate={paragraphControls}
              variants={textVariants}
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              <Button
                className="bg-[#ffceb2] dark:bg-[#FACC15] text-black"
                size="lg"
                radius="full"
                onPress={onOpen}
              >
                Find Home <FaArrowRight className="h-4 w-4 text-black" />
              </Button>

              <Button
                size="lg"
                radius="full"
                variant="bordered"
                className="border-[#ffceb2] dark:border-[#FACC15] text-[#f07e3c] dark:text-[#FACC15]"
                onPress={() => setIsOpen2(true)}
              >
                Become a Partner
                <FaArrowRight className="h-4 w-4 text-[#f07e3c] dark:text-[#FACC15]" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Modal
        isOpen={isOpen}
        placement="auto"
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Find Your Dream Home</h2>
                <p className="text-base font-light">
                  Search for your dream home with JSR Property
                </p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full max-w-xl"
                  onReset={() => setSubmitted(null)}
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(
                      new FormData(e.currentTarget)
                    );

                    console.log(data);

                    setSubmitted(data);
                  }}
                >
                  <Input
                    isRequired
                    label="City/Location"
                    labelPlacement="outside"
                    name="city"
                    placeholder="Enter city or location"
                    type="text"
                    errorMessage="City/Location is required"
                  />

                  <Select
                    isRequired
                    disableSelectorIconRotation
                    className="max-w-xl"
                    label="Property Type"
                    labelPlacement="outside"
                    name="propertyType"
                    placeholder="Select an option"
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
                    className="max-w-xl"
                    name="priceRange"
                    label="Price Range"
                    labelPlacement="outside"
                    placeholder="Select an option"
                    selectorIcon={<SelectorIcon />}
                  >
                    {priceRanges.map((priceRange) => (
                      <SelectItem key={priceRange.key}>
                        {priceRange.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    isRequired
                    disableSelectorIconRotation
                    className="max-w-xl"
                    name="type2"
                    label="Select"
                    labelPlacement="outside"
                    placeholder="Select an option"
                    selectorIcon={<SelectorIcon />}
                  >
                    <SelectItem>For Buy</SelectItem>
                    <SelectItem>For Rent</SelectItem>
                  </Select>

                  <Button
                    type="submit"
                    className="mt-4 w-full bg-black text-white dark:bg-white dark:text-black"
                  >
                    Search
                  </Button>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpen2}
        placement="auto"
        size="full"
        onOpenChange={() => setIsOpen2(false)}
      >
        <ModalContent>
          <div className="h-full w-full flex flex-col items-center justify-center md:px-0 px-4">
            <h1 className="font-semibold text-center text-2xl dark:text-white">
              To become a partner, please fill out the form below
            </h1>

            <Form
              className="w-full max-w-5xl mt-5"
              onReset={() => setSubmitted2(null)}
              onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));

                console.log(data);

                setSubmitted2(data);
              }}
            >
              <div className="w-full grid grid-cols-2 gap-4">
                <Input
                  isRequired
                  label="Full Name"
                  name="name"
                  type="text"
                  errorMessage="Full name is required"
                />
                <Input
                  isRequired
                  label="Email Address"
                  name="email"
                  type="email"
                  errorMessage="Email address is required"
                />
                <Input
                  isRequired
                  label="Phone Number"
                  name="phone"
                  type="number"
                  errorMessage="Phone number is required"
                />
                <Input
                  isRequired
                  label="Company Name"
                  name="company"
                  type="text"
                  errorMessage="Company name is required"
                />{" "}
                <Input
                  isRequired
                  label="City"
                  name="city"
                  type="text"
                  errorMessage="City is required"
                />
                <Input
                  isRequired
                  label="Country"
                  name="country"
                  type="text"
                  errorMessage="Country is required"
                />
              </div>
              <div className="w-full grid mt-2 grid-cols-1 gap-4">
                <Textarea
                  isRequired
                  label="About your company"
                  name="message"
                  errorMessage="Message is required"
                />{" "}
                <Input
                  isRequired
                  label="Your Image"
                  name="image"
                  type="file"
                  errorMessage="Image is required"
                />
              </div>

              <Checkbox
                className="mt-3"
                color="warning"
                defaultSelected={false}
                isRequired
              >
                I agree to the{" "}
                <span className="text-blue-500 underline">
                  terms and conditions
                </span>
              </Checkbox>

              <Button
                type="submit"
                className="mt-4 w-full bg-black text-white dark:bg-white dark:text-black"
              >
                Submit
              </Button>
            </Form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};
