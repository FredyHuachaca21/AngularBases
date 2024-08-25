import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9500
  }, {
    id: uuid(),
    name: 'Trunks',
    power: 9000
  }, {
    id: uuid(),
    name: 'Gohan',
    power: 8500
  }, {
    id: uuid(),
    name: 'Piccolo',
    power: 8000
  }, {
    id: uuid(),
    name: 'Krillin',
    power: 7500
  }, {
    id: uuid(),
    name: 'Yamcha',
    power: 7000
  }, {
    id: uuid(),
    name: 'Tenshinhan',
    power: 6500
  }];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };

    this.characters.push(newCharacter);
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
