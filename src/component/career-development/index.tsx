import { Title } from "../title";
import { cardCareer } from "./mock";
import { SubTitle } from "../sub-title";
import { CardsCareer } from "./cards-career";

export const CareerDevelopment = () => {
    return (
        <div className="">
            <div className=" max-w-[650px] md:mb-[60px] m-auto text-center mb-[30px] ">
                <SubTitle text="Це саме те, що тобі потрібно " />
                <Title
                    text="Як виглядає процес навчання?"
                    className="leading-[100%]"
                />
            </div>
            <div className="flex justify-center [&>div>div:first-child>h3]:text-black [&>div>div:first-child>div]:bg-white [&>div>div:first-child>div]:text-textBlue">
                <CardsCareer cardCareer={cardCareer} />
            </div>
        </div>
    );
};
