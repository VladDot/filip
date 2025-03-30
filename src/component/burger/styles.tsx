import { cn } from "@/utilities";

export const getStyles = ({ isActive }: { isActive?: boolean }) => ({
    burger: cn("nav-toggle relative z-[999] ", {
        opened: isActive,
    }),
    nav: cn(
        "fixed z-[998] top-0 right-0 p-[100px_32px] w-screen bg-burger tablet:bg-burger-tablet transition-all duration-300  bg-white",
        {
            " opacity-100 h-full h-screen": isActive,
            "-translate-y-full opacity-0": !isActive,
        }
    ),
    navContent: cn("", {
        " opacity-100": isActive,
        " opacity-20": !isActive,
    }),
});
