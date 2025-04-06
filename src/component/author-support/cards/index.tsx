"use client";

import Link from "next/link";
import Image from "next/image";

import { Filipp } from "@/assets/img";
import { useWindowWidth } from "@/hooks/useWidth";

import { Card } from "./card";
import { ISupport } from "../mock";

interface ICardsProps {
    support: ISupport[];
}

export const Cards = ({ support }: ICardsProps) => {
    const width = useWindowWidth();

    return (
        <>
            {width >= 640 && (
                <div className="flex gap-5 items-center xxl:flex-row  xxl:items-start gap-y-5 w-full xxl:[&>div:last-child]:ml-auto xxl:[&>*:first-child>*:last-child>ul>span]:-left-30 [&>*:last-child>*:first-child>ul>span]:top-[25%] ">
                    <div className="flex flex-col gap-y-3 items-center xxl:gap-[158px] xxl:[&>div:last-child]:ml-[111px] ">
                        <Card
                            text={support[0].text}
                            title={support[0].title}
                            decor={support[0].decor}
                        />

                        {width < 1440 && (
                            <div className="bg-white border border-[#E0F0FF] p-4  w-fit sm:w-[240px] xxl:w-[300px] rounded-[2px] xxl:-translate-y-6 animate-[var(--animate-swing)]">
                                <Image
                                    src={Filipp}
                                    alt="filipp"
                                    className="rotate-[4.35deg] mb-1 rounded-[2px] w-full "
                                />
                                <div className="flex flex-col w-fit">
                                    <span>Serhii Filipp</span>
                                    <Link
                                        href={""}
                                        className="text-textBlue"
                                    >
                                        @SergeyPC
                                    </Link>
                                </div>
                            </div>
                        )}
                        <Card
                            text={support[2].text}
                            title={support[2].title}
                            decor={support[2].decor}
                        />
                    </div>
                    {width >= 1440 && (
                        <div className="bg-white border border-[#E0F0FF] p-4  w-fit sm:w-[240px] xxl:w-[300px] rounded-[2px] xxl:-translate-y-6 animate-[var(--animate-swing)]">
                            <Image
                                src={Filipp}
                                alt="filipp"
                                className="rotate-[4.35deg] mb-1 rounded-[2px] w-full "
                            />
                            <div className="flex flex-col w-fit">
                                <span>Serhii Filipp</span>
                                <Link
                                    href={""}
                                    className="text-textBlue"
                                >
                                    @SergeyPC
                                </Link>
                            </div>
                        </div>
                    )}
                    <div className="[&>div>ul]:list-disc [&>div>ul]:pl-7 ">
                        {support
                            .filter((_, index) => index === 1)
                            .map(({ title, decor, text }, idx) => (
                                <Card
                                    text={text}
                                    title={title}
                                    decor={decor}
                                    key={`${title}_${idx}`}
                                />
                            ))}
                    </div>
                </div>
            )}

            {width < 640 && (
                <div className="flex flex-col gap-[30px] w-full [&>*:last-child>*:first-child>ul>span]:left-[10px] pt-5 overflow-hidden">
                    {support
                        .filter((_, index) => index === 0)
                        .map(({ title, decor, text }, idx) => (
                            <Card
                                text={text}
                                title={title}
                                decor={decor}
                                key={`${title}_${idx}`}
                            />
                        ))}
                    <div className="flex justify-center  ">
                        <div className="bg-white border border-[#E0F0FF] p-4 rounded-[2px] animate-[var(--animate-swing)] ">
                            <Image
                                src={Filipp}
                                alt="filipp"
                                className="rotate-[4.35deg] mb-1 rounded-[2px]"
                            />
                            <div className="flex flex-col">
                                <span>Serhii Filipp</span>
                                <Link
                                    href={""}
                                    className="text-textBlue"
                                >
                                    @SergeyPC
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="[&>div:first-child>ul]:list-disc [&>div:first-child>ul]:pl-7 flex flex-col gap-y-[30px]">
                        {support
                            .filter((_, index) => index !== 0)
                            .map(({ title, decor, text }, idx) => (
                                <Card
                                    text={text}
                                    title={title}
                                    decor={decor}
                                    key={`${title}_${idx}`}
                                />
                            ))}
                    </div>
                </div>
            )}
        </>
    );
};
