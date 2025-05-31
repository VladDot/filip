import Image from 'next/image';

import { ICardUseful } from '@/mock-data';
import { Title } from '@/component/title';

export const CardUseful = ({ text, img, title }: ICardUseful) => {
  return (
    <div className="border-blueBg/20 xxl:max-w-[325px] xxl:min-w-[325px] xxl:border-r xxl:border-b-0 m-auto flex max-w-[325px] min-w-[325px] flex-col gap-y-[30px] border-b px-5 py-[30px] md:m-0 lg:max-w-[460px] lg:min-w-[460px]">
      <div className="flex flex-row-reverse justify-end gap-4 md:flex-col md:gap-y-[30px]">
        <Title
          text={title}
          className="m-0 flex h-14 items-end text-[clamp(22px,_4vw,_28px)] leading-none md:items-start"
        />
        <div className="min-w-[52px] md:w-[52px]">
          <Image src={img} alt={text} className="w-full" />
        </div>
      </div>
      <p className="xxl:w-[275px] w-[275px] text-[18px] leading-[1.4] lg:w-[400px]">{text}</p>
    </div>
  );
};
