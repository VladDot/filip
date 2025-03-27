import { cn } from "@/utilities";

interface ISubTitleProps {
    text: string;
    className?: string;
}

export const SubTitle = ({ text, className }: ISubTitleProps) => {
    return (
        <span
            className={cn(
                "text-[clamp(16px,_4vw,_20px)] w-fit m-auto font-normal",
                className
            )}
        >
            {text}
        </span>
    );
};
