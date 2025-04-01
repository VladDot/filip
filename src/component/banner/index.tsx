import Image from "next/image";

import { Button } from "../button";
import { SubTitle } from "../sub-title";

export const Banner = () => {
    return (
        <div className="relative h-[622px] w-full md:h-[808px] overflow-hidden  z-[2]">
            <div className="absolute z-[1] blur-[120px] w-[400px] h-[200px] top-[40%] left-[-280px] bg-blueBg rounded-full sm:blur-[150px] sm:w-[500px] sm:h-[150px] sm:top-[35%] lg:w-[700px] lg:h-[300px] lg:blur-[180px] lg:top-[25%] lg:left-[-300px] "></div>
            <div className="absolute z-[1] blur-[120px] w-[400px] h-[200px] top-[25%] right-[-250px] bg-blueBg rounded-full sm:blur-[150px] sm:w-[500px] sm:h-[150px] sm:top-[30%] lg:w-[700px] lg:h-[300px] lg:blur-[180px] lg:top-[40%] lg:right-[-300px]"></div>

            <div className="relative w-full h-full flex justify-center items-center">
                <div className=" absolute z-[2] rotate-180 top-0 w-full [filter:brightness(0)_invert(1)] ">
                    <Image
                        src="/grid4.gif"
                        alt="GIF"
                        width={303}
                        height={300}
                        priority
                        className="w-full h-[622px] md:h-[808px] object-cover"
                    />
                </div>

                <div className="relative z-[5] flex flex-col gap-y-[10px] lg:gap-y-[30px] px-5 items-center sm:max-w-[495px]  ">
                    <h1 className="text-center text-[clamp(36px,_4vw,_72px)] leading-[100%] font-semibold">
                        Твій шлях у світ IT: сучасні курси для майбутніх
                        професіоналів
                    </h1>
                    <SubTitle
                        text="Опановуй IT-професію з нуля! Практичні курси, живі заняття та реальні проєкти допоможуть 
тобі стати затребуваним спеціалістом."
                        className="m-0 mb-[30px] lg:mb-[50px] text-center text-[clamp(18px,_4vw,_22px)]"
                    />
                    <Button
                        text="Переглянути курси"
                        className="w-[232px] "
                        rotate
                    />
                </div>
            </div>
        </div>
    );
};
