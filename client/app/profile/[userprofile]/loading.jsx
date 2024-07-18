import Image from "next/image";
import LoaderIcon from "../../../public/assets/icons/loader.svg";
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/50 z-[10000] flex flex-1 items-center justify-center">
      <Image
        src={LoaderIcon}
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
}
