"use client";

import { useRef, useState } from "react";

import { useOutsideClick } from "@/hooks/outSideClick";

import { Input } from "./input";
import { Modal } from "../modal";
import { Button } from "../button";

interface IFeedbackFormProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const FeedbackForm = ({ isOpen, setIsOpen }: IFeedbackFormProps) => {
    const [form, setForm] = useState({
        email: "",
        lastName: "",
        firstName: "",
    });
    const [error, setError] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(() => setIsOpen(false), ref);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(form.email)) {
            setError("Некоректний email");
            return;
        }

        setError(null);
        console.log("Form submitted:", form);
    };
    return (
        <Modal
            isOpen={isOpen}
            setClose={() => setIsOpen(false)}
        >
            <div
                className="space-y-4 p-6 bg-gray-100 rounded-lg shadow max-w-[350px] sm:max-w-[500px]"
                ref={ref}
            >
                <h3 className="text-xl font-medium">
                    Залиште свої дані, щоб наш консультант міг зв’язатися з вами
                </h3>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-[10px] "
                >
                    <Input
                        placeholder="Ваше ім’я"
                        name="firstName"
                        onChange={handleChange}
                        value={form.firstName}
                    />
                    <Input
                        placeholder="Ваше прізвище"
                        name="lastName"
                        onChange={handleChange}
                        value={form.lastName}
                    />
                    <Input
                        placeholder="Введіть свою пошту"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                        type="email"
                        className="mb-[30px]"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
                    <Button
                        text="Подати заявку"
                        className="max-w-[278px] text-center [&>p]:m-auto"
                    />
                </form>
            </div>
        </Modal>
    );
};
{
}
