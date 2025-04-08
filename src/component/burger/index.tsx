"use client";

import { useEffect, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks/outSideClick";

import { getStyles } from "./styles";
import { Button } from "../button";


interface IBurger {
    setIsOpen: (value: boolean) => void;
    onClick: () => void
}

export const Burger = ({ setIsOpen,onClick }: IBurger) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const { burger, nav, navContent } = getStyles({ isActive });

    useOutsideClick(() => setIsActive(false), ref);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden ";
            document.body.style.paddingRight = "14px"
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = ""
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = ""
        };
    }, [isActive]);

    const handleClick = () => {
        setIsActive(!isActive);
        setIsOpen(true);
    };

    return (
        <>
            <button
                className={burger}
                onClick={() => setIsActive(!isActive)}
            >
                <span className="bar-top"></span>
                <span className="bar-mid"></span>
                <span className="bar-bot"></span>
            </button>

            <nav
                className={nav}
                ref={ref}
            >
                <div className={navContent}>
                    <ul className="flex flex-col w-fit gap-5 mb-[50px] text-xl">
                        <li onClick={onClick} className="hover:text-textBlue transition-all ease-in-out duration-150 cursor-pointer">Безкоштовний відео-урок</li>
                        <li className="hover:text-textBlue transition-all ease-in-out duration-150 cursor-pointer">Про курс</li>
                        <li className="hover:text-textBlue transition-all ease-in-out duration-150 cursor-pointer"> Контакти</li>
                    </ul>

                    <Button
                        text="Записатися на курс"
                        revers
                        className="sm:bg-blueBg sm:[&_*]:fill-white  sm:[&_*]:text-white max-w-[335px]"
                        onClick={handleClick}
                    />
                </div>
            </nav>
        </>
    );
};
