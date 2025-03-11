import DefaultLayout from "@/layouts/default";
import { Button, Input, Link } from "@heroui/react";

export default function Login() {
  return (
    <DefaultLayout>
      <section className="h-auto py-10 relative md:px-12 px-4">
        <div className="mt-10 border rounded-xl py-5 px-10 max-w-xl mx-auto">
          <h1 className="font-semibold text-center text-2xl dark:text-white">
            Welcome Back
          </h1>

          <Input label="your email" className="mt-5" size="sm" type="email" />
          <Input label="your password" className="mt-5" size="sm" type="password" />

          {/* if already have an acc*/}
          <p className="mt-5">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>

          <Button className="mt-5 w-full bg-black text-white">Login</Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
