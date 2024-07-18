"use client";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoriesNav = (props) => {
  const [categoryData, setCategoryData] = useState([]);
  const [showCategories, setShowCategories] = useState(false); // State to control category visibility

  useEffect(() => {
    const fetchedCategory = async () => {
      const category = await props.category;
      setCategoryData(category);
    };
    fetchedCategory();
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
      <nav
        className={`flex justify-start items-center p-2 gap-2 ${props.className}`}
      >
        {/* Mobile and tablet view */}
        <div className="block lg:hidden">
          <ViewHeadlineOutlinedIcon
            className="cursor-pointer"
            onClick={toggleCategories}
          />
        </div>

        {/* Categories list */}
        <ul
          className={`flex justify-start gap-10 m-2 ${
            showCategories
              ? "flex flex-col items-start fixed top-0 bg-slate-200 h-screen z-20 m-0 w-[50vw] -right-2 pt-10 px-5 text-black lg:hidden"
              : "hidden lg:flex items-center"
          }`}
        >
          <span onClick={toggleCategories} className="lg:hidden">
            X
          </span>
          {categoryData.map((cat) => {
            const trimmedName = cat.name.replace(" ", "-");
            return (
              <li key={cat.id} className="relative group-[list]:hover:flex">
                <Link
                  href={`/${trimmedName}`}
                  className="hover:text-orange-500"
                >
                  {cat.name}
                </Link>
              </li>
            );
          })}
          {props.children}
        </ul>
      </nav>
    </>
  );
};

export default CategoriesNav;
