import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'bdz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Goku',
    power: 10000
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeletedCharacter(index: number): void {
    console.log('Deleted character', index);

    this.onDelete.emit(index);
  }


}
