import { PersonaDTO } from './PersonaDTO'; // Asegúrate de que la ruta sea correcta

export interface ProfesorDTO extends PersonaDTO {
  especialidad: string;
  fechaContratacion: string; // LocalDate se representa como string
}