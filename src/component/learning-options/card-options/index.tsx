import Image from "next/image";

import { Button } from "@/component";
import { DoneFilled } from "@/assets/icon";

interface ICardOptionsProps {
    price: string;
    title: string;
    description: string;
    lists: string[];
}

export const CardOptions = ({
    lists,
    price,
    title,
    description,
}: ICardOptionsProps) => {
    return (
        <div className="w-full  gap-x-10 xl:gap-0 xl:max-w-[650px] p-2.5 rounder-[2px] border-[1px] border-brightBg flex items-center sm:justify-between flex-col sm:flex-row odd:bg-brightBg even:bg-white odd:[&_.lastItem]:bg-white even:[&_.lastItem]:bg-brightBg">
            <div className="w-full h-full sm:max-w-[400px] pl-5 py-5 rounder-[2px] flex flex-col justify-between">
                <div className="sm:max-w-[285px] sm:mb-5">
                    <p className="mb-10 text-[clamp(16px,_4vw,_20px)] font-semibold">
                        {price}
                    </p>
                    <h4 className="mb-5 text-[clamp(20px,_4vw,_32px)] text-textBlue font-bold ">
                        {title}
                    </h4>
                    <p className="text-[clamp(14px,_4vw,_18px)] font-medium">
                        {description}
                    </p>
                </div>
                <Button
                    revers
                    text="Дізнатися більше"
                    className="max-w-[295px] sm:max-w-[216px] hidden sm:flex"
                />
            </div>
            <div className="w-full h-full p-5 m-auto sm:max-w-[400px] rounded-[2px] lastItem">
                <ul className="flex flex-col gap-y-5 w-fit  max-w-[420px]">
                    {lists.map((list, idx) => (
                        <li
                            key={`${title}_${idx}`}
                            className="text-base flex items-start gap-2.5"
                        >
                            <div className="w-full max-w-3 pt-1">
                                <Image
                                    src={DoneFilled}
                                    alt="done_filled"
                                    className="w-full "
                                />
                            </div>
                            <p className="text-sm xxl:text-base">{list}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                revers
                text="Дізнатися більше"
                className="max-w-[295px] sm:max-w-[216px] sm:hidden"
            />
        </div>
    );
};
