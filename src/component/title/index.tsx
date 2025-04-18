import { cn } from '@/utilities';

interface ITitleProps {
  text: string;
  className?: string;
}

export const Title = ({ text, className }: ITitleProps) => {
  return (
    <h2
      className={cn(
        'm-auto w-fit cursor-default text-[clamp(28px,_4vw,_48px)] leading-[100%] font-[600]',
        className
      )}
    >
      {text}
    </h2>
  );
};
