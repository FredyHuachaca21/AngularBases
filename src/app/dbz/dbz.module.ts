
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDbzComponent } from './page/main-page-dbz.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  imports: [CommonModule],
  exports: [MainPageDbzComponent],
  declarations: [
    MainPageDbzComponent,
    ListComponent,
    AddCharacterComponent
  ],
  providers: [],
})
export class DbzModule { }
