import React from "react";

import { cn } from "@/utilities";

interface InputProps {
    name: string;
    type?: string;
    value: string;
    className?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    name,
    type = "text",
    value,
    onChange,
    className,
    placeholder,
}: InputProps) => {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};
