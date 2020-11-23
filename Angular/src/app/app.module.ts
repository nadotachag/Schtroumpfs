import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SchtroumpfService } from './shared/Schtroumpf.service';
import { LoginRegesterService } from './shared/Login_regester.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

 const appRouteList: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '/home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouteList)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }