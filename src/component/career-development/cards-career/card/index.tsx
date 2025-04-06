import Image from "next/image";

import { Title } from "@/component/title";

import { ICardCareer } from "../../mock";

export const Card = ({ text, img, title }: ICardCareer) => {
    return (
        <div className="bg-white border border-[#E0F0FF] p-5 flex flex-col gap-y-[10px]  md:gap-3 lg:min-w-[460px] lg:max-w-[460px] max-w-[325px] min-w-[325px]  md:m-0 xxl:max-w-[251px] xxl:min-w-[251px] relative z-[6] rounded-[2px]">
            <Image
                src={img}
                alt={title}
                className="mb-[9px] md:mb-[66px]"
            />
            <Title
                text={title}
                className="text-[clamp(22px,_4vw,_32px)] m-0 text-textBlue"
            />
            <div className="border border-[#027DFA33] p-[10px] text-center text-white bg-blueBg rounded-[2px] font-[600]">
                {text}
            </div>
        </div>
    );
};
