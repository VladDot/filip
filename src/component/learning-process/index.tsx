import { Title } from "../title";
import { SubTitle } from "../sub-title";
import { CardsProcess } from "./cards-process";
import { cardLess } from "./mock";

export const LearningProcess = () => {
    return (
        <section className="mb-20 lg:mb-40 relative z-[4]">

            <div className="text-center m-auto max-w-[651px] mb-[30px] sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 relative z-[4]">
                <SubTitle text="Це саме те, що тобі потрібно" />
                <Title text="Як виглядає процес навчання?" />
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-y-3 md:gap-y-0 justify-center relative z-[4]">
                {cardLess.map((items, idx) => {
                    return (
                        <CardsProcess
                            idx={idx}
                            {...items}
                            key={`${items.title}_${idx}`}
                        />
                    );
                })}
            </div>

            <div className='absolute z-[1] h-[15%] lg:h-[50%] bg-white rounded-full blur-[40px] lg:translate-y-[30%] lg:top-1/5 bottom-0 w-full'/>
        </section>
    );
};
