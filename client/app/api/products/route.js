import useFetchNew from "@/app/hooks/useFetchNew";
import { NextResponse } from "next/server";

export async function getProducts(req, res) {
  const url = `https://student.valuxapps.com/api/products?category_id=44`;
  try {
    const data = await useFetchNew(url);
    return NextResponse.json({
      message: "Fetched Successfully",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
export { getProducts as GET, getProducts as POST };
