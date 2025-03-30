"use client";

import Image from "next/image";

import { Logo } from "@/app/assets/img";
import { useWindowWidth } from "@/hooks/useWidth";

import { Burger } from "../burger";
import { Button } from "../button";

interface IHeaderProps {
    sd?: string;
}

export const Header = ({}: IHeaderProps) => {
    const width = useWindowWidth();
    return (
        <header className=" z-[2] w-full px-5 lg:px-[60px] lg:py-5 py-[18px] fixed bg-[#FFFFFF/10] backdrop-blur-[4px] lg:backdrop-blur-[24px] ">
            <div className="flex items-center justify-between gap-8 w-full">
                {width >= 1024 && (
                    <div className="flex justify-between w-full">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="z-[999] "
                        />
                        <div className="flex gap-7 items-center">
                            <ul className="flex flex-col md:flex-row gap-5 mb-[50px] md:mb-0 text-xl ">
                                <li>Безкоштовний відео-урок</li>
                                <li>Про курс</li>
                                <li> Контакти</li>
                            </ul>
                            <Button
                                text="Записатися на курс"
                                className="w-[220px] px-3 "
                            />
                        </div>
                    </div>
                )}

                {width < 1024 && (
                    <div className="flex items-center justify-between  w-full ">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="z-[999]"
                        />
                        <Burger />
                    </div>
                )}
            </div>
        </header>
    );
};
