import { Injectable } from '@angular/core';
//import { Usuario } from '../interfaces/usuario';
import { PersonaDTO,TipoPersona } from '../interfaces/escuelaInterfaces/PersonaDTO';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  /*

  listUsuario: Usuario[] = [
    { id: 1, usuario: "jazly@gmail.com", nombre: 'jazly', apellido: "martinez", sexo: 'Femenino' },
    { id: 2, usuario: "juan.perez@example.com", nombre: 'Juan', apellido: "Pérez", sexo: 'Masculino' },
    { id: 3, usuario: "maria.sanchez@example.com", nombre: 'María', apellido: "Sánchez", sexo: 'Femenino' },
    { id: 4, usuario: "pedro.gomez@example.com", nombre: 'Pedro', apellido: "Gómez", sexo: 'Masculino' },
    { id: 5, usuario: "laura.rodriguez@example.com", nombre: 'Laura', apellido: "Rodríguez", sexo: 'Femenino' },
    { id: 6, usuario: "carlos.lopez@example.com", nombre: 'Carlos', apellido: "López", sexo: 'Masculino' },
    { id: 7, usuario: "sofia.fernandez@example.com", nombre: 'Sofía', apellido: "Fernández", sexo: 'Femenino' },
    { id: 8, usuario: "miguel.gonzalez@example.com", nombre: 'Miguel', apellido: "González", sexo: 'Masculino' },
    { id: 9, usuario: "ana.martinez@example.com", nombre: 'Ana', apellido: "Martínez", sexo: 'Femenino' },
    { id: 10, usuario: "jorge.garcia@example.com", nombre: 'Jorge', apellido: "García", sexo: 'Masculino' },
    { id: 11, usuario: "isabel.ruiz@example.com", nombre: 'Isabel', apellido: "Ruiz", sexo: 'Femenino' },
    { id: 12, usuario: "david.diaz@example.com", nombre: 'David', apellido: "Díaz", sexo: 'Masculino' },
    { id: 13, usuario: "elena.perez@example.com", nombre: 'Elena', apellido: "Pérez", sexo: 'Femenino' },
    { id: 14, usuario: "alberto.sanchez@example.com", nombre: 'Alberto', apellido: "Sánchez", sexo: 'Masculino' },
    { id: 15, usuario: "paula.gomez@example.com", nombre: 'Paula', apellido: "Gómez", sexo: 'Femenino' },
    { id: 16, usuario: "fernando.rodriguez@example.com", nombre: 'Fernando', apellido: "Rodríguez", sexo: 'Masculino' },
    { id: 17, usuario: "clara.lopez@example.com", nombre: 'Clara', apellido: "López", sexo: 'Femenino' },
    { id: 18, usuario: "roberto.fernandez@example.com", nombre: 'Roberto', apellido: "Fernández", sexo: 'Masculino' },
    { id: 19, usuario: "beatriz.gonzalez@example.com", nombre: 'Beatriz', apellido: "González", sexo: 'Femenino' },
    { id: 20, usuario: "alvaro.martinez@example.com", nombre: 'Álvaro', apellido: "Martínez", sexo: 'Masculino' },
  ];

  */


  
    // Puedes agregar más objetos PersonaDTO aquí
    listUsuario: PersonaDTO[] = [
      { idPersona: 1, nombre: 'Juan', apellido: 'Pérez', fechaNacimiento: '2000-01-01', email: 'juan@example.com', telefono: '+15551234567', password: 'password123', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 2, nombre: 'María', apellido: 'Gómez', fechaNacimiento: '1995-05-15', email: 'maria@example.com', telefono: '+15559876543', password: 'securepass', tipo: TipoPersona.PROFESOR },
      { idPersona: 3, nombre: 'Carlos', apellido: 'Rodríguez', fechaNacimiento: '1988-11-20', email: 'carlos@example.com', telefono: '+15551122334', password: 'adminpass', tipo: TipoPersona.ADMINISTRATIVO },
      { idPersona: 4, nombre: 'Ana', apellido: 'Martínez', fechaNacimiento: '2002-03-10', email: 'ana@example.com', telefono: '+15554455667', password: 'anapass', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 5, nombre: 'Luis', apellido: 'Sánchez', fechaNacimiento: '1990-12-05', email: 'luis@example.com', telefono: '+15557788990', password: 'luispass', tipo: TipoPersona.PROFESOR },
      { idPersona: 6, nombre: 'Sofía', apellido: 'Fernández', fechaNacimiento: '1985-07-22', email: 'sofia@example.com', telefono: '+15552233445', password: 'sofiapass', tipo: TipoPersona.ADMINISTRATIVO },
      { idPersona: 7, nombre: 'Pedro', apellido: 'García', fechaNacimiento: '2001-09-18', email: 'pedro@example.com', telefono: '+15556677889', password: 'pedropass', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 8, nombre: 'Laura', apellido: 'López', fechaNacimiento: '1998-04-30', email: 'laura@example.com', telefono: '+15559900112', password: 'laurapass', tipo: TipoPersona.PROFESOR },
      { idPersona: 9, nombre: 'Javier', apellido: 'Ruiz', fechaNacimiento: '1982-11-08', email: 'javier@example.com', telefono: '+15553344556', password: 'javierpass', tipo: TipoPersona.ADMINISTRATIVO },
      { idPersona: 10, nombre: 'Elena', apellido: 'Díaz', fechaNacimiento: '2003-06-25', email: 'elena@example.com', telefono: '+15558899001', password: 'elenapass', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 11, nombre: 'Miguel', apellido: 'Pérez', fechaNacimiento: '1993-02-14', email: 'miguel@example.com', telefono: '+15551122330', password: 'miguelpass', tipo: TipoPersona.PROFESOR },
      { idPersona: 12, nombre: 'Isabel', apellido: 'Gómez', fechaNacimiento: '1987-08-01', email: 'isabel@example.com', telefono: '+15554455663', password: 'isabelpass', tipo: TipoPersona.ADMINISTRATIVO },
      { idPersona: 13, nombre: 'Roberto', apellido: 'Martínez', fechaNacimiento: '2004-10-28', email: 'roberto@example.com', telefono: '+15557788996', password: 'robertopass', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 14, nombre: 'Carmen', apellido: 'Sánchez', fechaNacimiento: '1996-03-12', email: 'carmen@example.com', telefono: '+15552233449', password: 'carmenpass', tipo: TipoPersona.PROFESOR },
      { idPersona: 15, nombre: 'Andrés', apellido: 'Fernández', fechaNacimiento: '1980-12-30', email: 'andres@example.com', telefono: '+15556677882', password: 'andrespass', tipo: TipoPersona.ADMINISTRATIVO },
      { idPersona: 16, nombre: 'Paula', apellido: 'García', fechaNacimiento: '2005-05-17', email: 'paula@example.com', telefono: '+15559900115', password: 'paulapass', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 17, nombre: 'Ricardo', apellido: 'López', fechaNacimiento: '1999-01-22', email: 'ricardo@example.com', telefono: '+15553344558', password: 'ricardopass', tipo: TipoPersona.PROFESOR },
      { idPersona: 18, nombre: 'Beatriz', apellido: 'Ruiz', fechaNacimiento: '1983-09-03', email: 'beatriz@example.com', telefono: '+15558899003', password: 'beatrizpass', tipo: TipoPersona.ADMINISTRATIVO },
      { idPersona: 19, nombre: 'Sergio', apellido: 'Díaz', fechaNacimiento: '2006-07-09', email: 'sergio@example.com', telefono: '+15551122336', password: 'sergiopass', tipo: TipoPersona.ESTUDIANTE },
      { idPersona: 20, nombre: 'Verónica', apellido: 'Pérez', fechaNacimiento: '1994-04-25', email: 'veronica@example.com', telefono: '+15554455669', password: 'veronicapass', tipo: TipoPersona.PROFESOR }
    ];


  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuario.splice(index,1);
  }

  agregarUsuario(PersonaDTO: PersonaDTO){
    //this.listUsuario.push();
    this.listUsuario.unshift(PersonaDTO);




  }
  buscarUsuario(email: string): PersonaDTO | undefined {
    return this.listUsuario.find(user => user.email === email);
  }
  
  /*actualizarUsuario(usuarioActualizado: Usuario): boolean {
    const index = this.listUsuario.findIndex(user => user.usuario === usuarioActualizado.usuario);

    /*En JavaScript y TypeScript, el método findIndex() busca un elemento dentro de un array.
      Si encuentra el elemento, devuelve su posición (índice) en el array (por ejemplo, 0, 1, 2, etc.).
      Si NO lo encuentra, devuelve -1.
    if (index !== -1) {
      this.listUsuario[index] = usuarioActualizado;
      return true;
    }
    return false;
  }
  */

  //hacer un get al servidor APi
  updateUsuario(id: number,PersonaDTO: PersonaDTO):boolean{

    console.log("id del PersonaDTO: "+id);
    //console.log("PersonaDTO: "+PersonaDTO);
  
    const index = this.listUsuario.findIndex(user => user.idPersona === id);
    //console.log("index del arreglo: "+index);

    // Si el usuario existe, actualizarlo
    if (index !== -1) {
      this.listUsuario[index] = PersonaDTO;
      
      //console.log('Usuario actualizado localmente:', this.listUsuario[index]);
      return true;
    } else {
      //console.error('Usuario no encontrado con el ID:', id);
      return false;
    }
    /*
    const url = `https://tudominio.com/api/usuarios/${id}`; // Reemplaza con tu URL de la API
    return this.http.put(url, usuario); // Usa PUT o PATCH según tu API   
    */
  }

  getUsuairoId(id:number){
    return   this.listUsuario.find(user => user.idPersona === id);
  }
}
