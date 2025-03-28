import { cn } from "@/utilities";

interface ITitleProps {
    text: string;
    className?: string;
}

export const Title = ({ text, className }: ITitleProps) => {
    return (
        <h3
            className={cn(
                "text-[clamp(28px,_4vw,_48px)] w-fit m-auto font-[600] ",
                className
            )}
        >
            {text}
        </h3>
    );
};
