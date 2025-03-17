import { PersonaDTO } from './PersonaDTO'; // Asegúrate de que la ruta sea correcta

export interface AdministrativoDTO extends PersonaDTO {
  cargo: string;
  departamento: string;
}