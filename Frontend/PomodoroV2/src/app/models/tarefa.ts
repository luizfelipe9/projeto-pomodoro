export interface Tarefa {
  id: number,
  tarefa: string;
  hora: number;
  minuto: number;
  segundo: number;
  created_at?: Date;
  updated_at?: Date;
}
