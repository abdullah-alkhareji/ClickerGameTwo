import { Component, EventEmitter, Output } from '@angular/core';
import { ClickerComponent } from '../clicker/clicker.component';
import { CounterComponent } from '../counter/counter.component';
import { FirePowerComponent } from '../fire-power/fire-power.component';
import { GunsAreaComponent } from '../guns-area/guns-area.component';
import guns, { Guns } from '../../assets/guns';
import { CashComponent } from '../cash/cash.component';
import { interval, Subscription } from 'rxjs';
import characters, { Characters } from '../../assets/characters';
import { achievementScore } from '../../assets/achievement';

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

  charachters: Characters[] = characters;
  currentCharachters: Characters[] = [];

  totalCharachtersDamage = 0;

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

  startAutoScore() {
    this.killsInterval$ = interval(1000).subscribe(() => {
      this.kills += this.currentCharachters.reduce(
        (sum, t) => sum + t.damage,
        0
      );
      this.cash += this.currentCharachters.reduce(
        (sum, t) => sum + t.damage,
        0
      );
    });
    this.charachters.forEach((element) => {
      element.timer - 1;
    });
    this.charachters = this.charachters.filter((t) => t.timer !== 0);
  }

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
    if (!this.killsInterval$ && this.charachters.length > 0)
      this.startAutoScore();
    console.log(this.currentCharachters);
    this.kills = this.kills + this.firePower;
    this.cash = this.cash + this.firePower;
    this.onFilterGuns();
    this.popupAchievements();
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

  onCharacterSelected(character: Characters) {
    this.currentCharachters.push(character);
    this.cash = this.cash - character.price;
    this.onFilterGuns();
    this.onTotalCharachtersDamageChange();
  }

  onTotalCharachtersDamageChange() {
    this.totalCharachtersDamage = this.currentCharachters.reduce(
      (sum, t) => sum + t.damage,
      0
    );
  }

  onCashChange(cash: number) {
    this.cash = this.cash + cash;
  }

  popupAchievements() {
    const found = achievementScore.findIndex(
      (v) => v.score <= this.kills && v.displayed == false
    );
    console.log(found);
    if (achievementScore[found]) {
      alert(achievementScore[found].message);
      achievementScore[found].displayed = true;
    }
  }
}
