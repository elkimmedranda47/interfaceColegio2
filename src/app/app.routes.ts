import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './custom/auth.guard';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

export const routes: Routes = [

    //rutas de la aplicaion
    //cuando el usuario digite una ruta vacia redirigelo al login;
    { path: '',redirectTo:'login', pathMatch:'full'} 
    ,
    { path: 'login',component:LoginComponent}
    ,
    { path: 'estudiante',component:EstudianteComponent,canActivate: [authGuard] }
    ,
    { path: 'login',component:ProfesorComponent,canActivate: [authGuard] }
    ,
    //carga peresosa, se cargara el modulo solo cunado la ruta sea {path: 'dashboard'}
    { path: 'dashboard',loadChildren:() => import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule),canActivate: [authGuard]}
    ,
    //si el usuario pone cual quier cosa /logineerrxxz redirecionar al login
    {path: '**',redirectTo:'login', pathMatch:'full',}
    

];
