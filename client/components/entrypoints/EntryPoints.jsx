import Image from "next/image";
import Goods from "../../public/assets/Goods.svg";
import MoneyBack from "../../public/assets/MoneyBack.svg";
import Reviews from "../../public/assets/Reviews.svg";
import Trusted from "../../public/assets/Trusted.svg";
import Card from "../card/Cards";
const CARDS = [
  { text: "No Fake Reviews", img: Reviews },
  { text: "100% Money Protection", img: MoneyBack },
  { text: "Efficient & Trusted Website", img: Trusted },
  { text: "Buy Good Items, Cheap", img: Goods },
];

const EntryPoints = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 w-full gap-5 sm:gap-10 lg:flex-row ">
      {CARDS.map((card) => {
        return (
          <Card
            className="p-5 shadow-none flex justify-center items-center flex-col gap-4 sm:p-10 sm:whitespace-nowrap"
            key={card}
          >
            <Image src={card.img} alt={card.text} />
            <span>{card.text}</span>
          </Card>
        );
      })}
    </div>
  );
};

export default EntryPoints;
