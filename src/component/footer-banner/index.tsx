import { Button } from "../button";
import { SubTitle } from "../sub-title";
import { Title } from "../title";

export const FooterBanner = () => {
  return (
    <div className="relative h-[450px] w-full md:h-[500px] z-[2] flex justify-center ">

            <div className='absolute inset-0 z-[2] bgg mix-blend-plus-lighter '/>
            
            {/* Balls */}
            
           

          

             {/* top bottom white shadow */}
             <div className='absolute z-[3] w-full h-[10%] bg-white rounded-full blur-[30px] -translate-y-[20%]  top-0 left-0 '/>



        <div className="absolute inset-0 flex justify-center items-center mix-blend-plus-lighter z-[3]">
            <div className=" absolute z-[2] rotate-180 top-0 w-full ">
                <video src="/grid.mp4" autoPlay muted loop className="w-full h-[500px] md:h-[500px] object-cover rotate-180" />
            </div>           
        </div>

         <div className="relative z-[10] flex flex-col gap-y-[10px] lg:gap-y-5 px-5 items-center sm:max-w-[495px] lg:px-0 lg:max-w-[712px] pt-5">
         <div className='absolute z-[4] w-[86.5vw] h-[98vw] rounded-full bg-[#027DFA80] blur-[100px] right-0 translate-x-[83%] bottom-0 translate-y-[6%] rotate-[20deg] lg:blur-[300px]   md:rotate-[13deg] md:translate-x-[90%] lg:bottom-[20%] xxl:translate-x-[120%]  xxl:-translate-y-[10%]'/>

         <div className='absolute z-[4] w-[clamp(400px,50vw,1382px)] h-[clamp(300px,50vw,1000px)] rounded-full bg-[#027DFA80] blur-[80px] left-0 top-2/5 -translate-y-[70%] -translate-x-[40%] lg:-translate-y-[40%] md:-translate-x-[70%]  lg:blur-[100px] xxl:-translate-y-[30%] xxl:-translate-x-[80%] '/>

          <Title text="Запишись на перше безкоштовне заняття" className="text-center text-[clamp(36px,_4vw,_64px)] leading-[100%] font-semibold m-0"/>
                
                <SubTitle
                    text="Спробуй навчання без ризиків! Отримай перший урок безкоштовно, познайомся з викладачем і методикою, щоб впевнено зробити крок у світ IT."
                    className="m-0 mb-[30px] lg:mb-[40px] text-center text-[clamp(18px,_4vw,_24px)] lg:px-2"
                />
                <Button
                    text="Переглянути курси"
                    className="w-[232px]"
                    rotate
                />
            </div>
    </div>
);
};
