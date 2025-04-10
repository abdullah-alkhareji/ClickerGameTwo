import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GunsComponent } from '../guns/guns.component';
import { Gun } from '../../assets/guns';

@Component({
  selector: 'app-guns-area',
  standalone: true,
  imports: [GunsComponent],
  templateUrl: './guns-area.component.html',
  styleUrl: './guns-area.component.css',
})
export class GunsAreaComponent {
  @Input() cash: number = 0;
  @Input() guns: Gun[] = [];
  @Input() currentGun: Gun = this.guns[0];
  @Output() gunSelected = new EventEmitter<Gun>();

  onGunSelected(gun: Gun) {
    this.gunSelected.emit(gun);
  }

}
