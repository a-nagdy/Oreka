import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Loading from "@/components/Loading/Loading";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { NextResponse } from "next/server";
import { Suspense } from "react";
import useFetchNew from "../hooks/useFetchNew";

const CategoryPage = async ({ params }) => {
  const category = params.category;

  const url = "https://student.valuxapps.com/api/categories";
  const options = {
    method: "GET",
    headers: {
      lang: "en",
      "Content-Type": "application/json",
      // Add your authorization token here
      Authorization: `b676yF4HQTAGtP9bYNM2kjAw3VZ6vd63Ar7dr7jQvhISokVKIK5K3Emr4tiPctOBgBlZhV`,
    },
  };
  let specificData = [];
  try {
    const response = await fetch(url, options);
    const { data: fetchedProducts } = await response.json();
    const products = fetchedProducts.data; // Assign fetched products to the declared variable
    const unTrimmedName = params.category.replace("-", " ").toLowerCase();
    const foundCategory = products.find(
      (category) => category.name.toLowerCase() === unTrimmedName
    );
    if (foundCategory) {
      const categoryId = foundCategory.id;
      specificData = await useFetchNew(
        `https://student.valuxapps.com/api/products?category_id=${foundCategory.id}`
      );
      specificData.categoryId = categoryId;
    } else {
      return NextResponse.json({
        message: "Couldn't Find Data",
      });
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Breadcrumb>
        <a
          href="#"
          class="ml-1 md:ml-2 text-sm font-medium text-gray-700 hover:text-blue-600  dark:text-gray-400 dark:hover:text-white"
        >
          {category}
        </a>
      </Breadcrumb>
      <main className="grid grid-cols-footer mx-[100px] p-10">
        <aside className="border-tr-2 border-r-[#DEDEDE]">
          <h3 className="text-black font-bold text-xl">Categories</h3>
        </aside>

        <section className="flex flex-col ml-5 gap-10">
          <div className="flex items-center gap-3">
            <h4 className="text-black font-bold text-xl">{category} Store</h4>
            <span className="text-[#616161B2]">
              ( {specificData.data.total} results )
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {specificData.data.data.map((item) => {
              const id = item.id;

              const trimmedName = item.name.toLowerCase().split(" ");
              const fullName = trimmedName[0] + id;

              const productLink = `/${category}/${fullName}`;
              return (
                <Suspense fallback={<Loading />} key={item.id}>
                  <ProductsCard
                    href={productLink}
                    name={item.name}
                    image={item.image}
                    button="Add to Cart"
                    price={item.price}
                    oldPrice={item.old_price}
                    discount={item.discount}
                    key={item.id}
                  />
                </Suspense>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
