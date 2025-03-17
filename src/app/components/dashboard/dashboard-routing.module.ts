import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ProfesorComponent } from '../profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';


//# SISTEMA DE RUTEO HIJOS
const routes: Routes = [
  {path: '', component: DashboardComponent,children:[

    { path: '', component: InicioComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: 'curso', component: CursoComponent },

    { path: 'crear-usuario', component: CrearUsuarioComponent },
    { path: 'editar-usuario/:id', component: CrearUsuarioComponent }
     //se crea una nueva ruta = "crear-usuario"

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
