import { Title } from "../title";
import { SubTitle } from "../sub-title";
import { CardsUseful } from "../cards-useful";

interface ITargetAudienceProps {
    title: string;
    subtitle: string;
}

export const TargetAudience = ({ title, subtitle }: ITargetAudienceProps) => {
    return (
        <div>
            <div className="flex flex-col max-w-[650px] md:mb-[60px] m-auto text-center mb-[30px]">
                <SubTitle text={subtitle} />
                <Title
                    text={title}
                    className="leading-[100%]"
                />
            </div>

            <div className="xxl:[&>div>div:last-child]:border-r-0 [&>div>div:last-child]:border-b-0 md:[&>div>div:last-child]:border-b xxl:[&>div>div:last-child]:border-b-0">
                <CardsUseful />
            </div>
        </div>
    );
};
