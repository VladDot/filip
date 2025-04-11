'use client';

import { useRef, useState } from 'react';

import { cn } from '@/utilities';
import { useOutsideClick } from '@/hooks';

import { Social } from '../social';
import { SVGChat, SVGChatClose } from './svg-icon';

interface IChatProps {
  className?: string;
}

export const Chat = ({ className }: IChatProps) => {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(() => setIsOpen(false), ref);

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={cn(
        'bg-blueBg fixed right-5 bottom-18 z-[1000] h-[60px] w-[60px] cursor-pointer rounded-[2px] transition-all duration-300 ease-in-out',
        className
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-1/2 h-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden duration-150 ease-in-out',
          isOpen && '-top-[110%] h-fit -translate-y-18 overflow-visible'
        )}
      >
        <Social className="text-textBlue/80 md:[&_*]:hover:text-textBlue flex-col duration-300 ease-in-out md:text-[#D5D5D5]" />
      </div>

      <div
        className={cn(
          'relative z-20 h-[60px] w-[60px] transition-all duration-500',
          isOpen === false && '[&_*]:transition-all [&_*]:duration-300 hover:[&_*]:w-[60px]'
        )}
      >
        {!isOpen ? (
          <SVGChat className="absolute top-1/2 left-1/2 w-[50px] -translate-x-1/2 -translate-y-1/2" />
        ) : (
          <SVGChatClose />
        )}
      </div>
    </div>
  );
};
