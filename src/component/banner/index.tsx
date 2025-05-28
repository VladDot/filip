import { scrollToSection } from '@/helpers';

import { Button } from '../button';
import { SubTitle } from '../sub-title';

import './style.css';

export const Banner = () => {
  return (
    <section className="relative z-[2] flex h-[650px] w-full items-center justify-center overflow-hidden md:h-[808px]">
      <div className="bgg absolute inset-0 z-[2] mix-blend-plus-lighter" />

      <div className="absolute top-3/5 right-0 z-[3] h-[70%] w-[80%] translate-x-[60%] -translate-y-[80%] rounded-full bg-[#027DFA80] blur-[140px]" />
      <div className="absolute top-1/2 left-0 z-[3] h-[50%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#027DFA80] blur-[140px]" />

      <div className="absolute bottom-0 left-0 z-[2] h-[20%] w-full translate-y-1/2 rounded-full bg-white blur-[40px]" />
      <div className="absolute top-0 left-0 z-[2] h-[25%] w-full -translate-y-1/2 rounded-full bg-white blur-[40px]" />

      <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center mix-blend-plus-lighter select-none">
        <div className="pointer-events-none absolute top-0 z-[2] w-full rotate-180 select-none">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            src="/grid.mp4"
            className="pointer-events-none h-[622px] w-full object-cover select-none md:h-[808px]"
          />
        </div>
      </div>

      <div className="relative z-[10] flex flex-col items-center gap-y-[10px] px-5 sm:max-w-[500px] lg:max-w-[700px] lg:gap-y-[30px] lg:px-0">
        <h1 className="xxl:text-[56px] cursor-default text-center text-[clamp(36px,_4vw,_56px)] leading-[100%] font-semibold">
          Опануй професію <br /> Corezoid-розробника <br /> з нуля
        </h1>

        <SubTitle
          text="Відеоуроки, реальні приклади та практика допоможуть тобі навчитись створювати робочі процеси в Corezoid, працювати з API та використовувати JavaScript"
          className="m-0 mb-5 text-center text-[clamp(18px,_4vw,_22px)] lg:max-w-[700px] lg:px-2"
        />

        <Button
          text="Переглянути варіанти навчання"
          className="w-fit gap-3"
          rotate
          onClick={() => scrollToSection('#learning_options')}
        />
      </div>
    </section>
  );
};
