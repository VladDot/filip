export interface IAccordionsData {
  title: string;
  text: string[];
}

export const accordionsData: IAccordionsData[] = [
  {
    title: 'Вступ',
    text: [
      'Про викладача ',
      'Що таке Corezoid',
      'Де застосовується',
      'Чому варто вивчати',
      'Приклади використання',
      'Карʼєрні можливості',
    ],
  },
  {
    title: 'Основи Corezoid',
    text: [
      'Робота з інтерфейсом платформи',
      'Використання логіки Condition',
      'Застосування Delay і Set Parameters',
      'Використання логіки Call a Process, Copy Task',
      'Використання логіки Waiting for Callback',
      'Робота з логікою Modify Task',
      'Робота з чергами — Queue, Get from Queue',
      'Створення Dashboard',
      'Підключення зовнішніх сервісів через API (на прикладі Binance)',
      'Взаємодія з таблицями Google Sheets',
      'Робота зі Stages та версіями процесів',
    ],
  },
  {
    title: 'Основи JavaScript',
    text: [
      'Введення у JavaScript',
      'Робота зі змінними',
      'Оператори та їхнє застосування',
      'Робота з масивами',
      'Робота з об`єктами та доступ до їхніх властивостей і методів',
      'Робота з рядками',
      'Умовні оператори if, else if, switch, тернарний оператор',
      'Цикл for',
      'Використання методів filter, reduce, map, find, sort',
      'Робота з функціями',
    ],
  },
  {
    title: 'Фінальний проєкт — чат-бот у Telegram',
    text: [
      'Взаємодія з Telegram Bot API',
      'Формування відповідей: текст, кнопки, меню',
      'Розуміння базової архітектури чат-бота',
      'Самостійна розробка власного чат-бота з використанням Corezoid та JavaScript',
    ],
  },
];
