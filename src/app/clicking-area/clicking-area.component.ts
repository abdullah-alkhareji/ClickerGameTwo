import { Component, EventEmitter, Output } from '@angular/core';
import { ClickerComponent } from '../clicker/clicker.component';
import { CounterComponent } from '../counter/counter.component';
import { FirePowerComponent } from '../fire-power/fire-power.component';
import { GunsAreaComponent } from '../guns-area/guns-area.component';
import { Gun, guns } from '../../assets/guns';
import { CashComponent } from '../cash/cash.component';
import { interval, Subscription } from 'rxjs';
import { Characters } from '../../assets/characters';

@Component({
  selector: 'app-clicking-area',
  standalone: true,
  imports: [
    ClickerComponent,
    CounterComponent,
    FirePowerComponent,
    GunsAreaComponent,
    CashComponent,
  ],
  templateUrl: './clicking-area.component.html',
  styleUrl: './clicking-area.component.css',
})
export class ClickingAreaComponent {
  kills = 0;
  killsInterval$: Subscription | undefined;

  charachters: Characters[] = [];

  guns = guns;
  currentGun: Gun = this.guns[0];
  firePower = this.currentGun.damage;
  cash = 0;
  gunsArea = this.guns.filter((gun) => {
    console.log({ gun }, this.cash);
    return (
      gun.price <= this.cash &&
      gun.name !== this.currentGun.name &&
      this.guns.indexOf(gun) > this.guns.indexOf(this.currentGun)
    );
  });

  startAutoScore() {
    this.killsInterval$ = interval(1000).subscribe(() => {
      this.kills += this.charachters.reduce((sum, t) => sum + t.damage, 0);
    });
    this.charachters.forEach((element) => {
      element.timer - 1;
    });
    this.charachters = this.charachters.filter((t) => t.timer !== 0);
  }

  onFilterGuns() {
    this.gunsArea = this.guns.filter((gun) => {
      console.log({ gun }, this.cash);
      return (
        gun.price <= this.cash &&
        gun.name !== this.currentGun.name &&
        this.guns.indexOf(gun) > this.guns.indexOf(this.currentGun)
      );
    });
  }

  onKillsChange() {
    if (!this.killsInterval$ && this.charachters.length > 0)
      this.startAutoScore();
    this.kills = this.kills + this.firePower;
    this.cash = this.cash + this.firePower;
    this.onFilterGuns();
  }

  onFirePowerChange(firePower: number) {
    this.firePower = this.firePower + firePower;
  }

  onGunSelected(gun: Gun) {
    this.currentGun = gun;
    this.onFirePowerChange(gun.damage);
    this.cash = this.cash - gun.price;
    this.onFilterGuns();
  }

  onCharacterSelected(character: Characters) {
    this.charachters.push(character);
  }

  onCashChange(cash: number) {
    this.cash = this.cash + cash;
  }
}
