import { Component, EventEmitter, Input, Output } from '@angular/core';
import guns, { Guns } from '../../assets/guns';
import { Characters } from '../../assets/characters';

@Component({
  selector: 'app-guns',
  standalone: true,
  imports: [],
  templateUrl: './guns.component.html',
  styleUrl: './guns.component.css',
})
export class GunsComponent {
  @Input() gun: Guns;
  @Input() cash: number = 0;
  @Input() currentGun: Guns = guns[0];
  @Output() gunSelected = new EventEmitter<Guns>();

  constructor() {
    this.gun = {
      name: '',
      description: '',
      img: '',
      price: 0,
      damage: 0,
      id: 0,
      multiplyer: 0,
      equipped: false,
    };
  }

  ngOnInit(): void {
    this.gun = this.gun;
  }

  onGunSelected() {
    this.gunSelected.emit(this.gun);
  }
}
