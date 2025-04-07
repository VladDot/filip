import { Button } from "../button";
import { SubTitle } from "../sub-title";

import "./style.css";

export const Banner = () => {
    return (
        <div className="relative h-[650px] w-full md:h-[808px] overflow-hidden z-[2] flex items-center justify-center">

                <div className='absolute inset-0 z-[2] bgg mix-blend-plus-lighter '/>
                
                {/* Balls */}
                
                <div className='absolute z-[2] w-[80%] h-[50%] rounded-full bg-[#027DFA80] blur-[120px] right-0  top-3/5 -translate-y-[80%] translate-x-1/2'/>
                 <div className='absolute z-[2] w-[60%] h-[40%] rounded-full bg-[#027DFA80] blur-[120px] left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'/>
                 {/* top bottom white shadow */}
                 <div className='absolute z-[2] w-full h-[20%] bg-white rounded-full blur-[40px] translate-y-1/2 bottom-0 left-0 '/>
                 <div className='absolute z-[2] w-full h-[25%] bg-white rounded-full blur-[40px] -translate-y-1/2 top-0 left-0 '/>



            <div className="absolute inset-0 flex justify-center items-center mix-blend-plus-lighter z-[5]">
                <div className=" absolute z-[2] rotate-180 top-0 w-full ">
                    <video src="/grid.mp4" autoPlay muted loop className="w-full h-[622px] md:h-[808px] object-cover" />
                </div>           
            </div>



             <div className="relative z-[10] flex flex-col gap-y-[10px] lg:gap-y-[30px] px-5 items-center sm:max-w-[495px] lg:px-0 lg:max-w-[650px]">
                    <h1 className="text-center text-[clamp(36px,_4vw,_72px)] leading-[100%] font-semibold">
                        Твій шлях у світ IT: сучасні курси для майбутніх
                        професіоналів
                    </h1>
                    <SubTitle
                        text="Опановуй IT-професію з нуля! Практичні курси, живі заняття та реальні проєкти допоможуть 
тобі стати затребуваним спеціалістом."
                        className="m-0 mb-[30px] lg:mb-[50px] text-center text-[clamp(18px,_4vw,_22px)] lg:px-2"
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
