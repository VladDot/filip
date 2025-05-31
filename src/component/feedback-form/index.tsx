'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

import { useOutsideClick } from '@/hooks';

import { Input } from './input';
import { Modal } from '../modal';
import { Button } from '../button';

interface IFeedbackFormProps {
  isOpen: boolean;
  actionType?: string | null;
  setIsOpen: (value: boolean) => void;
}

export const FeedbackForm = ({ isOpen, setIsOpen, actionType }: IFeedbackFormProps) => {
  const [form, setForm] = useState({
    email: '',
    lastName: '',
    firstName: '',
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [checkboxError, setCheckboxError] = useState('');

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
    if (e.target.checked) setCheckboxError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setError((prevError) => ({
      ...prevError,
      [e.target.name]: '',
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newError = {
      firstName: form.firstName ? '' : "Це обов'язкове поле",
      lastName: form.lastName ? '' : "Це обов'язкове поле",
      email: form.email ? '' : "Це обов'язкове поле",
    };

    if (form.email && !validateEmail(form.email)) {
      newError.email = 'Некоректний email';
    }

    if (!isAgreed) {
      setCheckboxError('Необхідно погодитися з умовами');
    }

    setError(newError);

    const isValid = Object.values(newError).every((err) => err === '') && isAgreed;

    if (isValid) {
      setError({ email: '', lastName: '', firstName: '' });

      const formData = {
        name: form.firstName,
        surname: form.lastName,
        email: form.email,
      };

      const updatedFormData = {
        ...formData,
        action: actionType,
      };

      await fetch('https://nuezowew9l.apigw.corezoid.com/getBotLink', {
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
            className="mb-3"
            onChange={handleChange}
            placeholder="Введіть свою пошту"
          />

          <label className="mb-3 flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mt-[2px]"
            />
            <span>
              Я прочитав(ла) і погоджуюсь з умовами{' '}
              <Link href={'/terms'} target="_blank" className="text-blueBg hover:underline">
                Публічного договору (оферти)
              </Link>{' '}
              та{' '}
              <Link href={'/privacy'} target="_blank" className="text-blueBg hover:underline">
                Політики конфіденційності
              </Link>
            </span>
          </label>

          {checkboxError && <p className="text-sm text-red-500">{checkboxError}</p>}

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
