import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import { ModifierComponent } from './components/modifier/modifier.component';
import {RegesterComponent} from "./components/regester/regester.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'regester', component: RegesterComponent
  },
  
  {
    path: 'update/:emp', component: ModifierComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
