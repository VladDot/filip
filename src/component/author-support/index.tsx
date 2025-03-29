import { Cards } from "./cards";
import { Title } from "../title";
import { support } from "./mock";
import { SubTitle } from "../sub-title";

export const AuthorSupport = () => {
    return (
        <div className="lg:w-[1000px] m-auto xxl:w-[1320px] mb-20 md:mb-28 xxl:mb-40">
            <div className=" m-auto md:mb-[40px] text-center xxl:mb-16 mb-[42px]">
                <SubTitle text="Ти можеш мені довіритись" />
                <Title text="Чим я можу тобі допомогти?" />
            </div>

            <Cards support={support} />
        </div>
    );
};
