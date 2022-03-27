import React from "react";
import { SiTinder } from "react-icons/si";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import TinderCardItem from "./TinderCardItem";
import { TinderContext } from "../context/TinderContext";
import { useContext } from "react";

const cardsData = [];

function Card() {
  const { cardsData } = useContext(TinderContext);

  return (
    <div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No more profiles in your location...
          </div>
        </div>
        <div className={style.swipesContainer}>
          {cardsData.map((card, index) => (
            <TinderCardItem card={card} index={index} key={index} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

export default Card;

const style = {
  wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  tinderLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipesContainer: `w-full h-full overflow-hidden`,
};
