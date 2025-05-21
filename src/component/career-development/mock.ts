import { StaticImageData } from 'next/image';

import { Stick1, Stick2, Stick3, Stick4 } from '@/assets/img';

export interface ICardCareer {
  text: string;
  title: string;
  img: string | StaticImageData;
}

export const cardCareer: ICardCareer[] = [
  { text: 'Навчаєшся', title: 'Ти зараз...', img: Stick1 },
  { text: '500-900 дол./міс.', title: 'Junior', img: Stick2 },
  { text: '1200-2500 дол./міс.', title: 'Middle', img: Stick3 },
  { text: '3000+ дол./міс.', title: 'Senior', img: Stick4 },
];
