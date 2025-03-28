import { Card } from "./card";
import { ICardCareer } from "../mock";

interface ICardsCareer {
    cardCareer: ICardCareer[];
}

export const CardsCareer = ({ cardCareer }: ICardsCareer) => {
    return (
        <div className="flex flex-col gap-[10px] md:gap-5 md:justify-between md:flex-row md:flex-wrap md:w-[700px] lg:w-[1000px] md:m-auto xxl:m-0 xxl:w-fit xxl:flex-nowrap xxl:gap-4 xxl:justify-normal ">
            {cardCareer.map(({ img, text, title }, idx) => (
                <Card
                    img={img}
                    text={text}
                    title={title}
                    key={`${title}_${idx}`}
                />
            ))}
        </div>
    );
};
