import { cn } from '@/utilities';

interface ISubTitleProps {
  text: string;
  className?: string;
}

export const SubTitle = ({ text, className }: ISubTitleProps) => {
  return (
    <p
      className={cn(
        'm-auto mb-2.5 w-fit cursor-default text-[clamp(16px,_4vw,_20px)] font-normal',
        className
      )}
    >
      {text}
    </p>
  );
};
