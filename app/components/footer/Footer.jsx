"use client";

const Footer = () => {
  const footerContainerStyles =
    "flex justify-center items-start flex-col gap-10";
  const footerListStyles =
    "flex justify-center items-start flex-col gap-5 w-full";
  return (
    <>
      <footer className="flex justify-between items-start p-20 dark:bg-gray-900 dark:border-gray-700 dark:text-orange-400">
        <div className={footerContainerStyles}>
          <h5 className="text-xl font-bold text-white">contact us</h5>
          <ul className={footerListStyles}>
            <li>b-25 some street , city </li>
            <li>tel: +2323123123</li>
            <li>support: test@test.com</li>
          </ul>
        </div>
        <div className={footerContainerStyles}>
          <h5 className="text-xl font-bold text-white">support</h5>
          <ul className={footerListStyles}>
            <li>how it works</li>
            <li>help center / FAQ</li>
            <li>feedback</li>
            <li>conflict resolution policy</li>
          </ul>
        </div>
        <div className={footerContainerStyles}>
          <h5 className="text-xl font-bold text-white">About Company</h5>
          <ul className={footerListStyles}>
            <li>about us</li>
            <li>contact us</li>
            <hr className="border border-gray-200 w-full" />
            <li>my profile</li>
            <li>favorites</li>
            <li>messages</li>
          </ul>
        </div>
        <div className="flex justify-center items-start flex-col gap-10 text-sky-100">
          <h5 className="text-xl font-bold text-white">follow us</h5>
          <ul className="flex justify-center items-center gap-5">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
