import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 26;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = 'Spiderman';
  }

  changeHeroAge(): void {
    this.age = 20;
  }

  resetHero(): void {
    this.name = 'Ironman';
    this.age = 26;
  }

}
