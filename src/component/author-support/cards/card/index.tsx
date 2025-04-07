import { Title } from "@/component/title";

import { ISupport } from "../../mock";

export const Card = ({ decor, text, title }: ISupport) => {
    return (
        <div className="px-5 md:[360px] xxl:w-[427px] h-fit relative z-[4]">
            <Title
                text={title}
                className=" text-[clamp(20px,_4vw,_28px)] m-0 mb-[10px]"
            />

            <ul className="flex flex-col gap-4  md:text-[18px]  ">
                <span className="absolute text-[220px] z-0 text-textBlue/10 top-0 md:leading-[70%] leading-[50%] right-0 xxl:text-[300px] font-bold font-montserrat">
                    {decor}
                </span>
                {text.map((e, idx) => (
                    <li
                        className="relative z-1"
                        key={`${e}_${idx}`}
                    >
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    );
};
