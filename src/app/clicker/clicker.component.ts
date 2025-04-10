import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-clicker',
  standalone: true,
  imports: [],
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.css',
})
export class ClickerComponent {
  @Input() kills: number = 0;
  @Output() killsChange = new EventEmitter<number>();

  increment() {
    this.kills++;
    this.killsChange.emit(this.kills);
  }
}
