import DefaultLayout from "@/layouts/default";
import img1 from "/de1.png";
import img2 from "/de2.png";
import img3 from "/de3.png";
import img4 from "/img_rectangle_5599.png";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Button, DatePicker, Form, Input, Textarea } from "@heroui/react";
import { useState } from "react";

export default function PropertyDetailsPage() {
  const [submitted, setSubmitted] = useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  console.log(submitted);

  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 relative md:px-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 overflow-hidden">
            <img src={img1} alt="img1" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
            <div className="rounded-xl overflow-hidden">
              <img
                src={img2}
                alt="img2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={img3}
                alt="img3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">
              Trovilla Plan in Sereno Canyon - Estate Collection by Toll
              Brothers
            </h1>
            <h3 className="font-semibold mt-3 text-xl">
              2861 62nd Ave, Oakland, CA 94605
            </h3>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 100,
                borderColor: "gray",
              }}
              className="border shadow-sm mt-5 w-fit rounded-xl py-1.5"
            >
              <h3 className="font-semibold text-xl">$649,900</h3>
              <p className="text-sm text-gray-400">Online / Cash Payment</p>
            </div>
            <h3 className="font-semibold mt-8 text-lg">
              Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara
              For Sale
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A slider is great way to display a slideshow featuring images or
              videos, usually on your homepage.Adding sliders to your site is no
              longer difficult. You don’t have to know coding anymore. Just use
              a slider widget and it will automatically insert the slider on
              your web page.So, the Elementor slider would be a great tool to
              work with when building a WordPress site.
            </p>

            <h1 className="font-bold text-2xl mt-10">Local Information</h1>

            <div className="h-64 md:h-96 overflow-hidden w-full mt-5 border rounded-xl">
              {/* map */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29316.16553772633!2d77.38143001197616!3d23.296859599231535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c686203754fd5%3A0x99c1d3e0a6812e47!2sKarond%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1741020610987!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-xl h-fit col-span-1 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">Request for Visit</h1>

            <Form
              onReset={() => setSubmitted(null)}
              onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));

                console.log(data);

                setSubmitted(data);
              }}
            >
              <Input
                isRequired
                label="Name"
                name="name"
                className="mt-5"
                type="text"
                errorMessage="Name is required"
                size="sm"
              />
              <Input
                isRequired
                label="Email"
                name="email"
                className="mt-3"
                type="email"
                errorMessage="Email is required"
                size="sm"
              />
              <Input
                isRequired
                label="Phone"
                name="phone"
                className="mt-3"
                type="number"
                errorMessage="Phone is required"
                size="sm"
              />
              <DatePicker
                isRequired
                label="Date"
                name="date"
                className="mt-3"
                errorMessage="Date is required"
                size="sm"
              />
              <Textarea
                className="max-w-xs mt-3"
                label="Description"
                placeholder="Enter your description"
              />

              <Button
                type="submit"
                className="mt-3 w-full bg-black text-white dark:bg-white dark:text-black"
              >
                Send Request
              </Button>
            </Form>
          </div>
        </div>

        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">Home Highlights</h1>
            <div className="grid grid-cols-2 ">
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Parking
                  </li>
                </ul>
                <p className="mt-4 font-semibold">No Info </p>
              </div>
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Outdoor
                  </li>
                </ul>
                <p className="mt-4 font-semibold">No Info</p>
              </div>
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    A/C
                  </li>
                </ul>
                <p className="mt-4 font-semibold">No Info </p>
              </div>
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Year Built
                  </li>
                </ul>
                <p className="mt-4 font-semibold">2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">Agent Information</h1>
            <div className="flex mt-5 items-center gap-6">
              <div className="h-28 w-28 rounded-xl overflow-hidden">
                <img src={img4} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="font-bold text-xl">John Doe</h1>
                <div className="mt-1 flex gap-1">
                  <IoStarSharp className="text-red-700 text-sm" />
                  <IoStarSharp className="text-red-700 text-sm" />
                  <IoStarOutline className="text-sm" />
                  <IoStarOutline className="text-sm" />
                  <IoStarOutline className="text-sm" />
                </div>
                <p className="text-gray-800 dark:text-gray-300 mt-1">
                  bruno@relasto .com
                </p>

                <p className="text-gray-800 dark:text-gray-300">
                  +65 0231 965 965
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
