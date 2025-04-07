import Link from "next/link";

import { cn } from "@/utilities";
import { SVGTelegram, SVGViber,SVGInstagram,SVGWhatsapp } from "./svg-icon";

interface ISocialProps {
    className?: string;
}

export const Social = ({ className }: ISocialProps) => {
    return (
            <div className={cn("flex gap-x-[30px]", className)}>
                    <Link
                        href="https://t.me/SergeyPC"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVGTelegram/> 
                    </Link>
                    <Link
                        href="viber://chat?number=+380935441781"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVGViber/> 
                    </Link>
                    <Link
                        href="https://wa.me/380935441781"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVGWhatsapp/> 
                    </Link>
                    <Link
                        href="https://www.instagram.com/serhii.filipp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVGInstagram/> 
                    </Link>
            </div>
    );
};
