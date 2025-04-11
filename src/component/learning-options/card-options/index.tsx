import Image from 'next/image';

import { Button } from '@/component';
import { DoneFilled } from '@/assets/icon';

interface ICardOptionsProps {
  price: string;
  title: string;
  lists: string[];
  description: string;
  onClick: () => void;
}

export const CardOptions = ({ lists, price, title, description, onClick }: ICardOptionsProps) => {
  return (
    <div className="rounder-[2px] odd:bg-brightBg even:[&_.lastItem]:bg-brightBg border-borderBg flex w-full flex-col items-center gap-x-10 border-[1px] p-2.5 even:bg-white sm:flex-row sm:justify-between xl:max-w-[650px] xl:gap-0 odd:[&_.lastItem]:bg-white">
      <div className="rounder-[2px] flex h-full w-full flex-col justify-between py-5 pl-5 sm:max-w-[400px]">
        <div className="*:cursor-default sm:mb-5 sm:max-w-[285px]">
          <p className="mb-10 text-[clamp(16px,_4vw,_20px)] font-semibold">{price}</p>
          <h4 className="text-textBlue mb-5 text-[clamp(20px,_4vw,_32px)] font-bold">{title}</h4>
          <p className="text-[clamp(14px,_4vw,_18px)] font-medium">{description}</p>
        </div>
        <Button
          revers
          text="Записатись"
          className="hidden max-w-[295px] sm:flex sm:max-w-[216px]"
          onClick={onClick}
        />
      </div>
      <div className="lastItem m-auto h-full w-full rounded-[2px] p-5 sm:max-w-[400px]">
        <ul className="flex w-fit max-w-[420px] flex-col gap-y-5 *:cursor-default">
          {lists.map((list, idx) => (
            <li key={`${title}_${idx}`} className="flex items-start gap-2.5 text-base">
              <div className="w-full max-w-3 pt-1">
                <Image src={DoneFilled} alt="done_filled" className="w-full" />
              </div>
              <p className="xxl:text-base text-sm">{list}</p>
            </li>
          ))}
        </ul>
      </div>
      <Button
        revers
        text="Записатись"
        className="max-w-[295px] sm:hidden sm:max-w-[216px]"
        onClick={onClick}
      />
    </div>
  );
};
