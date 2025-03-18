/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioMatriculaService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
//import { Usuario } from '../interfaces/usuario';
import { PersonaDTO,TipoPersona } from '../interfaces/escuelaInterfaces/PersonaDTO';
import { RouterLink } from '@angular/router';
import { MatriculaDTO } from '../interfaces/escuelaInterfaces/MatriculaDTO';
import { CursoDTO } from '../interfaces/escuelaInterfaces/CursoDTO';

@Injectable({
  providedIn: 'root'
})
export class InicioMatriculaService {
  
  listCurso: CursoDTO[] = [
    {
    
        idCurso: 1,
        nombre: 'Física I',
        descripcion: 'Mecánica clásica y termodinámica',
        creditos: 3,
        idProfesor: 2,
    
    },
    {
      
        idCurso: 2,
        nombre: 'Matemáticas II',
        descripcion: 'Cálculo avanzado',
        creditos: 4,
        idProfesor: 3,
     
     
    },
    {
     
    
        idCurso: 3,
        nombre: 'Programación Orientada a Objetos',
        descripcion: 'Principios de POO en Java',
        creditos: 3,
        idProfesor: 4,
     
     
    },
  ];

  
    // Puedes agregar más objetos PersonaDTO aquí
    listMatriculas: MatriculaDTO[] = [
      { idMatricula: 1, idEstudiante: 1, idCurso: 1, fechaMatricula: '2024-03-15' },
      { idMatricula: 2, idEstudiante: 4, idCurso: 2, fechaMatricula: '2024-03-15' },
      { idMatricula: 3, idEstudiante: 7, idCurso: 3, fechaMatricula: '2024-03-15' },
    ];
  

  constructor() { }

  getCursos(){
    return this.listCurso.slice();
  }

  eliminarUsuario(index:number){
    this.listMatriculas.splice(index,1);
  }

  agregarUsuario(MatriculaDTO: MatriculaDTO){
    //this.listUsuario.push();
    this.listMatriculas.unshift(MatriculaDTO);




  }
  /*
  buscarUsuario(email: string): MatriculaDTO | undefined {
    return this.listMatriculas.find(user => user.email === email);
  }
  */
  buscarUsuario(idMatricula: number): CursoDTO | undefined {
    return this.listCurso.find(matricula => matricula.idCurso === idMatricula);
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
  updateUsuario(id: number,MatriculaDTO: MatriculaDTO):boolean{

    console.log("id del MatriculaDTO: "+id);
    //console.log("PersonaDTO: "+PersonaDTO);
  
    const index = this.listMatriculas.findIndex(user => user.idMatricula === id);
    //console.log("index del arreglo: "+index);

    // Si el usuario existe, actualizarlo
    if (index !== -1) {
      this.listMatriculas[index] = MatriculaDTO;
      
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
    return   this.listMatriculas.find(user => user.idMatricula === id);
  }

  

}
