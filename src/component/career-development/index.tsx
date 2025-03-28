import { cardCareer } from "./mock";
import { CardsCareer } from "./cards-career";
import { SubTitle } from "../sub-title";
import { Title } from "../title";

interface ICareerDevelopmentProps {
    title: string;
    subtitle: string;
}

export const CareerDevelopment = ({
    subtitle,
    title,
}: ICareerDevelopmentProps) => {
    return (
        <div className="">
            <div className=" max-w-[650px] md:mb-[60px] m-auto text-center mb-[30px] ">
                <SubTitle text={subtitle} />
                <Title
                    text={title}
                    className="leading-[100%]"
                />
            </div>
            <div className="flex justify-center [&>div>div:first-child>h3]:text-black [&>div>div:first-child>div]:bg-white [&>div>div:first-child>div]:text-textBlue">
                <CardsCareer cardCareer={cardCareer} />
            </div>
        </div>
    );
};
