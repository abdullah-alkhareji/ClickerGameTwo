import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { ClickingAreaComponent } from './clicking-area/clicking-area.component';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, ClickingAreaComponent, PlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Zombie Killer';
}
