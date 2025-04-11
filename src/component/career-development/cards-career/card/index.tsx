import Image from 'next/image';

import { Title } from '@/component/title';

import { ICardCareer } from '../../mock';

export const Card = ({ text, img, title }: ICardCareer) => {
  return (
    <div className="xxl:max-w-[251px] xxl:min-w-[251px] relative z-[6] flex max-w-[325px] min-w-[325px] flex-col gap-y-[10px] rounded-[2px] border border-[#E0F0FF] bg-white p-5 md:m-0 md:gap-3 lg:max-w-[460px] lg:min-w-[460px]">
      <Image src={img} alt={title} className="mb-[9px] md:mb-[66px]" />
      <Title text={title} className="text-textBlue m-0 text-[clamp(22px,_4vw,_32px)]" />
      <div className="bg-blueBg rounded-[2px] border border-[#027DFA33] p-[10px] text-center font-[600] text-white">
        {text}
      </div>
    </div>
  );
};
