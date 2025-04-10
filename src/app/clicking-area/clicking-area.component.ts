import { Component, EventEmitter, Output } from '@angular/core';
import { ClickerComponent } from '../clicker/clicker.component';
import { CounterComponent } from '../counter/counter.component';
import { FirePowerComponent } from '../fire-power/fire-power.component';
import { GunsAreaComponent } from '../guns-area/guns-area.component';
import guns, { Guns } from '../../assets/guns';
import { CashComponent } from '../cash/cash.component';

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
  guns = guns;
  currentGun: Guns = this.guns[0];
  firePower = this.currentGun.damage;
  cash = 0;
  gunsArea = this.guns.filter((gun) => {
    return (
      gun.price <= this.cash &&
      gun.name !== this.currentGun.name &&
      gun.equipped === false
    );
  });

  onFilterGuns() {
    this.gunsArea = this.guns.filter((gun) => {
      return (
        gun.price <= this.cash &&
        gun.name !== this.currentGun.name &&
        gun.equipped === false
      );
    });
  }

  onKillsChange() {
    this.kills = this.kills + this.firePower;
    this.cash = this.cash + this.firePower;
    this.onFilterGuns();
  }

  onFirePowerChange(firePower: number) {
    this.firePower = this.firePower + firePower;
  }

  onGunSelected(gun: Guns) {
    this.currentGun = gun;
    this.onFirePowerChange(gun.damage);
    this.cash = this.cash - gun.price;
    this.onFilterGuns();
    this.guns.forEach((theGun) => {
      if (theGun.id === gun.id) {
        theGun.equipped = true;
      }
    });
  }

  onCashChange(cash: number) {
    this.cash = this.cash + cash;
  }
}
