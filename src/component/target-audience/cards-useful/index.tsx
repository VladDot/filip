import { ICardUseful } from '@/mock-data';

import { CardUseful } from './card-useful';

interface ICardsUseful {
  cardsUseful: ICardUseful[];
}

export const CardsUseful = ({ cardsUseful }: ICardsUseful) => {
  return (
    <div className="xxl:m-0 xxl:w-fit xxl:flex-nowrap xxl:gap-4 xxl:justify-normal flex flex-col *:cursor-default md:m-auto md:w-[700px] md:flex-row md:flex-wrap md:justify-between lg:w-[1000px]">
      {cardsUseful.map(({ img, text, title }, idx) => (
        <CardUseful img={img} text={text} title={title} key={`${title}_${idx}`} />
      ))}
    </div>
  );
};
