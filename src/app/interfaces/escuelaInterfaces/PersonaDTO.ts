


export interface PersonaDTO {
    idPersona?: number; // El '?' indica que es opcional
    nombre: string;
    apellido: string;
    fechaNacimiento: string; // LocalDate se representa como string en JSON (ISO 8601)
    email: string;
    telefono: string;
    password: string;
    tipo?: TipoPersona; // El '?' indica que es opcional
  }
  
  export enum TipoPersona {
    ESTUDIANTE = 'ESTUDIANTE',
    PROFESOR = 'PROFESOR',
    ADMINISTRATIVO = 'ADMINISTRATIVO'
  }