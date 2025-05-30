import { cardCareer } from '@/mock-data';

import { Title } from '../title';
import { CardsCareer } from './cards-career';

export const CareerDevelopment = () => {
  return (
    <section className="xxl:mb-[130px] relative mb-20 md:mb-[100px]">
      <div className="m-auto mb-[30px] text-center sm:max-w-[650px] md:mb-[60px]">
        <Title
          text="Як розвивається Corezoid-спеціаліст"
          className="max-w-[300px] leading-[100%] sm:max-w-[500px]"
        />
      </div>

      <div className="xxl:blur-[200px] xxl:-translate-y-[20%] xxl:translate-x-[80%] absolute top-0 right-0 z-[4] h-[80vw] w-[90vw] translate-x-[30%] translate-y-[30%] rounded-full bg-[#027DFA80] blur-[100px] sm:translate-x-[50%] sm:translate-y-[10%] sm:blur-[180px] lg:translate-x-[70%] lg:blur-[200px]" />

      <div className="xxl:-translate-x-[60%] xxl:blur-[150px] xxl:-translate-y-[40%] absolute top-2/5 left-0 z-[4] h-[clamp(200px,50vw,1000px)] w-[clamp(200px,50vw,1382px)] -translate-x-[70%] -translate-y-[50%] rounded-full bg-[#027DFA80] blur-[100px] md:-translate-y-[30%] lg:-translate-x-[60%] lg:-translate-y-[20%] lg:blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center overflow-hidden mix-blend-plus-lighter select-none">
        <div className="xxl:scale-100 pointer-events-none absolute top-[60px] left-1/2 z-[2] h-[1000px] w-[1200px] max-w-[1400px] -translate-x-1/2 select-none sm:top-[40px] md:top-1/2 md:h-full md:w-full md:-translate-y-2/5 md:scale-125">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            src="/animSquare.mp4"
            className="xxl:object-cover pointer-events-none h-full w-full rotate-90 select-none md:rotate-0"
          />
        </div>
      </div>

      <div className="[&>div>div:first-child>div]:text-textBlue flex justify-center [&>div>div:first-child>div]:bg-white [&>div>div:first-child>h3]:text-black">
        <CardsCareer cardCareer={cardCareer} />
      </div>
    </section>
  );
};
