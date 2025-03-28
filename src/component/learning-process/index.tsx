import { Title } from "../title";
import { SubTitle } from "../sub-title";
import { CardsProcess } from "./cards-process";
import { cardLess } from "./mock";

export const LearningProcess = () => {
    return (
        <section className="mb-20">
            <div className="text-center m-auto max-w-[651px] mb-[30px] sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
                <SubTitle text="Це саме те, що тобі потрібно" />
                <Title text="Як виглядає процес навчання?" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-y-3 md:gap-y-0 justify-center">
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
        </section>
    );
};
