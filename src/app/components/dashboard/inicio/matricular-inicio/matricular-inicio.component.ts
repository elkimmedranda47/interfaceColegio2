
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-matricular-inicio',
  standalone: true,
  imports: [],
  templateUrl: './matricular-inicio.component.html',
  styleUrl: './matricular-inicio.component.css'
})
export class MatricularInicioComponent {

}
*/

import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatTableDataSource } from '@angular/material/table';

//import { Usuario } from '../../../../interfaces/usuario';
import { PersonaDTO,TipoPersona } from '../../../../interfaces/escuelaInterfaces/PersonaDTO';

import { UsuarioService } from '../../../../services/usuario.service';

import { InicioMatriculaService } from '../../../../services/inicio-matricula.service';


//CALENDARIO
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatriculaDTO } from '../../../../interfaces/escuelaInterfaces/MatriculaDTO';
import { CursoDTO } from '../../../../interfaces/escuelaInterfaces/CursoDTO';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [SharedModule,RouterLink,CommonModule],
  templateUrl: './matricular-inicio.component.html',
  styleUrl: './matricular-inicio.component.css'
})
export class MatricularInicioComponent {


// Variables para controlar el diseño responsive
sexo: any[]=['Masculino','Femenino']
form: FormGroup;

screenWidth: number;
private id_url:number;

operacion:string = 'AGREGAR';
tiposPersona: string[] = Object.values(TipoPersona);



//////////////////////

listUsuario: CursoDTO[]=[];

  //displayedColumns: string[] = ['id','usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  displayedColumns: string[] = ['idCurso', 'nombre', 'descripcion', 'creditos','idProfesor','acciones'];
   //datasor va ahcer de tipo MatTableDataSource
   dataSource!: MatTableDataSource<any>

   //NUEVO columnas
 
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filteredData
  }



//////////////////////




constructor(
  private fb: FormBuilder,
  private _usuarioService: UsuarioService,

  private _InicioMatriculaService: InicioMatriculaService,
  private router:Router,
  private _snackBar: MatSnackBar,

  private aRouter: ActivatedRoute

) {


  

/*
  this.form = this.fb.group({
    id: [''], // Agrega el control para el id
    PersonaDTO: ['',Validators.required],
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    sexo: ['',Validators.required]

  });
  */
  this.form = this.fb.group({
    idPersona: [''],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    password: ['', ],
    tipo: ['', Validators.required],
  });

  this.screenWidth = window.innerWidth;

  this.id_url = Number(aRouter.snapshot.paramMap.get('id'));
  console.log(this.id_url);
}

ngOnInit():void{
 
  if (this.id_url!=0) {
      this.operacion='EDITAR';
      
      this.getUsuairoId(this.id_url);
  }

  /////////////////
  this.cargarUsuario();
}



// Escucha cambios en el tamaño de la pantalla
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.screenWidth = window.innerWidth;
}

// Métodos para determinar el número de columnas y colspan
getColspanId(): number {
  return this.screenWidth > 600 ? 1 : 1; // Ajusta el valor según tus necesidades
}
getGridColumns(): number {
  return this.screenWidth > 600 ? 4 : 1;
}

getColspanUsuario(): number {
  return this.screenWidth > 600 ? 1 : 1;
}

getColspanImagen(): number {
  return this.screenWidth > 600 ? 3 : 1;
}

getColspanNombre(): number {
  return this.screenWidth > 600 ? 1 : 1;
}

getColspanApellido(): number {
  return this.screenWidth > 600 ? 1 : 1;
}

getColspanSexo(): number {
  return this.screenWidth > 600 ? 1 : 1;
}

getColspanBotones(): number {
  return this.screenWidth > 600 ? 1 : 1;
}




agregarPersona(){
  //console.log(this.form);
/*
  const user: PersonaDTO={

    id: this.form.value.id,
    usuario: this.form.value.usuario,
    nombre: this.form.value.nombre,
    apellido: this.form.value.apellido,
    sexo: this.form.value.sexo
  }
*/


const user: PersonaDTO = {
  idPersona: this.form.value.id, // Asumiendo que 'id' es el ID de la persona
  nombre: this.form.value.nombre,
  apellido: this.form.value.apellido,
  fechaNacimiento: this.form.value.fechaNacimiento, // Obtén la fecha desde el formulario
  email: this.form.value.email, // Obtén el email desde el formulario
  telefono: this.form.value.telefono, // Obtén el teléfono desde el formulario
  password: this.form.value.password, // Obtén la contraseña desde el formulario
  tipo: this.form.value.tipo as TipoPersona, // Obtén el tipo desde el formulario y realiza un cast a TipoPersona
};
  console.log( "Usuario a crear o a tualizar: "+  JSON.stringify(user, null, 2));
  console.log("id del usuario a crear o a tualizar: "+user.idPersona);

  

  if (this.id_url !=0) {
    // AQUI LLEGA EL user pero sin id 
    //operacion es editar
    const actualizado = this._usuarioService.updateUsuario(this.id_url , user);
    if (actualizado) {
      console.log("Usuario atualizado");     
    } else {
      console.log("No se pudo actualizar el usuario");
    }
  }else{
    this._usuarioService.agregarUsuario(user);
  }




  //console.log(this._usuarioService.listUsuario)
  this.router.navigate(["/dashboard/usuarios"]);
  
}


