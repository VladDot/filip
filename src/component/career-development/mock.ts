import { Stick1, Stick2, Stick3, Stick4 } from "@/app/assets/img";
import { StaticImageData } from "next/image";

export interface ICardCareer {
    text: string;
    title: string;
    img: string | StaticImageData;
}

export const cardCareer: ICardCareer[] = [
    { text: "Навчаєтесь", title: "Ви зараз...", img: Stick1 },
    { text: "$500-900/міс", title: "Junior", img: Stick2 },
    { text: "$1200-2500/міс", title: "Middle", img: Stick3 },
    { text: "$3000+/міс", title: "Senior", img: Stick4 },
];
