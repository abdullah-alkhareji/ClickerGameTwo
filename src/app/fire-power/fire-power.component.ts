import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fire-power',
  standalone: true,
  imports: [],
  templateUrl: './fire-power.component.html',
  styleUrl: './fire-power.component.css',
})
export class FirePowerComponent {
  @Output() firePowerChange = new EventEmitter<number>();
  @Input() firePower: number = 1;

  onFirePowerChange(firePower: number) {
    this.firePowerChange.emit(firePower);
  }
}