getUsuairoId(id: number) {
  // Obtener el usuario por su ID
  //const usuario: Usuario | undefined = this._usuarioService.getUsuairoId(id);
  const persona: PersonaDTO | undefined = this._usuarioService.getUsuairoId(id);


  // Verificar si el usuario existe
  /*
  if (usuario) {
    // llenar los campos del formulario con los datos del usuario
    this.form.patchValue({
      id: usuario.id,
      nombre: usuario.nombre,
      usuario: usuario.usuario, // Si necesitas otros campos, agrégalos aquí
      apellido: usuario.apellido,
      sexo: usuario.sexo
    });
*/

//datos del estudiante
    if (persona) {
      this.form.patchValue({
        idPersona: persona.idPersona,
        nombre: persona.nombre,
        email: persona.email,     
        tipo: persona.tipo,
        // No incluyo password por seguridad
      });
        // Imprimir el usuario en la consola (opcional, para depuración)
        console.log('Usuario encontrado:', persona);
      } else {
        // Manejar el caso en que el usuario no existe
        console.error('Usuario no encontrado con el ID:', id);
      }
    }
    
  
    getColspanTipo(): number {
      return this.screenWidth > 600 ? 1 : 1; // Ajusta el valor según tus necesidades
    }

    ////////////////////////////////
    buscarUsuario(element: PersonaDTO) {
      const usuarioEncontrado = this._usuarioService.buscarUsuario(element.email);
      if (usuarioEncontrado) {
        console.log("Usuario encontrado:", usuarioEncontrado);
      } else {
        console.log("Usuario no encontrado");
      }
    }
/*
    updateUsuario( element: any) {
      console.log( "uaurioComponente: "+  JSON.stringify(element, null, 2));
      this.router.navigate(["dashboard/editar-usuario/"+element.idPersona]);
  
    }
    */

    updateUsuario(idPersona: number, idCurso: number): void {
      console.log(`Actualizar usuario con ID Persona: ${idPersona} y ID Curso: ${idCurso}`);
      // Aquí puedes agregar la lógica para actualizar el usuario con idPersona e idCurso
  }

    eliminarUsuario(element: PersonaDTO){
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
    

 

 cargarUsuario(){
    this.listUsuario=this._InicioMatriculaService.getCursos()
    this. dataSource = new MatTableDataSource(this._InicioMatriculaService.getCursos());
  }



  matricular(idPersona: number, idCurso: number): void {

    console.log(`Matricular persona con ID: ${idPersona} en curso con ID: ${idCurso}`);

    // Lógica de matriculación:
    // 1. Obtener la persona y el curso (si es necesario)
    const persona = this._usuarioService.getUsuairoId(idPersona);
    // const curso = this._cursoService.getCursoById(idCurso); // Si tienes un servicio para cursos

    // 2. Verificar si la persona y el curso existen (si es necesario)
    if (!persona) {
      this._snackBar.open('Persona no encontrada', 'Cerrar', { duration: 3000 });
      return;
    }

    // 3. Crear el objeto de matrícula (ajusta esto según tu modelo de datos)
    const matricula = {
      idPersona: persona.idPersona,
      idCurso: idCurso,
      fechaMatricula: new Date(), // O la fecha que necesites
      // ... otros campos de la matrícula
    };
    /*

    // 4. Llamar al servicio para guardar la matrícula
    this._usuarioService.matricularPersona(matricula).subscribe({
      next: (response) => {
        console.log('Matrícula guardada:', response);
        this._snackBar.open('Matrícula realizada con éxito', 'Cerrar', { duration: 3000 });
        // Puedes redirigir al usuario o hacer otras acciones después de la matrícula
      },
      error: (error) => {
        console.error('Error al guardar la matrícula:', error);
        this._snackBar.open('Error al realizar la matrícula', 'Cerrar', { duration: 3000 });
      },
    });

    */


    /*
    
    
        private apiUrl = 'TU_API_URL'; // Reemplaza con la URL de tu API

        constructor(private http: HttpClient) { }

        matricular(matricula: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/matriculas`, matricula);
  }
    
    
    */



  }



}
