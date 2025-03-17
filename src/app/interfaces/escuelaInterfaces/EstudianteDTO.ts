import { PersonaDTO } from './PersonaDTO'; // Asegúrate de que la ruta sea correcta

export interface EstudianteDTO extends PersonaDTO {
  numeroMatricula: string;
  grado: string;
}