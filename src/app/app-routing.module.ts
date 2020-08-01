import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DonorComponent } from './donors/donor/donor.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'donor', component: DonorComponent},
  {path: '*', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
