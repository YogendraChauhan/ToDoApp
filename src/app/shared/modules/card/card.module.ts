import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule
  ],
  exports: [UserCardComponent]
})
export class CardModule { }
