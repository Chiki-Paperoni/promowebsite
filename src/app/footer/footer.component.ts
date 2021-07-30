import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() buy = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  emit() {
    this.buy.emit();
  }
}
