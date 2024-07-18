"use client";
import useFetchNew from "@/app/hooks/useFetchNew";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import Slider from "../slider/Slider";

const MainProducts = ({ params }) => {
  const [productsData, setProductsData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const url = `/api/products`;
    setLoading(true);
    try {
      const { data } = await useFetchNew(url, {
        method: "GET",
      });
      setLoading(false);
      setProductsData(data.data.data);
    } catch (error) {
      setLoading(false);
      console.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const { state, dispatch } = useContext(Store);
  // const addToCartHandler = () => {
  //   dispatch({type:"CART_ADD_ITEM", payload:{...product}})
  // };
  return (
    <div className="border-b-2 border-[#DEDEDE] w-4/5">
      <div className="flex items-center gap-6">
        <h3 className="text-xl font-bold">Recommended for You</h3>
      </div>
      {loading ? (
        <div className="flex justify-center items-center gap-5 w-full">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : (
        <Slider count={5} delay={3000} styles="h-[30rem] my-10">
          {productsData.map((product) => (
            <div
              className=" flex flex-wrap w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full"
              key={product.id}
            >
              <Link href="# " className="h-3/5 w-full relative">
                {product.discount > 0 && (
                  <span className="absolute top-0 left-0 bg-orange-700/95 py-2 px-5 rounded-br-[2rem] text-white">
                    {product.discount}%
                  </span>
                )}
                <Image
                  className="p-8 rounded-t-lg object-scale-down h-full w-full"
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.name}
                />
              </Link>
              <div className="px-5 pb-5 w-full">
                <Link href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                    {product.name}
                  </h5>
                </Link>

                <div className="flex items-center justify-between mt-10">
                  {product.discount ? (
                    <p className="text-2xl font-bold text-[#EB6E34] dark:text-white flex flex-col justify-center">
                      <span className="text-1xl text-gray-500 dark:text-white line-through mr-2">
                        {product.old_price}
                      </span>
                      {product.price} LE
                    </p>
                  ) : (
                    <span className="text-3xl font-bold text-[#EB6E34] dark:text-white">
                      {product.old_price} LE
                    </span>
                  )}
                  <button
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    // onClick={addToCartHandler}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MainProducts;
