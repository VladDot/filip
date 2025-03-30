"use client";

import { useState } from "react";
import Image from "next/image";

import { Time } from "@/app/assets/img";

import { Title } from "../title";
import { accordionsData } from "./mock";
import { SubTitle } from "../sub-title";
import { Accordion } from "../accordion";

export const CourseProgram = () => {
    const [accordionIndex, setAccordionIndex] = useState<number | null>(null);

    const toggleAccordion = (number: number) => {
        if (accordionIndex === number) {
            setAccordionIndex(null);

            return;
        }

        setAccordionIndex(number);
    };
    return (
        <div className="m-auto flex w-full max-w-[874px] flex-col gap-y-[30px] lg:gap-y-[60px] pb-20 md:pb-24 lg:pb-28 xl:pb-[120px]">
            <div className="max-w-[651px] m-auto">
                <SubTitle
                    text="Дізнайся програму вже зараз "
                    className="mb-2 "
                />
                <div className=" md:flex md:justify-between md:gap-[124px]">
                    <Title
                        text="Програма курса "
                        className="leading-[100%] mb-2 md:mb-0"
                    />
                    <div className="flex gap-3 items-end justify-center">
                        <Image
                            src={Time}
                            alt="time"
                            className="w-8"
                        />
                        <span className="text-textBlue font-semibold">
                            20 занять
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[10px] lg:gap-[20px] ">
                {accordionsData.map((card, index) => (
                    <Accordion
                        key={index}
                        title={card.title}
                        description={card.text}
                        isOpen={accordionIndex === index}
                        onClick={() => toggleAccordion(index)}
                    />
                ))}
            </div>

            <div className="bg-blueBg/10 border border-blueBorder/20 p-5 flex flex-col gap-y-5">
                <h3 className="text-[clamp(22px,_4vw,_32px)] font-semibold">
                    Після завершення курсу — ти отримаєш сертифікат
                </h3>

                <p className="text-lg md:text-xl font-medium">
                    Сертифікат підтвердить вашу кваліфікацію та стане вагомим
                    доповненням до резюме, допомагаючи виділитися серед
                    кандидатів.
                </p>
            </div>
        </div>
    );
};
