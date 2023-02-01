import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  hotelSliderData = [
    {
      img: 'assets/101.webp',
      title: 'Mountain view',
    },
    {
      img: 'assets/102.webp',
      title: '50" HDTV with Apple TV',
    },
    {
      img: 'assets/103.webp',
      title: 'Free dryer – In building',
    },
  ];

  hotelCardsData = [
    {
      img: 'assets/104.webp',
      title: 'Absolutely breathtaking.',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi dicta voluptas optio aliquid hic laudantium cupiditate culpa unde, laborum quia veniam temporibus ipsa vero atque tempore, repellat numquam accusantium.',
    },
    {
      img: 'assets/105.jpg',
      title: '50" HDTV with Apple TV',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi dicta voluptas optio aliquid hic laudantium cupiditate culpa unde, laborum quia veniam temporibus ipsa vero atque tempore, repellat numquam accusantium.',
    },
    {
      img: 'assets/106.jpg',
      title: 'Free dryer – In building',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi dicta voluptas optio aliquid hic laudantium cupiditate culpa unde, laborum quia veniam temporibus ipsa vero atque tempore, repellat numquam accusantium.',
    },
    {
      img: 'assets/107.jpg',
      title: 'Free dryer – In building',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi dicta voluptas optio aliquid hic laudantium cupiditate culpa unde, laborum quia veniam temporibus ipsa vero atque tempore, repellat numquam accusantium.',
    },
  ];
}
