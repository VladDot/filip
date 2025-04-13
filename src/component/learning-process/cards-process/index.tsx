interface ICardsProcess {
  idx: number;
  title: string;
  content: string;
}

export const CardsProcess = ({ idx, title, content }: ICardsProcess) => {
  return (
    <div className="m-auto flex w-full flex-row *:cursor-default sm:max-w-[420px] sm:gap-x-4 md:m-0 md:max-w-[359px] md:flex-col">
      <div className="flex flex-col lg:mb-[60px]">
        <p className="text-blueBg font-manrope mb-2 ml-6 text-4xl font-bold lg:mb-10 lg:text-[54px]">{`0${idx + 1}`}</p>
        <div className="bg-blueBg/10 after:bg-blueBg md:after:bg-blueBg relative mb-4 ml-[38px] h-full w-2 rounded-[2px] after:absolute after:top-3 after:-left-[8px] after:h-3 after:w-3 after:translate-x-1/2 md:ml-0 md:h-2 md:w-full md:after:absolute md:after:top-1/2 md:after:left-[26px] md:after:h-[18px] md:after:w-[18px] md:after:-translate-y-1/2" />
      </div>

      <div className="ml-6 max-w-[267px] pt-[6px] lg:pt-0">
        <h4 className="text-blueBg mb-4 text-2xl lg:text-[32px]">{title}</h4>

        <p className="text-darkText text-[18px]">{content}</p>
      </div>
    </div>
  );
};
