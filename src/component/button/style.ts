import { cn } from "@/utilities";
interface IStyleProps {
    revers: boolean;
    rotate: boolean;
}

export const getStyle = ({ revers, rotate }: IStyleProps) => ({
    btn: cn(
        "pl-3 py-3 pr-6 border-blueBorder border-[1px] rounded-xs bg-transparent flex gap-x-[10px] hover:bg-blueBg ease-in-out duration-300 group/item",
        revers && "pl-6 pr-3 flex-row-reverse"
    ),
    arrowContainer: cn(
        "max-w-6 overflow-hidden flex items-center",
        rotate && "rotate-90"
    ),
    arrowImg: cn(
        "min-w-6 ease-in-out duration-300",
        rotate
            ? "-translate-x-6 group-hover/item:translate-x-0"
            : "group-hover/item:-translate-x-6"
    ),
    textContainer:
        "font-normal overflow-hidden h-[22px] text-[18px] text-darkText",
    textStyle:
        "block text-[18px] -translate-y-[2px] group-hover/item:text-white group-hover/item:-translate-y-[30px] ease-in-out duration-300",
});
