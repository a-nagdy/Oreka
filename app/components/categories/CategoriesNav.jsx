import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";

const CategoriesNav = () => {
  const DUMMY_CATEGORY = ["computers", "mobiles", "home appliances", "beauty"];

  return (
    <>
      {/* fetch data from api for categories */}
      <nav className="flex justify-start items-center px-24 gap-2">
        <ul className="flex justify-start items-center gap-2 m-2">
          <ViewHeadlineOutlinedIcon />
          {DUMMY_CATEGORY.map((cat) => {
            return <li key={cat}>{cat}</li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default CategoriesNav;
