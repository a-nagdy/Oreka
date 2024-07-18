"use client";
import Loading from "@/app/loading";
import login_validate from "@/lib/validate";
import axios from "axios";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import success from "../../public/assets/icons/success.svg";
import oreka from "../../public/oreka.svg";
const RegisterComponent = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
      confPassword: "",
      phone: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values, { setSubmitting }) {
    setLoading(true);
    try {
      const response = await axios.post("/api/register", values);
      setSuccessMessage(response.data);
      setShowSuccess(true);
      const loginStatus = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (loginStatus.error) {
        setError(loginStatus.error);
      } else if (loginStatus.ok) {
        router.push(loginStatus.url);
      }

      setTimeout(() => {
        setShowSuccess(false);
        router.push("/");
      }, 4000);
    } catch (error) {
      setError(error.response.data);
    }

    setLoading(false);
    setSubmitting(false);
  }

  return (
    <>
      {loading && <Loading />}
      <main className="flex justify-center items-center m-20 dark:bg-gray-800 dark:border-gray-700">
        {showSuccess && (
          <div className="flex justify-center items-center flex-col gap-4 m-32">
            <Image src={success} width={150} />
            <h3 className="text-green-500 font-sans font-bold text-xl">
              {successMessage.message}
            </h3>
            <p className="font-sans font-medium">
              {successMessage.welcomeMessage}
            </p>
            <p className="font-sans font-normal">
              You Will be Redirected to home page soon
            </p>
          </div>
        )}
        {!showSuccess && (
          <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={oreka}
              alt="Logo"
              width={100}
              className="m-auto my-5 mb-10"
            />

            <form onSubmit={formik.handleSubmit}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
                {error && (
                  <span className="text-red-500">{error.emailError}</span>
                )}
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-500">{formik.errors.email}</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>{" "}
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-500">{formik.errors.password}</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="confPassword"
                  id="confPassword"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  value={formik.values.confPassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>{" "}
                {formik.touched.confPassword && formik.errors.confPassword && (
                  <span className="text-red-500">
                    {formik.errors.confPassword}
                  </span>
                )}
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                    placeholder=" "
                    value={formik.values.fName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="fName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>{" "}
                  {formik.touched.fName && formik.errors.fName && (
                    <span className="text-red-500">{formik.errors.fName}</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                    placeholder=" "
                    value={formik.values.lName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="lName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>{" "}
                  {formik.touched.lName && formik.errors.lName && (
                    <span className="text-red-500">{formik.errors.lName}</span>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                    placeholder=" "
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                  {error && (
                    <span className="text-red-500">{error.phoneError}</span>
                  )}
                  {formik.touched.phone && formik.errors.phone && (
                    <span className="text-red-500">{formik.errors.phone}</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default RegisterComponent;
