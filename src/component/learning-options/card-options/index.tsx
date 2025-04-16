import { Button } from '@/component';

interface ISVGDoneProps {
  className?: string;
}

interface ICardOptionsProps {
  price: string;
  title: string;
  subTitle?: string;
  lists: string[];
  description: string[];
  onClick: () => void;
}

const SVGDone = ({ className }: ISVGDoneProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.55563 13.7864L3 9.66567L3.88875 8.63568L7 12.2414L14.1113 4L15 5.02999L7.445 13.7864C7.38663 13.8541 7.31731 13.9078 7.24101 13.9445C7.1647 13.9811 7.08291 14 7.00031 14C6.91772 14 6.83593 13.9811 6.75962 13.9445C6.68332 13.9078 6.614 13.8541 6.55563 13.7864Z"
        fill="#027DFA"
      />
    </svg>
  );
};

export const CardOptions = ({
  lists,
  price,
  title,
  subTitle,
  description,
  onClick,
}: ICardOptionsProps) => {
  return (
    <div className="rounder-[2px] odd:bg-brightBg even:[&_.lastItem]:bg-brightBg border-borderBg mx-auto flex w-fit flex-col gap-x-5 border-[1px] p-2.5 even:bg-white sm:flex-row sm:items-stretch odd:[&_.lastItem]:bg-white">
      <div className="rounder-[2px] flex h-full w-full flex-col justify-between py-5 pl-5 sm:max-w-[305px]">
        <div className="*:cursor-default sm:mb-5 sm:max-w-[285px]">
          <p className="mb-10 text-[clamp(16px,_4vw,_20px)] font-semibold">{price}</p>
          <h4 className="text-textBlue mb-5 flex flex-col text-[clamp(20px,_4vw,_32px)] leading-[120%] font-bold">
            {title}

            {subTitle ? <span className="text-amber-300">{subTitle}</span> : null}
          </h4>
          <div className="flex flex-col gap-y-6">
            {description.map((text, idx) => (
              <p key={`${text}_${idx}`} className="text-[clamp(14px,_4vw,_18px)] font-medium">
                {text}
              </p>
            ))}
          </div>
        </div>
        <Button
          revers
          text="Записатись"
          className="hidden max-w-[295px] sm:flex sm:max-w-[216px]"
          onClick={onClick}
        />
      </div>
      <div className="lastItem mb-2.5 h-full w-full rounded-[2px] p-5 sm:max-w-[305px]">
        <ul className="mb-auto flex h-full w-full max-w-[420px] flex-col gap-y-5 *:cursor-default">
          {lists.map((list, idx) => (
            <li key={`${title}_${idx}`} className="flex items-start gap-2.5 text-base">
              <div className="w-full max-w-[18px] pt-1">
                <SVGDone className="w-full" />
              </div>
              <p className="xxl:text-base text-sm">{list}</p>
            </li>
          ))}
        </ul>
      </div>
      <Button
        revers
        text="Записатись"
        className="mx-auto max-w-[295px] sm:hidden sm:max-w-[216px]"
        onClick={onClick}
      />
    </div>
  );
};
