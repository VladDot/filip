import { Cards } from './cards';
import { Title } from '../title';
import { support } from './mock';
import { SubTitle } from '../sub-title';

export const AuthorSupport = () => {
  return (
    <section className="xxl:w-[1320px] relative z-[4] m-auto mb-20 md:mb-28 lg:mb-[120px] lg:w-[1000px]">
      <div className="xxl:translate-x-[95%] xxl:-translate-y-[20%] absolute top-0 right-0 z-[4] h-[98vw] w-[86.5vw] translate-x-[83%] translate-y-[90%] rounded-full bg-[#027DFA80] blur-[100px] sm:translate-y-[30%] md:translate-x-[90%] lg:bottom-[20%] lg:translate-y-[0%] lg:blur-[180px]" />

      <div className="xxl:-translate-y-[30%] xxl:-translate-x-[80%] absolute top-1/2 left-0 z-[4] h-[clamp(300px,50vw,1000px)] w-[clamp(400px,50vw,1382px)] -translate-x-[60%] translate-y-[80%] rounded-full bg-[#027DFA80] blur-[120px] md:-translate-x-[60%] md:translate-y-[50%] lg:translate-y-[30%] lg:blur-[180px]" />

      <div className="absolute bottom-[-20px] z-[1] h-[25%] w-screen translate-y-[50%] rounded-full bg-white blur-[40px] lg:left-[-40px] lg:h-[35%]" />
      <div className="xxl:h-[70%] xxl:translate-y-[0%] absolute top-0 z-[1] h-[15%] w-screen translate-y-[50%] rounded-full bg-white blur-[40px] lg:left-[-40px] lg:h-[50%] lg:translate-y-[20%]" />

      <div className="xxl:mb-16 relative z-[4] mb-[20px] w-[335px] text-center sm:m-auto md:mb-[40px]">
        <SubTitle text="Ти можеш мені довіритись" />
        <Title text="Чим я можу тобі допомогти?" />
      </div>

      <Cards support={support} />
    </section>
  );
};
