import DefaultLayout from "@/layouts/default";
import { Button, Input, Link } from "@heroui/react";

export default function Signup() {
  return (
    <DefaultLayout>
      <section className="h-auto py-10 relative md:px-12 px-4">
        <div className="mt-10 border rounded-xl py-5 px-10 max-w-xl mx-auto">
          <h1 className="font-semibold text-center text-2xl dark:text-white">
            Please Sign Up
          </h1>

          <Input label="Your name" className="mt-5" size="sm" type="text" />
          <Input label="Your email" className="mt-5" size="sm" type="email" />
          <Input
            label="Your phone number"
            className="mt-5"
            size="sm"
            type="number"
          />
          <Input
            label="Your password"
            className="mt-5"
            size="sm"
            type="password"
          />

          {/* if already have an acc*/}
          <p className="mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </p>

          <Button className="mt-5 w-full bg-black text-white">Sign Up</Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
