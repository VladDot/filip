import { ICardCareer } from '@/mock-data';

import { Card } from './card';

interface ICardsCareer {
  cardCareer: ICardCareer[];
}

export const CardsCareer = ({ cardCareer }: ICardsCareer) => {
  return (
    <div className="xxl:m-0 xxl:w-fit xxl:flex-nowrap xxl:gap-4 xxl:justify-normal relative flex flex-col gap-[10px] *:cursor-default md:m-auto md:w-[700px] md:flex-row md:flex-wrap md:justify-between md:gap-5 lg:w-[1000px]">
      {cardCareer.map(({ img, text, title }, idx) => (
        <Card img={img} text={text} title={title} key={`${title}_${idx}`} />
      ))}
    </div>
  );
};
