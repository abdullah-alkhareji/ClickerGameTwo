import { Component } from '@angular/core';
import { PlaygroundComponent } from '../playground/playground.component';
import { ClickingAreaComponent } from '../clicking-area/clicking-area.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [PlaygroundComponent, ClickingAreaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
