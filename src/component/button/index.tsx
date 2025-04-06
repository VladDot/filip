"use client";

import Image from "next/image";

import { ArrowRight } from "@/assets/icon";

import { getStyle } from "./style";

interface IButtonProps {
    text: string;
    revers?: boolean;
    rotate?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Button = ({
    text,
    className,
    revers = false,
    rotate = false,
    onClick,
}: IButtonProps) => {
    const styles = getStyle({ revers, rotate, className });

    // const handleSubmit = () => {
    //     console.log({
    //         click: "submit",
    //         maxW: "change",
    //         forText: "[&_p_span]:",
    //     });
    // };
    return (
        <button
            onClick={onClick}
            className={styles.btn}
        >
            <div className={styles.arrowContainer}>
                <Image
                    src={ArrowRight}
                    alt="arrow"
                    className={styles.arrowImg}
                />
                <Image
                    src={ArrowRight}
                    alt="arrow"
                    color="red"
                    className={styles.arrowImg}
                />
            </div>

            <p className={styles.textContainer}>
                <span className={styles.textStyle}>{text}</span>
                <span className={styles.textStyle}>{text}</span>
            </p>
        </button>
    );
};
