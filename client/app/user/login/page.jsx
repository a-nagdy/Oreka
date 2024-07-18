"use client";
// import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import Loading from "@/components/Loading/Loading";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import login_validate from "../../../lib/validate";
import oreka from "../../../public/oreka.svg";
const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });
  async function onSubmit(values) {
    setLoading(true);
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status.error) {
      setError(status.error);
      setLoading(false);
      return;
    }
    if (status.ok) {
      setLoading(true);
      router.push(status.url);
    }
  }
  return (
    <main className="flex justify-center items-center m-20 dark:bg-gray-800 dark:border-gray-700">
      {loading && <Loading className="" />}

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Image
          src={oreka}
          alt="Logo"
          width={100}
          className="m-auto my-5 mb-10"
        />
        <form className="space-y-3" onSubmit={formik.handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div className="text-rose-500 text-center">
              {formik.errors.email}
            </div>
          ) : (
            <></>
          )}

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div className="text-rose-500 text-center">
              {formik.errors.password}
            </div>
          ) : (
            <></>
          )}
          {error && (
            <div className="text-rose-500 text-center normal-case">{error}</div>
          )}

          <div className="flex items-start">
            <Link
              href="user/recover"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-orange-500"
            >
              Lost Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
          >
            <span>Login to your account</span>
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <Link
              href="register"
              className="text-blue-700 hover:underline dark:text-orange-500 mx-2"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
