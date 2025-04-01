"use client";

import { useEffect } from "react";

import { Portal } from "../portal";
import { ChildrenProps } from "../types";

interface IModalProps {
    isOpen: boolean;
    setClose: () => void;
}

export const Modal = ({ isOpen, children }: ChildrenProps<IModalProps>) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, [isOpen]);

    return (
        <Portal opened={isOpen}>
            <div className="fixed z-10 inset-0 bg-slate-400 opacity-50 " />

            <div className="fixed z-20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
                {children}
            </div>
        </Portal>
    );
};
