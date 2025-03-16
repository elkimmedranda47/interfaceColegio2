import { Component, inject, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Usuario } from '../../../interfaces/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';



  //NUEVO
 


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    
    SharedModule,
    CommonModule,
    //se agrega el modulo de par ausar la directiva routerLink en el html de componenteSS
    RouterModule
  
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  //private _liveAnnouncer = inject(LiveAnnouncer);

  //inicializar variable listusuario con un array I_usuario Vacia
  listUsuario: Usuario[]=[];

  displayedColumns: string[] = ['id','usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  //dataSource = this.listUsuario;
  // dataSource = new MatTableDataSource(this.listUsuario);
  
  //datasor va ahcer de tipo MatTableDataSource
   dataSource!: MatTableDataSource<any>


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
 

  constructor(private _usuarioService: UsuarioService, 
    private _snackBar: MatSnackBar, private router:Router){

    //this.cargarUsuario();
  }

  ngOnInit():void{
    this.cargarUsuario();
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort ;
  } 
  

  //NUEVO columnas
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filteredData
  }

  cargarUsuario(){
    this.listUsuario=this._usuarioService.getUsuario()
    this. dataSource = new MatTableDataSource(this._usuarioService.getUsuario());
  }


  eliminarUsuario(element: Usuario){
    const index = this.dataSource.data.indexOf(element);
    this._usuarioService.eliminarUsuario(index);
     // Actualiza el dataSource con la nueva lista de usuarios
    this.dataSource.data = this._usuarioService.getUsuario();
    // Forzar la actualización de la vista
    this.dataSource._updateChangeSubscription();    
    this._snackBar.open('El Usuario  Fue Eliminado Con Exito.','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    // verticalPosition:'top'
    });
  }

  buscarUsuario(element: Usuario) {
    const usuarioEncontrado = this._usuarioService.buscarUsuario(element.usuario);
    if (usuarioEncontrado) {
      console.log("Usuario encontrado:", usuarioEncontrado);
    } else {
      console.log("Usuario no encontrado");
    }
  }

  updateUsuario( element: Usuario) {
    console.log( "uaurioComponente: "+  JSON.stringify(element, null, 2));
    this.router.navigate(["dashboard/editar-usuario/"+element.id]);

  }
  

/*
  buscarUsuario(element: Usuario){
    const index = this.dataSource.data.indexOf(element);
    console.log("buscar referencia: ("+index+") - usaario:"+this.listUsuario[index].usuario);
    console.log("usuario: " + element.usuario+ " nombre: "+element.nombre);
  }
  actualizarUsuario(element: Usuario){
    const index = this.dataSource.data.indexOf(element);
    console.log("actualiar referecnia: ("+index+") - usaario:"+this.listUsuario[index].usuario);
  }

*/


  

}
