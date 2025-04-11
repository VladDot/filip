import { Title } from '../title';
import { SubTitle } from '../sub-title';
import { CardsProcess } from './cards-process';
import { cardLess } from './mock';

export const LearningProcess = () => {
  return (
    <section className="relative z-[4] mb-20 px-5 lg:mb-40">
      <div className="relative z-[4] m-auto mb-[30px] max-w-[651px] text-center sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
        <SubTitle text="Це саме те, що тобі потрібно" />
        <Title text="Як виглядає процес навчання?" />
      </div>

      <div className="relative z-[4] flex flex-wrap justify-center gap-y-3 md:gap-y-0 lg:flex-nowrap">
        {cardLess.map((items, idx) => {
          return <CardsProcess idx={idx} {...items} key={`${items.title}_${idx}`} />;
        })}
      </div>

      <div className="absolute bottom-0 z-[1] h-[15%] w-full rounded-full bg-white blur-[40px] lg:top-1/5 lg:h-[50%] lg:translate-y-[30%]" />
    </section>
  );
};
