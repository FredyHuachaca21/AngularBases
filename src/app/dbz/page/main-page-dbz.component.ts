

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: 'main-page-dbz.component.html'
})

export class MainPageDbzComponent {

  public characters: Character[] = [{
    name: 'Goku',
    power: 10000
  }, {
    name: 'Vegeta',
    power: 9500
  }, {
    name: 'Trunks',
    power: 9000
  }, {
    name: 'Gohan',
    power: 8500
  }, {
    name: 'Piccolo',
    power: 8000
  }, {
    name: 'Krillin',
    power: 7500
  }, {
    name: 'Yamcha',
    power: 7000
  }, {
    name: 'Tenshinhan',
    power: 6500
  }];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
