import { Component } from '@angular/core';
import { ClickerComponent } from "../clicker/clicker.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ClickerComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

}
