import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

  constructor() { }

  getUsuario(){
    return this.listUsuario.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuario.splice(index,1);
  }

  agregarUsuario(usuario: Usuario){
    //this.listUsuario.push();
    this.listUsuario.unshift(usuario);
  }
  buscarUsuario(email: string): Usuario | undefined {
    return this.listUsuario.find(user => user.usuario === email);
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
  updateUsuario(id: number,usuario: Usuario):boolean{

    console.log("id del usuario: "+id);
    //console.log("usuario: "+usuario);
  
    const index = this.listUsuario.findIndex(user => user.id === id);
    //console.log("index del arreglo: "+index);

    // Si el usuario existe, actualizarlo
    if (index !== -1) {
      this.listUsuario[index] = usuario;
      
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
    return   this.listUsuario.find(user => user.id === id);
  }
}
