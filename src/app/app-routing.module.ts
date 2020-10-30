import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/guards/auth.guard';
import { ViewportComponent } from './components/app-viewport/viewport.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: ViewportComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      {
        path: 'reports',
        loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
