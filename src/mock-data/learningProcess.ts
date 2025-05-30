export interface ICardLessProps {
  title: string;
  content: string;
  subContent?: string;
}

export const cardLess: ICardLessProps[] = [
  {
    title: 'Теорія',
    content: 'Вивчаєш теорію через авторські відеоуроки у зручний для тебе час.',
  },
  {
    title: 'Практика',
    content: 'Виконуєш домашні завдання після кожного уроку. Отримуєш фідбек від викладача.',
  },
  {
    title: 'Тести',
    content:
      'Проходиш тести для закріплення знань. Це допомагає краще запам’ятати матеріал і впевнено рухатись далі.',
  },
  {
    title: 'Фінальний проект',
    content: 'Створюєш чат-бота в Telegram та отримуєш детальний фідбек від викладача.',
  },
];
