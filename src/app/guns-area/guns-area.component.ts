import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GunsComponent } from '../guns/guns.component';
import guns, { Guns } from '../../assets/guns';
import { Characters } from '../../assets/characters';
import { CharachtersComponent } from '../charachters/charachters.component';
@Component({
  selector: 'app-guns-area',
  standalone: true,
  imports: [GunsComponent, CharachtersComponent],
  templateUrl: './guns-area.component.html',
  styleUrl: './guns-area.component.css',
})
export class GunsAreaComponent {
  @Input() cash: number = 0;
  @Input() guns: Guns[] = [];
  @Input() currentGun: Guns = this.guns[0];
  @Output() gunSelected = new EventEmitter<Guns>();

  @Input() charachters: Characters[] = [];
  @Output() charachterSelected = new EventEmitter<Characters>();

  filtedToShow: FilteredToShow[] = [];

  


  onGunSelected(gun: Guns) {
    this.gunSelected.emit(gun);
  }

  onCharachterSelected(charachter: Characters) {
    this.charachterSelected.emit(charachter);
  }
}

interface FilteredToShow {
  guns: Guns[];
  charachters: Characters[];
}
