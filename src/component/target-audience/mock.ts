import { StaticImageData } from 'next/image';

import { Cubs1, Cubs2, Cubs3, Cubs4 } from '@/assets/img';

export interface ICardUseful {
  text: string;
  title: string;
  img: string | StaticImageData;
}

export const cardsUseful: ICardUseful[] = [
  {
    title: 'Для новачків',
    text: 'Навчаємо з нуля, тож попередні знання або технічна освіта не обов’язкові. Достатньо впевнено користуватися комп’ютером.',
    img: Cubs1,
  },
  {
    title: 'Початківцям в IT',
    text: 'Якщо у вас вже є базові знання, наш курс допоможе впорядкувати їх та здобути практичний досвід на реальних кейсах.',
    img: Cubs2,
  },
  {
    title: 'Діючим IT-фахівцям',
    text: 'Курс буде корисним навіть досвідченим IT-фахівцям — ви опануєте сучасні підходи до побудови бізнес-процесів на Low Code платформі Corezoid.',
    img: Cubs3,
  },
  {
    title: 'Корпоративним замовникам',
    text: 'Ми підлаштовуємо формат, програму та графік навчання під ваші потреби, щоб забезпечити найкращий результат — заняття можуть проходити онлайн.',
    img: Cubs4,
  },
];
