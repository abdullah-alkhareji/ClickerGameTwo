import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cash',
  standalone: true,
  imports: [],
  templateUrl: './cash.component.html',
  styleUrl: './cash.component.css',
})
export class CashComponent {
  @Output() cashChange = new EventEmitter<number>();
  @Input() cash: number = 0;

  onCashChange(cash: number) {
    this.cashChange.emit(cash);
  }
}
