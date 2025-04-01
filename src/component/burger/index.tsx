"use client";

import { useEffect, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks/outSideClick";

import { getStyles } from "./styles";
import { Button } from "../button";

interface IBurger {
    setIsOpen: (value: boolean) => void;
}

export const Burger = ({ setIsOpen }: IBurger) => {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const { burger, nav, navContent } = getStyles({ isActive });

    useOutsideClick(() => setIsActive(false), ref);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
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
                    <ul className="flex flex-col gap-5 mb-[50px] text-xl">
                        <li>Безкоштовний відео-урок</li>
                        <li>Про курс</li>
                        <li> Контакти</li>
                    </ul>

                    <Button
                        text="Записатися на курс"
                        revers
                        className="sm:bg-blueBg sm:[&>p>span]:text-white"
                        onClick={handleClick}
                    />
                </div>
            </nav>
        </>
    );
};
