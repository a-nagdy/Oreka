import Image from "next/image";
import Link from "next/link";
import oreka from "../../../public/oreka.svg";
const Signup = () => {
  return (
    <>
      <main className="flex justify-center items-center m-20 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={oreka}
            alt="Logo"
            width={100}
            className="m-auto my-5 mb-10"
          />
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Register to our platform
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
                required
              />
            </div>
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
                required
              />
              <label
                htmlFor="password"
                className="block my-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Retype Your password
              </label>
              <input
                type="re-password"
                name="re-password"
                id="re-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 gap-2 flex">
              Already registered?
              <Link
                href="login"
                className="text-blue-700 hover:underline dark:text-orange-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
