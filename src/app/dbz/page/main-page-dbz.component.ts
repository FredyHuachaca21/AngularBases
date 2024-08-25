

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: 'main-page-dbz.component.html'
})

export class MainPageDbzComponent {


  constructor(private dbzService: DbzService) {   }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeletedCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }

}
