export interface CursoDTO {
    idCurso?: number; // Opcional, ya que puede ser generado por el backend
    nombre: string;
    descripcion?: string; // Opcional
    creditos: number;
    idProfesor: number;
}  