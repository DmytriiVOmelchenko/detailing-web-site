import HeroSlideImage1 from './assets/img/cars/Car-slider-1.png';
import HeroSlideImage2 from './assets/img/cars/Car-Slider-2.png';
import HeroSlideImage3 from './assets/img/cars/Car-slider-3.png';
import CarCateg1 from './assets/img/cars/Car-small.png';
import CarCateg2 from './assets/img/cars/Car-medium.png';
import CarCateg3 from './assets/img/cars/Car-big.png';
import CarCateg4 from './assets/img/cars/Car-superbig.png';
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'головна',
    href: '#',
  },
  {
    name: 'ціни',
    href: '#',
  },
  {
    name: 'контакти',
    href: '#',
  },
  {
    name: 'запис',
    href: '#',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: ' Професійний Детейлінг',
    image: <HeroSlideImage1 />,
    subtitle:
      'Ми дбаємо про ваше авто, відновлюючи блиск та зберігаючи красу вашої машини всередині й ззовні',
    buttonText: 'Отримати пропозицію',
  },
  {
    id: 2,
    title: 'Захист Від Подряпин',
    image: <HeroSlideImage2 />,
    subtitle:
      'Наші фахівці допоможуть зберегти ваш автомобіль від подряпин і пошкоджень. Піклуємося про кожну деталь',
    buttonText: 'Отримати пропозицію',
  },
  {
    id: 3,
    title: "Детейлінг Інтер'єру",
    image: <HeroSlideImage3 />,
    subtitle:
      'Ми дбаємо про комфорт і чистоту вашого авто. Ретельний дітейлінг для салону - наш пріоритет.',
    buttonText: 'Отримати пропозицію',
  },
];

export const bundleData = [
  {
    id: 1,
    image: <CarCateg1 />,
    name: 'small',
    carCategory: 'хетчбек',
    services: [
      {
        name: 'smart',
        price: 1000,
        list: ['Мийка авто', 'Вакуум салону', 'Чищення скла', 'Очищення шин'],
      },
      {
        name: 'premium',
        price: 1800,
        list: [
          'Усі з Smart',
          'Полірування',
          'Обробка пластику',
          'Захист шин',
          'Дезінфекція',
        ],
      },
      {
        name: 'royal',
        price: 3000,
        list: [
          'Усі з Premium',
          'Детейлінг мотора',
          'Захист ЛКП',
          'Чищення шкіри',
          'Антикорозія',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <CarCateg2 />,
    carCategory: 'Седан',
    services: [
      {
        name: 'smart',
        price: 1200,
        list: ['Мийка авто', 'Вакуум салону', 'Чищення скла', 'Очищення шин'],
      },
      {
        name: 'premium',
        price: 2000,
        list: [
          'Усі з Smart',
          'Полірування',
          'Обробка пластику',
          'Захист шин',
          'Дезінфекція',
        ],
      },
      {
        name: 'royal',
        price: 3400,
        list: [
          'Усі з Premium',
          'Детейлінг мотора',
          'Захист ЛКП',
          'Чищення шкіри',
          'Антикорозія',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'big',
    image: <CarCateg3 />,
    carCategory: 'Кросовер',
    services: [
      {
        name: 'smart',
        price: 1400,
        list: ['Мийка авто', 'Вакуум салону', 'Чищення скла', 'Очищення шин'],
      },
      {
        name: 'premium',
        price: 2400,
        list: [
          'Усі з Smart',
          'Полірування',
          'Обробка пластику',
          'Захист шин',
          'Дезінфекція',
        ],
      },
      {
        name: 'royal',
        price: 3800,
        list: [
          'Усі з Premium',
          'Детейлінг мотора',
          'Захист ЛКП',
          'Чищення шкіри',
          'Антикорозія',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'super big',
    image: <CarCateg4 />,
    carCategory: 'Позашляховик',
    services: [
      {
        name: 'smart',
        price: 1600,
        list: ['Мийка авто', 'Вакуум салону', 'Чищення скла', 'Очищення шин'],
      },
      {
        name: 'premium',
        price: 2800,
        list: [
          'Усі з Smart',
          'Полірування',
          'Обробка пластику',
          'Захист шин',
          'Дезінфекція',
        ],
      },
      {
        name: 'royal',
        price: 4400,
        list: [
          'Усі з Premium',
          'Детейлінг мотора',
          'Захист ЛКП',
          'Чищення шкіри',
          'Антикорозія',
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillGithub />,
    href: '#',
  },
];
