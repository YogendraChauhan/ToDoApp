import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/services/guards/auth.guard';
import { MessageSentComponent } from './pages/message-sent/message-sent.component';
import { MenuClicksComponent } from './pages/menu-clicks/menu-clicks.component';
import { UserBehaviourComponent } from './pages/user-behaviour/user-behaviour.component';


const routes: Routes = [
  { path: 'message-sent', component: MessageSentComponent, canActivate: [AuthGuard] },
  { path: 'menu-clicks', component: MenuClicksComponent, canActivate: [AuthGuard] },
  { path: 'user-behaviour', component: UserBehaviourComponent, canActivate: [AuthGuard] },
  {
    path: '',
    redirectTo: '/reports/message-sent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
