import { Title } from "../title";
import { cardsUseful } from "./mock";
import { SubTitle } from "../sub-title";
import { CardsUseful } from "./cards-useful";

export const TargetAudience = () => {
    return (
        <div className="w-max-[1320px] lg:pb-[160px] bg-white px-5 xl:pl-[60px] xl:pr-12 xxl:m-auto">
            <div className="max-w-[650px] m-auto md:mb-[60px] text-center mb-[30px]">
                <SubTitle text="Це саме те, що тобі потрібно " />
                <Title
                    text="Для кого будуть корисні наші курси?"
                    className="leading-[100%]"
                />
            </div>

            <div className="xxl:[&>div>div:last-child]:border-r-0 [&>div>div:last-child]:border-b-0 md:[&>div>div:last-child]:border-b xxl:[&>div>div:last-child]:border-b-0 flex justify-center">
                <CardsUseful cardsUseful={cardsUseful} />
            </div>
        </div>
    );
};
