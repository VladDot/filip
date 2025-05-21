'use client';

import { useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks';
import { scrollToSection } from '@/helpers';

import { Button } from '../button';
import { getStyles } from './styles';

interface IBurger {
  onClick: () => void;
}

export const Burger = ({ onClick }: IBurger) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const { burger, nav, navContent } = getStyles({ isActive });

  useOutsideClick(() => setIsActive(false), ref);

  return (
    <>
      <button className={burger} onClick={() => setIsActive(!isActive)}>
        <span className="bar-top"></span>
        <span className="bar-mid"></span>
        <span className="bar-bot"></span>
      </button>

      <nav className={nav} ref={ref}>
        <div className={navContent}>
          <ul className="mb-[50px] flex w-fit flex-col gap-5 text-xl">
            <li
              onClick={onClick}
              className="hover:text-textBlue cursor-pointer transition-all duration-150 ease-in-out"
            >
              Безкоштовний відеоурок
            </li>
            <li
              onClick={() => {
                setIsActive(!isActive);
                scrollToSection('#course_program');
              }}
              className="hover:text-textBlue cursor-pointer transition-all duration-150 ease-in-out"
            >
              Про курс
            </li>
            <li
              onClick={() => {
                setIsActive(!isActive);
                scrollToSection('#footer');
              }}
              className="hover:text-textBlue cursor-pointer transition-all duration-150 ease-in-out"
            >
              Контакти
            </li>
          </ul>

          <Button
            text="Записатися на курс"
            revers
            className="sm:bg-blueBg max-w-[335px] *:text-white"
            onClick={() => {
              setIsActive(!isActive);
              scrollToSection('#learning_options');
            }}
          />
        </div>
      </nav>
    </>
  );
};
