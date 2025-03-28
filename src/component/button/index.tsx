"use client";

import Image from "next/image";

import { ArrowRight } from "@/assets/icon";
import { getStyle } from "./style";

interface IButtonProps {
    text: string;
    revers?: boolean;
    rotate?: boolean;
}

export const Button = ({
    text,
    revers = false,
    rotate = false,
}: IButtonProps) => {
    const styles = getStyle({ revers, rotate });

    const handleSubmit = () => {
        console.log("submit");
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
