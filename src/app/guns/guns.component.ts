import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gun, guns } from '../../assets/guns';

@Component({
  selector: 'app-guns',
  standalone: true,
  imports: [],
  templateUrl: './guns.component.html',
  styleUrl: './guns.component.css',
})
export class GunsComponent {
  @Input() gun: Gun;
  @Input() cash: number = 0;
  @Input() currentGun: Gun = guns[0];
  @Output() gunSelected = new EventEmitter<Gun>();

  constructor() {
    this.gun = {
      name: '',
      description: '',
      image: '',
      price: 0,
      damage: 0,
    };
  }

  ngOnInit(): void {
    this.gun = this.gun;
  }

  onGunSelected() {
    this.gunSelected.emit(this.gun);
  }
}
