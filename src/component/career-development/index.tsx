import { Title } from "../title";
import { cardCareer } from "./mock";
import { SubTitle } from "../sub-title";
import { CardsCareer } from "./cards-career";

export const CareerDevelopment = () => {
    return (
        <section className="mb-20 lg:mb-[120px] xxl:mb-[170px] relative z-[4]">
<div className='absolute z-[1] h-[15%]  lg:h-[45%] bg-white rounded-full blur-[40px] lg:translate-y-[90%] bottom-0 translate-y-[60%] lg:bottom-0 w-full'/>

            <div className='absolute z-[4] w-[90vw] h-[80vw] rounded-full bg-[#027DFA80] blur-[100px] right-0 translate-x-[30%] top-0 translate-y-[30%] lg:blur-[200px]  xxl:blur-[200px]   sm:translate-x-[50%]  sm:translate-y-[10%] sm:blur-[180px] lg:translate-x-[70%] xxl:-translate-y-[20%] xxl:translate-x-[80%]'/>

<div className='absolute z-[4] w-[clamp(200px,50vw,1382px)] h-[clamp(200px,50vw,1000px)] rounded-full bg-[#027DFA80] blur-[100px] left-0 top-2/5 -translate-y-[50%] -translate-x-[70%]  md:-translate-y-[30%] lg:blur-[150px] lg:-translate-y-[20%] xxl:-translate-x-[60%] xxl:blur-[150px]  xxl:-translate-y-[40%] lg:-translate-x-[60%]'/>
            <div className=" max-w-[500px] md:mb-[60px] lg:mb-20 xxl:mb-[100px] m-auto text-center mb-[43px] ">
                <SubTitle text="Мрія, яка стане реальністю" />
                <Title
                    text="Кар'єрне зростання IT-фахівця"
                    className="leading-[100%]"
                />
            </div>
            <div className="flex bg-white justify-center [&>div>div:first-child>h3]:text-black [&>div>div:first-child>div]:bg-white [&>div>div:first-child>div]:text-textBlue">
                <CardsCareer cardCareer={cardCareer} />
            </div>
        </section>
    );
};
