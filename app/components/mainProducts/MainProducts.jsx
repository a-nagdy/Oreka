import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import Link from "next/link";
import mobileLaptop from "../../../public/iphoneLaptops.jpg";
import Slider from "../slider/Slider";
async function getData() {
  const res = await fetch("https://dummyjson.com/products/?limit=10");

  // if (res.products.category === "smartphones") {
  // }

  if (!res) {
    throw new Error("failed to fetch data ");
  }
  return await res.json();
}

const MainProducts = async () => {
  const { products } = await getData();

  const discount = products.price / products.discountPercentage;

  return (
    <div className="w-full">
      <div>
        <Image src={mobileLaptop} className="w-full h-[40rem]" alt="test" />
      </div>
      <Slider count={5} delay={4000} styles="w-10/12 mt-20 h-[30rem]">
        {products.map((product) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Link href="#" className="relative">
              {product.discountPercentage && (
                <span className="absolute top-0 left-0 rounded-br-3xl px-3 py-1 bg-orange-500/90 text-white">
                  {product.discountPercentage} %
                </span>
              )}
              <Image
                className="bg-blue-800 bg-blend-multiply rounded-t-lg h-[19rem] w-full mb-3"
                src={product.thumbnail}
                alt={product.text}
                width={300}
                height={200}
              />
            </Link>
            <div className="px-5 pb-5 relative">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-yellow-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-yellow-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-yellow-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-yellow-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`${
                    product.discountPercentage
                      ? "line-through text-gray-500"
                      : "text-orange-400  dark:text-white"
                  } text-3xl font-bold `}
                >
                  {product.price} LE
                </span>
                <span className="mr-16 text-2xl font-bold">
                  {Math.round(
                    product.price - product.price / product.discountPercentage
                  )}{" "}
                  LE
                </span>
                <Link
                  href="#"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800
                  absolute bottom-0 right-0 rounded-br-lg rounded-tl-3xl"
                >
                  <AddShoppingCartIcon />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainProducts;
