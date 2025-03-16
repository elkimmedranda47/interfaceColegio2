import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import { inject } from '@angular/core/testing';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    HttpClientModule,
    // se importan lo componentes de material del modulo Shared.module.ts
    
  
  ]
})
export class DashboardModule {

 // private http = inject(HttpClient);

 constructor( http: HttpClient) {}

 }
