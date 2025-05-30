'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Logo } from '@/assets/img';
import { scrollToSection } from '@/helpers';
import { useWindowWidth } from '@/hooks';

import { Burger } from '../burger';
import { Button } from '../button';
import { FeedbackForm } from '../feedback-form';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const width = useWindowWidth();

  const handleFreeLessonClick = async () => {
    const requestData = {
      action: 'freeLesson',
    };
    const newWindow = window.open('', '_blank');

    await fetch('https://nuezowew9l.apigw.corezoid.com/getBotLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (newWindow) {
          newWindow.location.href = data.tg_link;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        if (newWindow) {
          newWindow.close();
        }
      });
  };

  return (
    <header className="fixed z-[995] w-full px-5 py-[18px] backdrop-blur-[4px] lg:px-[60px] lg:py-5">
      <div className="absolute top-0 left-0 z-[-1] h-full w-full" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1440px] items-center justify-between gap-8">
        {width >= 1024 && (
          <div className="hidden w-full justify-between min-[1024px]:flex">
            <Image src={Logo} alt="logo" className="z-[999]" />
            <nav className="flex items-center gap-7">
              <ul className="mb-[50px] flex flex-col gap-5 text-xl md:mb-0 md:flex-row">
                <li
                  onClick={handleFreeLessonClick}
                  className="hover:text-textBlue cursor-pointer transition-all duration-150 ease-in-out"
                >
                  Безкоштовний відеоурок
                </li>

                <li
                  onClick={() => scrollToSection('#course_program')}
                  className="hover:text-textBlue cursor-pointer transition-all duration-150 ease-in-out"
                >
                  Про курс
                </li>

                <li
                  onClick={() => scrollToSection('#footer')}
                  className="hover:text-textBlue cursor-pointer transition-all duration-150 ease-in-out"
                >
                  Контакти
                </li>
              </ul>
              <Button
                text="Записатися на курс"
                onClick={() => scrollToSection('#learning_options')}
                className="*:text-textBlue w-[220px] justify-between pr-2.5 pl-1 [&_span_*]:font-semibold"
              />
            </nav>
            <FeedbackForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
        {width < 1024 && (
          <div className="flex w-full items-center justify-between min-[1024px]:hidden">
            <Image src={Logo} alt="logo" className="z-[999]" />
            <Burger onClick={handleFreeLessonClick} />
          </div>
        )}
      </div>
    </header>
  );
};
