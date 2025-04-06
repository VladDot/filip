"use client";

import { useState } from "react";
import Image from "next/image";

import { Logo } from "@/assets/img";

import { Burger } from "../burger";
import { Button } from "../button";
import { FeedbackForm } from "../feedback-form";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleFreeLessonClick = () => {
        const requestData = {
            action: "freeLesson",
        };
        fetch("https://nuezowew9l.apigw.corezoid.com/getBotLink", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                window.open(data.tg_link, "_blank");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <header className=" z-[999] w-full px-5 lg:px-[60px] lg:py-5 py-[18px] fixed backdrop-blur-[4px]">
            <div className="absolute top-0 left-0 h-full w-full z-[-1] " />
            <div className="flex items-center justify-between gap-8 w-full relative z-[2] mx-auto max-w-[1440px]">
                <div className="hidden justify-between w-full min-[1025px]:flex">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="z-[999] "
                    />
                    <div className="flex gap-7 items-center ">
                        <ul className="flex flex-col md:flex-row gap-5 mb-[50px] md:mb-0 text-xl ">
                            <li
                                onClick={handleFreeLessonClick}
                                className="hover:text-textBlue transition-all ease-in-out duration-150 cursor-pointer"
                            >
                                Безкоштовний відео-урок
                            </li>
                            <li className="hover:text-textBlue transition-all ease-in-out duration-150 cursor-pointer">
                                Про курс
                            </li>
                            <li className="hover:text-textBlue transition-all ease-in-out duration-150 cursor-pointer">
                                Контакти
                            </li>
                        </ul>
                        <Button
                            text="Записатися на курс"
                            className="w-[220px] px-3 "
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                    <FeedbackForm
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>

                <div className="flex items-center justify-between w-full min-[1025px]:hidden">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="z-[999]"
                    />
                    <Burger setIsOpen={() => setIsOpen(true)} />
                    <FeedbackForm
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
            </div>
        </header>
    );
};
