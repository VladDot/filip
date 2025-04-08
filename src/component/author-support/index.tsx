import { Cards } from "./cards";
import { Title } from "../title";
import { support } from "./mock";
import { SubTitle } from "../sub-title";

export const AuthorSupport = () => {
    return (
        <section className="lg:w-[1000px] m-auto xxl:w-[1320px] mb-20 md:mb-28 xxl:mb-40 relative z-[4]">
            <div className='absolute z-[4] w-[86.5vw] h-[98vw] rounded-full bg-[#027DFA80] blur-[100px] right-0 translate-x-[83%] top-0  translate-y-[90%] sm:translate-y-[30%] lg:blur-[180px] lg:translate-y-[0%]  md:translate-x-[90%] lg:bottom-[20%] xxl:translate-x-[95%]  xxl:-translate-y-[20%] '/>

<div className='absolute z-[4] w-[clamp(400px,50vw,1382px)] h-[clamp(300px,50vw,1000px)] rounded-full bg-[#027DFA80] blur-[120px] left-0 top-1/2 translate-y-[80%] -translate-x-[60%] lg:translate-y-[30%] md:-translate-x-[60%]   xxl:-translate-y-[30%] xxl:-translate-x-[80%] md:translate-y-[50%] lg:blur-[180px]  '/>

<div className='absolute z-[1] h-[25%] lg:h-[35%] bg-white rounded-full blur-[40px] translate-y-[50%]  bottom-[-20px] lg:left-[-40px] w-screen'/>
<div className='absolute z-[1] h-[15%] lg:h-[50%] bg-white rounded-full blur-[40px] translate-y-[50%] top-0 lg:left-[-40px] w-screen lg:translate-y-[20%] xxl:h-[70%] xxl:translate-y-[0%]' />

            <div className=" m-auto md:mb-[40px] text-center xxl:mb-16 mb-[20px] relative z-[4]">
                <SubTitle text="Ти можеш мені довіритись" />
                <Title text="Чим я можу тобі допомогти?" />
            </div>

            <Cards support={support} />
        </section>
    );
};
