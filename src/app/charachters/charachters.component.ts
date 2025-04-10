import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../assets/characters';

@Component({
  selector: 'app-charachters',
  standalone: true,
  imports: [],
  templateUrl: './charachters.component.html',
  styleUrl: './charachters.component.css',
})
export class CharachtersComponent {
  @Input() charachter: Characters;
  @Output() charachterSelected = new EventEmitter<Characters>();

  constructor() {
    this.charachter = {
      id: 0,
      name: '',
      img: '',
      damage: 0,
      timer: 0,
      ability: '',
      price: 0,
      frequency: 0,
    };
  }
  onCharachterSelected() {
    this.charachterSelected.emit(this.charachter);
  }
}
