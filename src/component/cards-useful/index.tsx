import { CardUseful } from "./card-useful";
import { cardsUseful } from "./mock";

export const CardsUseful = () => {
    return (
        <div className="flex flex-col md:justify-between md:flex-row md:flex-wrap md:w-[700px] md:m-auto xxl:w-fit xxl:flex-nowrap xxl:gap-4 xxl:justify-normal ">
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
