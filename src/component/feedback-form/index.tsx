'use client';

import { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks';

import { Input } from './input';
import { Modal } from '../modal';
import { Button } from '../button';

interface IFeedbackFormProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const FeedbackForm = ({ isOpen, setIsOpen }: IFeedbackFormProps) => {
  const [form, setForm] = useState({
    email: '',
    lastName: '',
    firstName: '',
  });
  const [error, setError] = useState({
    email: '',
    lastName: '',
    firstName: '',
  });
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(() => setIsOpen(false), ref);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setError((prevError) => ({
      ...prevError,
      [e.target.name]: '',
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newError = {
      firstName: form.firstName ? '' : "Це обов'язкове поле",
      lastName: form.lastName ? '' : "Це обов'язкове поле",
      email: form.email ? '' : "Це обов'язкове поле",
    };

    if (form.email && !validateEmail(form.email)) {
      newError.email = 'Некоректний email';
    }

    setError(newError);

    const isValid = Object.values(newError).every((err) => err === '');
    if (isValid) {
      setError({ email: '', lastName: '', firstName: '' });

      const formData = {
        name: form.firstName,
        surname: form.lastName,
        email: form.email,
      };

      const updatedFormData = {
        ...formData,
        action: 'telegramTraining',
      };

      fetch('https://nuezowew9l.apigw.corezoid.com/getBotLink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          window.open(data.tg_link, '_blank');

          setForm({
            email: '',
            lastName: '',
            firstName: '',
          });

          setIsOpen(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <Modal isOpen={isOpen} setClose={() => setIsOpen(false)}>
      <div ref={ref} className="max-w-[325px] space-y-4 rounded-[2px] bg-gray-100 p-6 shadow">
        <h3 className="mb-6 text-xl leading-[110%] font-medium">
          Для запису на курс залиште ваші дані
        </h3>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-[10px]">
          <Input
            placeholder="Ваше ім’я"
            name="firstName"
            value={form.firstName}
            error={error.firstName}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            value={form.lastName}
            error={error.lastName}
            onChange={handleChange}
            placeholder="Ваше прізвище"
          />
          <Input
            name="email"
            type="email"
            value={form.email}
            error={error.email}
            className="mb-[30px]"
            onChange={handleChange}
            placeholder="Введіть свою пошту"
          />
          {Object.values(error).some((err) => err) && (
            <p className="text-sm text-red-500">Будь ласка, заповніть усі поля</p>
          )}
          <Button
            text="Записатися на курс"
            className="border-btnBorder justify-normal gap-6 text-center"
          />
        </form>
      </div>
    </Modal>
  );
};
