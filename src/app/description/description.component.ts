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
      digit: '01',
      title: 'Размер',
      description:
        'Вы можете подобрать абсолютно любой объем банки исходя из ваших потребностей',
      img: '/assets/r1.png',
    },
    {
      digit: '02',
      title: 'Дизайн',
      description:
        'Минималистичный дизайн приковывает взгляды. Благодаря ему можно использовать банку в качестве подарка',
      img: '/assets/r2.png',
    },
    {
      digit: '03',
      title: 'Материал',
      description:
        'Стекло отлично пропускает свет - банку можно использовать для растений или вместо аквариума',
      img: '/assets/r3.png',
    },
    {
      digit: '04',
      title: 'Мобильность',
      description:
        'Банку можно взять куда угодно. Нужно транспортировать варенье или мед? Возьмите банку',
      img: '/assets/r4.png',
    },
    {
      digit: '05',
      title: 'доступность',
      description:
        'Больше не нужно покупать дорогие контейнеры. Средняя стоимость банки от 10 до 50 гривен',
      img: '/assets/r5.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
