'use client';

import Image from 'next/image';
import Link from 'next/link';

import { scrollToSection } from '@/helpers';
import { LogoHorizontal, Master, Visa } from '@/assets/img';

import { Social } from '../social';

export const Footer = ({}) => {
  return (
    <footer id="footer" className="relative z-[20] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-[60px] pb-5 lg:px-[60px]">
        <div className="mb-[30px] flex flex-col md:flex-row md:justify-between">
          <div className="mb-10 inline-block w-full max-w-[168px] lg:max-w-[249px]">
            <Image alt="logo" className="w-full" src={LogoHorizontal} />
          </div>

          <div className="flex flex-col gap-x-0 gap-y-5 *:text-lg sm:flex-row sm:justify-between md:justify-normal md:gap-x-4 lg:max-w-[550px]">
            <nav className="mb-5 flex flex-col gap-y-2.5 lg:mb-0">
              <ul className="flex flex-col gap-y-2.5 *:leading-[20px] lg:gap-y-4">
                <li
                  onClick={() => scrollToSection('#course_program')}
                  className="hover:text-textBlue cursor-pointer"
                >
                  Про курс
                </li>

                <li
                  onClick={() => scrollToSection('#learning_options')}
                  className="hover:text-textBlue mb-5 cursor-pointer lg:mb-[34px]"
                >
                  Навчальні програми
                </li>

                <li>
                  <p className="cursor-default text-sm">Пошта</p>
                </li>
              </ul>

              <Link
                href={'mailto:corezoidtraining@gmail.com'}
                className="text-textBlue"
                target="_blank"
                rel="noopener noreferrer"
              >
                corezoidtraining@gmail.com
              </Link>
            </nav>

            <div className="flex flex-col">
              <p className="mb-2.5 cursor-default sm:text-end lg:mb-4">Ми в соцмережах</p>

              <Social className="mb-[60px] gap-x-6 sm:mb-9 lg:mb-[42px]" />

              <div className="flex gap-x-4 sm:mr-2.5 sm:justify-center lg:justify-end">
                <div className="w-full max-w-[46px] lg:max-w-[72px]">
                  <Image src={Visa} alt="visa_icon" className="w-full" />
                </div>

                <div className="w-full max-w-[46px] lg:max-w-[72px]">
                  <Image src={Master} alt="master_icon" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="*:text-textBlue flex flex-col gap-y-2.5 *:text-[12px] sm:items-center md:flex-row md:items-baseline md:justify-between">
          <Link href={'#'}>© 2025. Filipp Academy. Всі права захищено.</Link>
          <Link href={'#'}>Умови користування та Політика конфіденційності</Link>
        </div>
      </div>
    </footer>
  );
};
