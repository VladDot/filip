import { Title } from '@/component/title';

import { ISupport } from '../../mock';

export const Card = ({ decor, text, title }: ISupport) => {
  return (
    <div className="md:[360px] xxl:w-[427px] relative z-[4] h-fit px-5">
      <Title text={title} className="m-0 mb-[10px] text-[clamp(20px,_4vw,_28px)]" />

      <ul className="flex flex-col gap-4 md:text-[18px]">
        <div className="text-textBlue/10 xxl:text-[300px] absolute top-0 right-0 z-0 text-[220px] leading-[50%] font-bold md:leading-[70%]">
          <span className="font-manrope">{decor}</span>
          <span>.</span>
        </div>
        {text.map((e, idx) => (
          <li className="relative z-1" key={`${e}_${idx}`}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};
