import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { Usuario } from '../../../../interfaces/usuario';
import { PersonaDTO,TipoPersona } from '../../../../interfaces/escuelaInterfaces/PersonaDTO';

import { UsuarioService } from '../../../../services/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [SharedModule,RouterLink,CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {


// Variables para controlar el diseño responsive
sexo: any[]=['Masculino','Femenino']
form: FormGroup;

screenWidth: number;
private id_url:number;

operacion:string = 'AGREGAR';

constructor(
  private fb: FormBuilder,
  private _usuarioService: UsuarioService,
  private router:Router,

  private aRouter: ActivatedRoute

) {
  this.form = this.fb.group({
    id: [''], // Agrega el control para el id
    PersonaDTO: ['',Validators.required],
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    sexo: ['',Validators.required]

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




agregarusuario(){
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
/*
getUsuario (id:number){
  
  this._usuarioService.getUsuairoId(id);
  //this.form.setValue({});
  this.form.patchValue({
    
  });
  console.log(this._usuarioService.getUsuairoId(id));

}

*/

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

    if (persona) {
      this.form.patchValue({
        idPersona: persona.idPersona,
        nombre: persona.nombre,
        apellido: persona.apellido,
        fechaNacimiento: persona.fechaNacimiento,
        email: persona.email,
        telefono: persona.telefono,
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




}
