'use client';

import Image from 'next/image';

import { Filipp } from '@/assets/img';
import { useWindowWidth } from '@/hooks';

import { Card } from './card';
import { ISupport } from '../mock';

interface ICardsProps {
  support: ISupport[];
}

export const Cards = ({ support }: ICardsProps) => {
  const width = useWindowWidth();
  const link = 'https://t.me/SergeyPC';

  return (
    <>
      {width >= 640 && (
        <div className="xxl:flex-row xxl:items-start xxl:[&>div:last-child]:ml-auto xxl:[&>*:first-child>*:last-child>div>span]:-left-30 relative z-[4] flex w-full items-center gap-5 gap-y-5 [&>*:last-child>*:first-child>div>span]:top-[25%]">
          <div className="xxl:gap-[158px] xxl:[&>div:last-child]:ml-[111px] flex flex-col items-center gap-y-3">
            <Card text={support[0].text} title={support[0].title} decor={support[0].decor} />

            {width < 1440 && (
              <div className="xxl:w-[300px] xxl:-translate-y-6 w-fit animate-[var(--animate-swing)] rounded-[2px] border border-[#E0F0FF] bg-white p-4 sm:w-[240px]">
                <Image
                  src={Filipp}
                  alt="filipp"
                  className="mb-1 w-full rotate-[4.35deg] rounded-[2px]"
                />
                <div className="flex w-fit flex-col">
                  <span>Serhii Filipp</span>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textBlue"
                  >
                    @SergeyPC
                  </a>
                </div>
              </div>
            )}
            <Card text={support[2].text} title={support[2].title} decor={support[2].decor} />
          </div>
          {width >= 1440 && (
            <div className="xxl:w-[300px] xxl:-translate-y-6 w-fit animate-[var(--animate-swing)] rounded-[2px] border border-[#E0F0FF] bg-white p-4 sm:w-[240px]">
              <Image
                src={Filipp}
                alt="filipp"
                className="mb-1 w-full rotate-[4.35deg] rounded-[2px]"
              />
              <div className="flex w-fit flex-col">
                <span>Serhii Filipp</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-textBlue">
                  @SergeyPC
                </a>
              </div>
            </div>
          )}
          <div className="[&>div>ul]:list-disc [&>div>ul]:pl-7">
            {support
              .filter((_, index) => index === 1)
              .map(({ title, decor, text }, idx) => (
                <Card text={text} title={title} decor={decor} key={`${title}_${idx}`} />
              ))}
          </div>
        </div>
      )}

      {width < 640 && (
        <div className="relative z-[4] flex w-full flex-col gap-[30px] overflow-hidden pt-5 [&>*:last-child>*:first-child>div>span]:top-[15px] [&>*:last-child>*:first-child>div>span]:left-[10px]">
          {support
            .filter((_, index) => index === 0)
            .map(({ title, decor, text }, idx) => (
              <Card text={text} title={title} decor={decor} key={`${title}_${idx}`} />
            ))}
          <div className="flex justify-center">
            <div className="animate-[var(--animate-swing)] rounded-[2px] border border-[#E0F0FF] bg-white p-4">
              <Image src={Filipp} alt="filipp" className="mb-1 rotate-[4.35deg] rounded-[2px]" />
              <div className="flex flex-col">
                <span>Serhii Filipp</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-textBlue">
                  @SergeyPC
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[30px] [&>div:first-child>div>ul]:list-disc [&>div:first-child>div>ul]:pl-7">
            {support
              .filter((_, index) => index !== 0)
              .map(({ title, decor, text }, idx) => (
                <Card text={text} title={title} decor={decor} key={`${title}_${idx}`} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
