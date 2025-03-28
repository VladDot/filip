import { cn } from "@/utilities";

interface ICardsProcess {
    title: string;
    content: string;
    subContent?: string;
    idx: number;
}

export const CardsProcess = ({
    idx,
    title,
    content,
    subContent,
}: ICardsProcess) => {
    return (
        <>
            <div className="w-full m-auto md:m-0 sm:max-w-[420px] sm:gap-x-4  md:max-w-[359px] flex flex-row md:flex-col">
                <div className="lg:mb-[60px] flex flex-col ">
                    <p className="mb-2 ml-6 text-4xl lg:text-[54px] text-blueBg lg:mb-10">
                        {`0${idx + 1}`}
                    </p>
                    <div className="bg-blueBg/10 ml-[38px] mb-4 rounded-[2px] relative w-2 h-full md:ml-0 md:w-full md:h-2 after:absolute after:w-3 after:h-3 after:bg-blueBg after:top-3 after:translate-x-1/2 after:-left-[8px] md:after:absolute md:after:top-1/2 md:after:left-[26px] md:after:-translate-y-1/2 md:after:w-[18px] md:after:h-[18px] md:after:bg-blueBg" />
                </div>

                <div className="ml-6 pt-[6px] lg:pt-0 max-w-[267px]">
                    <h4 className="text-blueBg text-2xl lg:text-[32px] mb-4">
                        {title}
                    </h4>

                    <p
                        className={cn(
                            "text-[18px] text-darkText",
                            subContent && "mb-6"
                        )}
                    >
                        {content}
                    </p>
                    {subContent && (
                        <p className="text-[18px] text-darkText">
                            {subContent}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

// "bg-red-600 ml-[38px] mb-4 relative w-2 h-full md:ml-0 md:w-full md:h-2 after:absolute after:w-3 after:h-3 after:bg-blueBg after:top-3 after:translate-x-1/2 after:-left-[8px] md:after:absolute md:after:top-1/2 md:after:left-[26px] md:after:-translate-y-1/2 md:after:w-[18px] md:after:h-[18px] md:after:bg-blueBg"

// "bg-red-600 ml-[38px] mb-4 relative w-2 h-full sm:ml-0 sm:w-full sm:h-2 after:absolute after:w-3 after:h-3 after:bg-blueBg after:top-3 after:translate-x-1/2 after:-left-[8px] sm:after:absolute sm:after:top-1/2 sm:after:left-[26px] sm:after:-translate-y-1/2 sm:after:w-[18px] sm:after:h-[18px] sm:after:bg-blueBg"
