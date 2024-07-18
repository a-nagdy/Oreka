import ProductComponent from "@/components/ProductComponent/ProductComponent";
import { NextResponse } from "next/server";

const ProductPage = async ({ data, params }) => {
  const url = "https://student.valuxapps.com/api/products";
  const options = {
    method: "GET",
    headers: {
      lang: "en",
      "Content-Type": "application/json",
      // Add your authorization token here
      Authorization: `b676yF4HQTAGtP9bYNM2kjAw3VZ6vd63Ar7dr7jQvhISokVKIK5K3Emr4tiPctOBgBlZhV`,
    },
  };
  let productData = [];

  try {
    const response = await fetch(url, options);
    const { data: fetchedProduct } = await response.json();
    const products = fetchedProduct.data; // Assign fetched product to the declared variable
    const foundProduct = products.find(
      (product) =>
        product.name.toLowerCase().split(" ")[0] + product.id === params.id
    );

    if (foundProduct) {
      const categoryId = foundProduct.id;
      const res = await fetch(`${url}/${categoryId}`, options);
      productData = await res.json();
    } else {
      return NextResponse.json({
        message: "Couldn't Find Data",
      });
    }
  } catch (error) {
    console.error(error);
  }
  return (
    <ProductComponent
      name={productData.data.name}
      image={productData.data.image}
      images={productData.data.images}
      price={productData.data.price}
      description={productData.data.description}
      old_price={productData.data.old_price}
      discount={productData.data.discount}
      reviews={productData.data?.reviews}
      param={params.category}
    />
  );
};

export default ProductPage;
