import Link from 'next/link';

import { cn } from '@/utilities';
import { socialContact } from '@/mock-data';

import { SVGViber, SVGTelegram, SVGWhatsapp, SVGInstagram } from './svg-icon';

interface ISocialProps {
  className?: string;
}

export const Social = ({ className }: ISocialProps) => {
  return (
    <div className={cn('flex gap-y-6', className)}>
      <Link href={socialContact.tg} target="_blank" rel="noopener noreferrer">
        <SVGTelegram />
      </Link>
      <Link href={socialContact.wa} target="_blank" rel="noopener noreferrer">
        <SVGWhatsapp />
      </Link>
      <Link href={socialContact.inst} target="_blank" rel="noopener noreferrer">
        <SVGInstagram />
      </Link>
      <Link href={socialContact.viber} target="_blank" rel="noopener noreferrer">
        <SVGViber />
      </Link>
    </div>
  );
};
