import { ICardUseful } from "../mock";
import { CardUseful } from "./card-useful";

interface ICardsUseful {
    cardsUseful: ICardUseful[];
}

export const CardsUseful = ({ cardsUseful }: ICardsUseful) => {
    return (
        <div className="flex flex-col md:justify-between md:flex-row md:flex-wrap md:w-[700px] lg:w-[1000px] md:m-auto xxl:m-0 xxl:w-fit xxl:flex-nowrap xxl:gap-4 xxl:justify-normal ">
            {cardsUseful.map(({ img, text, title }, idx) => (
                <CardUseful
                    img={img}
                    text={text}
                    title={title}
                    key={`${title}_${idx}`}
                />
            ))}
        </div>
    );
};
