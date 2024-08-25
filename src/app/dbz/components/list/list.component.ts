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
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacterById(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }


}
