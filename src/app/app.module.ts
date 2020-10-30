import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './shared/services/guards/auth.guard';
import { AuthenticationService } from './shared/services/authentication.service';
import { ApiInterceptor } from './shared/services/interceptors/api.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';
import { RouterModule } from '@angular/router';
import { CardModule } from './shared/modules/card/card.module';
import { SmartChartsModule } from './shared/modules/charts/smart-charts.module';
import { ViewportComponent } from './components/app-viewport/viewport.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SideDrawerComponent,
    ViewportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoaderModule,
    HttpClientModule,
    RouterModule,
    CardModule,
    SmartChartsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
