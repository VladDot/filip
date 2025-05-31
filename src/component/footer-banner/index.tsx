'use client';

import { Title } from '../title';
import { Button } from '../button';
import { SubTitle } from '../sub-title';

export const FooterBanner = () => {
  const handleFreeLessonClick = async () => {
    const requestData = {
      action: 'freeLesson',
    };

    const newWindow = window.open('', '_blank');

    await fetch('https://nuezowew9l.apigw.corezoid.com/getBotLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (newWindow) {
          newWindow.location.href = data.tg_link;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
          if (newWindow) {
            newWindow.close();
          }
      });
  };

  return (
    <section className="relative z-[2] flex h-[450px] w-full justify-center md:h-[500px]">
      <div className="bgg absolute inset-0 z-[2] mix-blend-plus-lighter" />

      <div className="absolute top-0 left-0 z-[2] h-[10%] w-full -translate-y-[20%] rounded-full bg-white blur-[30px]" />

      <div className="absolute top-0 left-0 z-[2] h-[10%] w-full -translate-y-[20%] rounded-full bg-white blur-[30px]" />

      <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center mix-blend-plus-lighter select-none">
        <div className="pointer-events-none absolute top-0 z-[2] w-full select-none">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            src="/grid.mp4"
            className="pointer-events-none h-[450px] w-full object-cover select-none"
          />
        </div>
      </div>
      <div className="xxl:max-w-[800px] relative z-[10] flex flex-col items-center gap-y-[10px] px-5 sm:max-w-[550px] lg:max-w-[715px] lg:gap-y-5 lg:px-0">
        <div className="xxl:-translate-y-[30%] xxl:-translate-x-[80%] absolute top-2/5 left-0 z-[4] h-[clamp(400px,50vw,1000px)] w-[clamp(400px,50vw,1382px)] -translate-x-[50%] -translate-y-[70%] rounded-full bg-[#027DFA80] blur-[120px] md:-translate-x-[70%] lg:-translate-y-[40%] lg:blur-[100px]" />
        <div className="absolute top-2/5 right-0 z-[4] h-[clamp(300px,50vw,1000px)] w-[clamp(400px,50vw,1382px)] translate-x-[60%] -translate-y-[20%] rounded-full bg-[#027DFA80] blur-[80px] md:hidden" />

        <Title
          text="Подивися безкоштовний відеоурок"
          className="m-0 text-center text-[clamp(36px,_4vw,_64px)] leading-[100%] font-semibold lg:px-6 xl:px-0"
        />

        <SubTitle
          text="Дізнайся, що таке Corezoid, як він працює та де застосовується. Переконайся, що цей курс буде тобі корисним"
          className="m-0 mb-[30px] text-center text-[clamp(18px,_4vw,_24px)] lg:mb-[40px] lg:px-2"
        />
        <Button
          revers
          text="Переглянути урок"
          onClick={handleFreeLessonClick}
          className="relative z-[999] w-[216px]"
        />
      </div>
    </section>
  );
};
