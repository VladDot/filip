import Link from "next/link";
import Image from "next/image";

import { mockIcon } from "./mocksocial";
import { cn } from "@/utilities";

interface ISocialProps {
    className?: string;
}

export const Social = ({ className }: ISocialProps) => {
    return (
        <>
            <div className={cn("flex gap-x-[30px]", className)}>
                {mockIcon.map(({ path, Icon }, idx) => (
                    <Link
                        key={`social_icon_${idx}`}
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={Icon}
                            alt="social_icon"
                        />
                    </Link>
                ))}
            </div>
        </>
    );
};
