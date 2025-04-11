import { Button } from '../button';
import { SubTitle } from '../sub-title';

import './style.css';

export const Banner = () => {
  const handleFreeLessonClick = () => {
    const requestData = {
      action: 'freeLesson',
    };
    fetch('https://nuezowew9l.apigw.corezoid.com/getBotLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        window.open(data.tg_link, '_blank');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section className="relative z-[2] flex h-[650px] w-full items-center justify-center overflow-hidden md:h-[808px]">
      <div className="bgg absolute inset-0 z-[2] mix-blend-plus-lighter" />

      {/* Balls */}

      <div className="absolute top-3/5 right-0 z-[2] h-[50%] w-[80%] translate-x-1/2 -translate-y-[80%] rounded-full bg-[#027DFA80] blur-[120px]" />
      <div className="absolute top-1/2 left-0 z-[2] h-[40%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#027DFA80] blur-[120px]" />
      {/* top bottom white shadow */}
      <div className="absolute bottom-0 left-0 z-[2] h-[20%] w-full translate-y-1/2 rounded-full bg-white blur-[40px]" />
      <div className="absolute top-0 left-0 z-[2] h-[25%] w-full -translate-y-1/2 rounded-full bg-white blur-[40px]" />

      <div className="absolute inset-0 z-[5] flex items-center justify-center mix-blend-plus-lighter">
        <div className="absolute top-0 z-[2] w-full rotate-180">
          <video
            src="/grid.mp4"
            autoPlay
            muted
            loop
            className="h-[622px] w-full object-cover md:h-[808px]"
          />
        </div>
      </div>

      <div className="relative z-[10] flex flex-col items-center gap-y-[10px] px-5 sm:max-w-[495px] lg:max-w-[650px] lg:gap-y-[30px] lg:px-0">
        <h1 className="cursor-default text-center text-[clamp(36px,_4vw,_72px)] leading-[100%] font-semibold">
          Твій шлях у світ IT: сучасні курси для майбутніх професіоналів
        </h1>

        <SubTitle
          text="Опановуй IT-професію з нуля! Практичні курси, живі заняття та реальні проєкти допоможуть тобі стати затребуваним спеціалістом."
          className="m-0 mb-[30px] text-center text-[clamp(18px,_4vw,_22px)] lg:mb-[50px] lg:px-2"
        />

        <Button
          text="Переглянути курси"
          className="w-[232px]"
          rotate
          onClick={handleFreeLessonClick}
        />
      </div>
    </section>
  );
};
