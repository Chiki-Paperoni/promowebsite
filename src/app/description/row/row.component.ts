import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  toggled = false;
  @Input() row!: Row;
  constructor() {}

  ngOnInit(): void {
    console.log(this.row);
  }
}
