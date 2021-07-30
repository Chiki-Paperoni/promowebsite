import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() buy = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  emit() {
    this.buy.emit();
  }
}
