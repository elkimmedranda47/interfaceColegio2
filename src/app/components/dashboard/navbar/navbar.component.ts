import { Component, HostListener, inject } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';
import { CommonModule } from '@angular/common';




//import { MenuService } from '../../../services/menu.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SharedModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMobile = false;
  isMenuOpen = false;
 
  private menuServices = inject(MenuService);
  menu: Menu[]=[];

  constructor( ){

    this.cargarMnenu();

  }
  
  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  cargarMnenu(){
    this.menuServices.getMenu().subscribe(data=>{
    
      console.log(data);
      //this.menu=data;
    this.menu =data;
    });
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // 768px es un breakpoint común para móviles
    if (!this.isMobile) {
      this.isMenuOpen = false; // Cerrar el menú si la pantalla no es móvil
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
