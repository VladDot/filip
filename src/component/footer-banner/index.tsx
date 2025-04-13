import { Title } from '../title';
import { Button } from '../button';
import { SubTitle } from '../sub-title';

export const FooterBanner = () => {
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
    <section className="relative z-[2] flex h-[450px] w-full justify-center md:h-[500px]">
      <div className="bgg absolute inset-0 z-[2] mix-blend-plus-lighter" />

      <div className="absolute top-0 left-0 z-[2] h-[10%] w-full -translate-y-[20%] rounded-full bg-white blur-[30px]" />

      <div className="absolute top-0 left-0 z-[2] h-[10%] w-full -translate-y-[20%] rounded-full bg-white blur-[30px]" />

      <div className="absolute inset-0 z-[5] flex items-center justify-center mix-blend-plus-lighter">
        <div className="absolute top-0 z-[2] w-full">
          <video
            loop
            muted
            autoPlay
            src="/grid.mp4"
            className="pointer-events-none h-[450px] w-full object-cover select-none"
          />
        </div>
      </div>
      <div className="relative z-[10] flex flex-col items-center gap-y-[10px] px-5 sm:max-w-[495px] lg:max-w-[713px] lg:gap-y-5 lg:px-0">
        <div className="xxl:-translate-y-[30%] xxl:-translate-x-[80%] absolute top-2/5 left-0 z-[4] h-[clamp(400px,50vw,1000px)] w-[clamp(400px,50vw,1382px)] -translate-x-[50%] -translate-y-[70%] rounded-full bg-[#027DFA80] blur-[120px] md:-translate-x-[70%] lg:-translate-y-[40%] lg:blur-[100px]" />
        <div className="absolute top-2/5 right-0 z-[4] h-[clamp(300px,50vw,1000px)] w-[clamp(400px,50vw,1382px)] translate-x-[60%] -translate-y-[20%] rounded-full bg-[#027DFA80] blur-[80px] md:hidden" />

        <Title
          text="Подивись безкоштовний відео-урок"
          className="m-0 text-center text-[clamp(36px,_4vw,_64px)] leading-[100%] font-semibold lg:px-6 xl:px-0"
        />

        <SubTitle
          text="Дізнайся, що таке Corezoid, як він працює та де застосовується — так тобі буде простіше зрозуміти, чи підходить курс саме тобі"
          className="m-0 mb-[30px] text-center text-[clamp(18px,_4vw,_24px)] lg:mb-[40px] lg:px-2"
        />
        <Button
          text="Переглянути урок"
          className="w-[216px] text-black"
          revers
          onClick={handleFreeLessonClick}
        />
      </div>
    </section>
  );
};
