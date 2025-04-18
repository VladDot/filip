import { cn } from '@/utilities';

interface IGetStyles {
  isOpen: boolean;
}

export const getStyles = ({ isOpen }: IGetStyles) => ({
  header:
    'flex justify-between items-center border relative z-[6] border-blueBorder/20 rounded-[2px] p-2 md:p-4 cursor-pointer bg-white shadow-md transition-all duration-300 relative z-[4]',
  arrowWrapper: 'transition-transform flex',
  arrow: 'inline-block transition-transform duration-300 rotate-90',
  content: cn(
    'overflow-hidden transition-all duration-300 max-h-0 opacity-0 bg-transparent ',
    isOpen && 'max-h-[500px] opacity-100 pt-3'
  ),
});
