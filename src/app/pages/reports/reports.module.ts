import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { MessageSentComponent } from './pages/message-sent/message-sent.component';
import { MenuClicksComponent } from './pages/menu-clicks/menu-clicks.component';
import { UserBehaviourComponent } from './pages/user-behaviour/user-behaviour.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [ReportsComponent, MessageSentComponent, MenuClicksComponent, UserBehaviourComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
