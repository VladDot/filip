import React from "react";

import { cn } from "@/utilities";

interface InputProps {
    name: string;
    type?: string;
    value: string;
    error?: string;
    className?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    name,
    type = "text",
    value,
    error,
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
                className={cn(
                    "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    {
                        "border-red-500 bg-red-100": error,
                    }
                )}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};
