import useFetchNew from "@/app/hooks/useFetchNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import Link from "next/link";
import oreka from "../../public/oreka.svg";
import SignOptions from "../SignOptions/SignOptions";
import CategoriesNav from "../categoriesNav/CategoriesNav";

const Navbar = async (props) => {
  const url = `https://student.valuxapps.com/api/categories`;
  const { data } = await useFetchNew(url);

  return (
    <>
      <SignOptions class="hidden" />
      <nav className="flex justify-between items-center p-2 md:py-8 md:px-20">
        <div>
          <Link href="/">
            <Image src={oreka} alt="Logo" width={100} />
          </Link>
        </div>
        <div className="flex gap-5">
          <FavoriteBorderIcon className="text-orange-500 text-3xl" />
          <NotificationImportantOutlinedIcon className="text-orange-500 text-3xl" />
          <ShoppingBagOutlinedIcon className="text-orange-500 text-3xl" />
        </div>
        <div>
          <CategoriesNav category={data.data}>
            <SignOptions className="flex flex-col p-0" class="lg:hidden" />
          </CategoriesNav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
