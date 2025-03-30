"use client";

import Image from "next/image";

import { ArrowRight } from "@/app/assets/icon";

import { getStyle } from "./style";

interface IButtonProps {
    text: string;
    revers?: boolean;
    rotate?: boolean;
    className?: string;
}

export const Button = ({
    text,
    className,
    revers = false,
    rotate = false,
}: IButtonProps) => {
    const styles = getStyle({ revers, rotate, className });

    const handleSubmit = () => {
        console.log({
            click: "submit",
            maxW: "change",
            forText: "[&_p_span]:",
        });
    };
    return (
        <button
            onClick={handleSubmit}
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
