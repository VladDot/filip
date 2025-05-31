import { StaticImageData } from 'next/image';

import { Cubs1, Cubs2, Cubs3, Cubs4 } from '@/assets/img';

export interface ICardUseful {
  text: string;
  title: string;
  img: string | StaticImageData;
}

export const cardsUseful: ICardUseful[] = [
  {
    title: 'Новачкам',
    text: 'Навчаємо з нуля, тож технічна освіта необов’язкова. Достатньо бути впевненим користувачем комп’ютера.',
    img: Cubs1,
  },
  {
    title: 'Початківцям в IT',
    text: 'Якщо у тебе вже є базові знання, наш курс допоможе впорядкувати їх та здобути практичний досвід на реальних кейсах.',
    img: Cubs2,
  },
  {
    title: 'Працюючим IT-фахівцям',
    text: 'Курс буде корисним навіть досвідченим IT-фахівцям: ти опануєш сучасні підходи до побудови бізнес-процесів на Low Code платформі Corezoid.',
    img: Cubs3,
  },
  {
    title: 'Корпоративним замовникам',
    text: 'На курс можна записати цілу команду розробників. Ми надаємо можливість підкорегувати формат, програму чи графік навчання під потреби вашої компанії.',
    img: Cubs4,
  },
];
