import { Title } from '../title';
import { cardsUseful } from './mock';
import { CardsUseful } from './cards-useful';

export const TargetAudience = () => {
  return (
    <section className="w-max-[1320px] xxl:mx-auto mb-16 bg-white px-5 pt-6 lg:mb-40 xl:pr-12 xl:pl-[60px]">
      <div className="m-auto mb-[30px] max-w-[650px] text-center md:mb-[60px]">
        <Title text="Кому буде корисний курс" className="leading-[100%]" />
      </div>

      <div className="xxl:[&>div>div:last-child]:border-r-0 xxl:[&>div>div:last-child]:border-b-0 flex justify-center [&>div>div:last-child]:border-b-0 md:[&>div>div:last-child]:border-b">
        <CardsUseful cardsUseful={cardsUseful} />
      </div>
    </section>
  );
};
