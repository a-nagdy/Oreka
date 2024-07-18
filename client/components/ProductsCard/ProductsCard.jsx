import Link from "next/link";

const ProductsCard = (props) => {
  return (
    <div
      className={`flex flex-wrap w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96 ${props.className}`}
    >
      <Link href={props.href} className="h-3/5 w-full relative">
        {props.discount > 0 && (
          <span className="absolute top-0 left-0 bg-orange-700/95 py-2 px-5 rounded-br-[2rem] text-white">
            {props.discount}%
          </span>
        )}
        <img
          className="p-8 rounded-t-lg object-scale-down h-full w-full"
          src={props.image}
          alt={props.name}
        />
      </Link>
      <div className="px-5 w-full">
        <Link href={props.href} className="text-center">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            {props.name}
          </h5>
        </Link>

        <div className="flex items-center justify-between mt-10">
          {props.discount ? (
            <p className="text-1xl font-bold text-[#EB6E34] dark:text-white flex flex-col justify-center">
              <span className="text-1xl text-gray-500 dark:text-white line-through mr-2">
                {props.oldPrice}
              </span>
              {props.price} LE
            </p>
          ) : (
            <span className="text-2xl font-bold text-[#EB6E34] dark:text-white">
              {props.oldPrice} LE
            </span>
          )}
          <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
