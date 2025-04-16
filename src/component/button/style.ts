import { cn } from '@/utilities';
interface IStyleProps {
  revers?: boolean;
  rotate?: boolean;
  className?: string;
}

export const getStyle = ({ revers, rotate, className }: IStyleProps) => ({
  btn: cn(
    'pl-3 py-2 pr-6 bg-blueBg border-blueBorder border-[1px] w-full rounded-xs flex justify-between ease-in-out duration-300 group/item sm:bg-transparent sm:hover:bg-blueBg cursor-pointer',
    revers && 'pl-5 pr-3 flex-row-reverse',
    className
  ),
  arrowContainer: cn('max-w-6 overflow-hidden flex items-center', rotate && 'rotate-90'),
  arrowImg: cn(
    'min-w-6 ease-in-out duration-300 [&_*]:fill-white sm:[&_*]:fill-black group-hover/item:[&_*]:fill-white',
    rotate ? '-translate-x-6 group-hover/item:translate-x-0' : 'sm:group-hover/item:-translate-x-6'
  ),
  textContainer: 'font-normal overflow-hidden h-[22px] text-[18px]',
  textStyle: cn(
    'block text-[18px] text-white sm:text-darkText -translate-y-[2px] sm:group-hover/item:text-white sm:group-hover/item:-translate-y-[30px] ease-in-out duration-300'
  ),
});
