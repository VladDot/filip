import { cn } from "@/utilities";

interface IGetStyles {
    isOpen: boolean;
}

export const getStyles = ({ isOpen }: IGetStyles) => ({
    header: "flex justify-between items-center border rounded-lg p-2 md:p-4 cursor-pointer bg-white shadow-md transition-all duration-300 ",
    arrowWrapper: "transition-transform",
    arrow: "inline-block transition-transform duration-300",
    content: cn(
        "overflow-hidden transition-all duration-300 max-h-0 opacity-0 mt-2",
        isOpen && "max-h-96 opacity-100"
    ),
});
