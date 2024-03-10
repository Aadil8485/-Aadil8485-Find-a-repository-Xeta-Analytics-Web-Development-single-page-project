import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {
    path:'',pathMatch:'full', redirectTo:'home'
  },
{
  path:'home','title':'Home' ,component: HomeComponent
},
{
  path:'login','title':'Login',component:LoginComponent
},
{
  path:'dashboard','title':'Dashboard',component:DashboardComponent
}
];
