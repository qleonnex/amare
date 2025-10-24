type Section = {
  title: string;
  anchor?: string;
  subs?: Section[];
};

type Sections = {
  [key: string]: Section;
};

export const sections: Sections = {
  main: {
    title: "Главная",
    anchor: "main",
  },
  forWhom: {
    title: "Для кого",
    anchor: "for-whom",
  },
  results: {
    title: "Результаты",
    subs: [
      {
        title: "Что ты получишь",
        anchor: "what-you-get",
      },
      {
        title: "Как изменится твоя жизнь",
        anchor: "how-changes",
      },
    ],
  },
  aboutAuthor: {
    title: "Об авторе",
    anchor: "about-author",
  },
  cases: {
    title: "Кейсы",
    anchor: "cases",
  },
  program: {
    title: "Программа",
    anchor: "program",
  },
  tariff: {
    title: "Тарифы",
    anchor: "TARIFF",
  },
  faq: {
    title: "FAQ",
    anchor: "faq",
  },
};
