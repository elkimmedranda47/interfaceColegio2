export interface MatriculaDTO {
    idMatricula?: number; // Opcional, ya que puede ser generado por el backend
    idEstudiante: number;
    idCurso: number;
    fechaMatricula: string; // LocalDate se representa como string
  }