import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GunsComponent } from '../guns/guns.component';
import guns, { Guns } from '../../assets/guns';

@Component({
  selector: 'app-guns-area',
  standalone: true,
  imports: [GunsComponent],
  templateUrl: './guns-area.component.html',
  styleUrl: './guns-area.component.css',
})
export class GunsAreaComponent {
  @Input() cash: number = 0;
  @Input() guns: Guns[] = [];
  @Input() currentGun: Guns = this.guns[0];
  @Output() gunSelected = new EventEmitter<Guns>();

  onGunSelected(gun: Guns) {
    this.gunSelected.emit(gun);
  }
}
