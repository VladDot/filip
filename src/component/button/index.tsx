"use client";

import { Arrow } from "../arrow";
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

    return (
        <button
            onClick={onClick}
            className={styles.btn}
        >
            <div className={styles.arrowContainer}>
                <Arrow   
                    className={styles.arrowImg}/>
                <Arrow   
                    className={styles.arrowImg}/>
            </div>

            <p className={styles.textContainer}>
                <span className={styles.textStyle}>{text}</span>
                <span className={styles.textStyle}>{text}</span>
            </p>
        </button>
    );
};
