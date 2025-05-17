'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Time } from '@/assets/img';

import { Title } from '../title';
import { accordionsData } from './mock';
import { Accordion } from '../accordion';

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
    <section id="course_program" className="mb-20 bg-white lg:mb-28 xl:mb-[210px]">
      <div className="relative mx-auto flex w-full max-w-[906px] scroll-mt-[90px] flex-col gap-y-[30px] px-4 lg:gap-y-[60px]">
        <div className="xxl:blur-[200px] xxl:bottom-0 xxl:translate-x-[95%] absolute top-1/5 right-0 z-[4] h-[100vw] w-[90vw] translate-x-[30%] translate-y-[15%] rounded-full bg-[#027DFA80] blur-[100px] md:translate-x-[90%] md:rotate-[13deg] lg:bottom-[10%] lg:blur-[200px]" />

        <div className="xxl:-translate-x-[120%] xxl:blur-[150px] xxl:-translate-y-[60%] absolute top-1/5 left-0 z-[4] h-[clamp(200px,50vw,1000px)] w-[clamp(200px,50vw,1382px)] -translate-x-[90%] -translate-y-[50%] rounded-full bg-[#027DFA80] blur-[100px] md:-translate-y-[30%] lg:-translate-y-[20%] lg:blur-[150px]" />
        <div className="w-full">
          <div className="md:flex md:gap-36">
            <Title
              text="Програма курса "
              className="m-auto mb-2 leading-[100%] md:m-0 md:mb-0 md:flex md:w-full md:flex-1 md:justify-end"
            />
            <div className="flex items-end justify-center gap-3">
              <Image src={Time} alt="time" className="w-8" />
              <span className="text-textBlue cursor-default text-[20px] font-semibold">
                11 занять
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
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

        <div className="bg-blueBg/10 border-blueBorder/20 relative z-[4] flex flex-col gap-y-5 border p-5">
          <h3 className="text-[clamp(22px,_4vw,_32px)] font-semibold">
            Після завершення курсу ти матимеш можливість отримати сертифікат.
          </h3>

          <p className="text-lg font-medium md:text-xl">
            Сертифікат підтвердить вашу кваліфікацію та стане вагомим доповненням до резюме.
          </p>
        </div>
      </div>
    </section>
  );
};
