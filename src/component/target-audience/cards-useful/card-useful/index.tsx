import Image from "next/image";

import { Title } from "@/component/title";

import { ICardUseful } from "../../mock";

export const CardUseful = ({ text, img, title }: ICardUseful) => {
    return (
        <div className=" m-auto px-5 py-[30px] flex flex-col gap-y-[30px] border-b border-blueBg/20 min-w-[325px] max-w-[325px] md:m-0 lg:min-w-[460px] lg:max-w-[460px] xxl:max-w-[325px] xxl:min-w-[325px] xxl:border-r xxl:border-b-0">
            <div className="flex flex-row-reverse justify-end gap-4 md:flex-col md:gap-y-[30px]">
                <Title
                    text={title}
                    className="text-[clamp(22px,_4vw,_28px)] leading-none h-14 m-0 flex items-end md:items-start "
                />
                <div className="min-w-[52px] md:w-[52px]">
                    <Image
                        src={img}
                        alt={text}
                        className="w-full"
                    />
                </div>
            </div>
            <p className="leading-[1.4] text-[18px] w-[275px] lg:w-[400px] xxl:w-[275px]">
                {text}
            </p>
        </div>
    );
};
