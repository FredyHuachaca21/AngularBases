

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: 'main-page-dbz.component.html'
})

export class MainPageDbzComponent {

  constructor(public dbzService: DbzService) {   }

}
