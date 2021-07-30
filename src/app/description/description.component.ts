import { Component, OnInit } from '@angular/core';
import { Row } from './row';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  rows: Array<Row> = [
    {
      digit: '/assets/01.png',
      title: 'Размер',
      description:
        'Вы можете подобрать абсолютно любой объем банки исходя из ваших потребностей',
      img: '/assets/r1.png',
    },
    {
      digit: '/assets/02.png',
      title: 'Дизайн',
      description:
        'Минималистичный дизайн приковывает взгляды. Благодаря ему можно использовать банку в качестве подарка',
      img: '/assets/r2.png',
    },
    {
      digit: '/assets/03.png',
      title: 'Материал',
      description:
        'Стекло отлично пропускает свет - банку можно использовать для растений или вместо аквариума',
      img: '/assets/r3.png',
    },
    {
      digit: '/assets/04.png',
      title: 'Мобильность',
      description:
        'Банку можно взять куда угодно. Нужно транспортировать варенье или мед? Возьмите банку',
      img: '/assets/r4.png',
    },
    {
      digit: '/assets/05.png',
      title: 'доступность',
      description:
        'Больше не нужно покупать дорогие контейнеры. Средняя стоимость банки от 10 до 50 гривен',
      img: '/assets/r5.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
