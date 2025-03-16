import { Component } from '@angular/core';


import { NavbarComponent } from "./navbar/navbar.component";

//Para configurar el   ruteo poder usar <router-outlet></router-outlet> en el html
import { RouterOutlet } from '@angular/router';
            


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    
    NavbarComponent,
    RouterOutlet,
  
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 

}