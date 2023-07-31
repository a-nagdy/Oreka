import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import Image from "next/image";
import Link from "next/link";
import oreka from "../../../public/oreka.svg";
import CategoriesNav from "../categories/CategoriesNav";

async function getData() {
  const res = await fetch("https://dummyjson.com/products/");

  if (!res) {
    throw new Error("failed to fetch data ");
  }
  return await res.json();
}

// async function searchData() {
//   fetch("https://dummyjson.com/products/search?q=")
//     .then((res) => res.json())
//     .then(console.log);
// }

const Navbar = async (props) => {
  // const searchInputRef = useRef();
  const { products } = await getData();
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const subCategories = [...new Set(products.map((product) => product.brand))];
  return (
    <>
      <nav className="w-full h-8 flex justify-end items-center p-8 bg-slate-200 dark:bg-gray-900 dark:border-gray-700 dark:text-orange-400">
        <ul className="flex justify-center items-center gap-6">
          <Link
            className="flex justify-center items-center text-blue-400"
            href="/"
          >
            <SystemUpdateIcon />
            Get the app
          </Link>
          <Link href="/seller">Become a Seller</Link>
          <Link href="/user/login">Login</Link>
          <Link href="/user/register">Register</Link>
        </ul>
      </nav>
      <nav className="flex justify-between items-center py-8 px-20">
        <div>
          <Link href="/">
            <Image src={oreka} alt="Logo" width={100} />
          </Link>
        </div>
        <div className="border rounded-sm border-slate-100 flex dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
          <select
            className="p-1 border-slate-100 border-r-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white self-center"
            defaultValue="category"
          >
            <option hidden value="category">
              Category
            </option>
            {uniqueCategories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="w-full flex items-center justify-center">
            <input
              type="search"
              name="search"
              placeholder="enter keywords"
              // ref={searchInputRef}
              className="p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <SearchOutlinedIcon className="bg-orange-500 h-full w-8 rounded-l text-white p-1" />
          </div>
        </div>
        <div className="gap-4 flex">
          <FavoriteBorderIcon className="text-orange-500 text-3xl" />
          <NotificationImportantOutlinedIcon className="text-orange-500 text-3xl" />
          <ShoppingBagOutlinedIcon className="text-orange-500 text-3xl" />
        </div>
      </nav>
      <CategoriesNav category={uniqueCategories} subCategories={subCategories}/>
    </>
  );
};

export default Navbar;
