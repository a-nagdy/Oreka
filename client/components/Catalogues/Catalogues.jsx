import useFetchNew from "@/app/hooks/useFetchNew";
import Image from "next/image";
import Link from "next/link";
const Catalogues = async () => {
  const url = `https://student.valuxapps.com/api/categories`;
  const { data } = await useFetchNew(url);
  return (
    <section className="w-full py-5 px-20 flex flex-col justify-center items-center gap-5 text-center">
      <h5 className="text-black font-[Roboto] text-xl font-bold">
        All the Catalogue You Love
      </h5>
      <p className="text-[rgba(97,97,97,.90)] ">
        Great stuff. New and used. 350,000+ items added every day.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center my-10">
        {data.data.map((imageCat) => {
          const trimmedName = imageCat.name.replace(" ", "-");
          return (
            <div className="flex flex-col bg-white shadow-lg shadow-[#FFEBE1] rounded-[50%] justify-center items-center w-[5rem] h-[5rem] sm:w-[11rem] sm:h-[11rem]">
              <Link href={trimmedName}>
                <Image
                  src={imageCat.image}
                  width={80}
                  height={80}
                  className="m-auto w-[5rem] h-[5rem]"
                  alt={imageCat.name}
                />
              </Link>
              <p>{imageCat.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalogues;
