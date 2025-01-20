import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }
  changeName(name:string):void {
    this.name = name;
  }
  changeAge(age:number):void {
    this.age = age;
  }
  resetHero():void {
    this.name = 'Iron Man';
    this.age = 45;
  }
}
