import { Cubs1, Cubs2, Cubs3, Cubs4 } from "@/app/assets/img";
import { StaticImageData } from "next/image";

export interface ICardUseful {
    text: string;
    title: string;
    img: string | StaticImageData;
}

export const cardsUseful: ICardUseful[] = [
    {
        title: "Для новачків",
        text: "Ми навчаємо з нуля, тому попередні знання чи технічна освіта не потрібні. Достатньо бути впевненим користувачем комп’ютера.",
        img: Cubs1,
    },
    {
        title: "Початківцям в IT",
        text: "Якщо ви вже маєте базові знання, наш курс допоможе систематизувати їх і набратися практичного досвіду на реальних кейсах.",
        img: Cubs2,
    },
    {
        title: "Діючим IT-фахівцям",
        text: "Просунуті модулі будуть корисні навіть тим, хто має досвід. Ви освоїте нові інструменти та фреймворки, покращите свої навички.",
        img: Cubs3,
    },
    {
        title: "Корпоративним замовникам",
        text: "Ми підлаштовуємо програми та графік навчання під ваші потреби, щоб забезпечити найкращий результат.",
        img: Cubs4,
    },
];
