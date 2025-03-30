import { SubTitle } from "../sub-title";
import { Title } from "../title";
import { CardOptions } from "./card-options";
import { mockCards } from "./mock-config";

export const LearningOptions = ({}) => {
    return (
        <section className="mb-20 sm:mb-24 md:mb-28 xl:mb-32 xxl:[160px]">
            <div className="text-center m-auto pb-5 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20">
                <SubTitle text="Обери те, що тобі найбільше підходить, Вибір за тобою" />
                <Title
                    className="max-w-[651px]"
                    text="Існують два варіанти індивідуального навчання"
                />
            </div>
            <div className="flex gap-5 m-auto w-full sm:w-fit flex-col xl:flex-row items-stretch [&_div_.lastItem]:odd:bg-white even:[&_div_.lastItem]:last:bg-brightBg">
                {mockCards.map((card, index) => (
                    <CardOptions
                        key={`${card.title}_${index}`}
                        {...card}
                    />
                ))}
            </div>
        </section>
    );
};
