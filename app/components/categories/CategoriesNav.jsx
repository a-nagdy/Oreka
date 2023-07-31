import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";

const CategoriesNav = (props) => {
  // const DUMMY_CATEGORY = ["computers", "mobiles", "home appliances", "beauty"];
  const category = props.category;
  const subCategories = props.subCategories;
  console.log(subCategories);
  return (
    <>
      {/* fetch data from api for categories */}
      <nav className="flex justify-start items-center px-24 gap-2">
        <ul className="flex justify-start items-center gap-10 m-2">
          <ViewHeadlineOutlinedIcon />
          {category.map((cat) => {
            return (
              <li key={cat} className="relative group-[list]:hover:flex">
                {cat}
                {/* <ul className="absolute bg-none z-10 bg-slate-600 shadow-md grid grid-cols-2 w-max p-5 gap-10 group-[list]">
                  {subCategories.map((subs) => {
                    return (
                      <li key={subs} className="w-full">
                        {subs}
                      </li>
                    );
                  })}
                </ul> */}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default CategoriesNav;
