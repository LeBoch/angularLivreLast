import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "admin", component : AdminTemplateComponent, canActivate : [AuthGuard],

    children : [
      {path : "home", component : HomeComponent},
      {path : "profile", component : ProfileComponent},
      { path: 'list', component: BookListComponent },
      { path: 'new', component: BookFormComponent },

    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
