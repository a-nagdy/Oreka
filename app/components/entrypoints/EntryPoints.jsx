import Image from "next/image";
import Goods from "../../../public/assets/Goods.svg";
import MoneyBack from "../../../public/assets/MoneyBack.svg";
import Reviews from "../../../public/assets/Reviews.svg";
import Trusted from "../../../public/assets/Trusted.svg";
import Card from "../card/Cards";
const CARDS = [
  { text: "No Fake Reviews", img: Reviews },
  { text: "100% Money Protection", img: MoneyBack },
  { text: "Efficient & Trusted Website", img: Trusted },
  { text: "Buy Good Items, Cheap", img: Goods },
];

const EntryPoints = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 w-full gap-10">
      {CARDS.map((card) => {
        return (
          <Card
            className="p-20 bg-inherit shadow-none flex justify-center items-center flex-col gap-4"
            key={card}
          >
            <Image src={card.img} alt={card.text} />
            {card.text}
          </Card>
        );
      })}
    </div>
  );
};

export default EntryPoints;
