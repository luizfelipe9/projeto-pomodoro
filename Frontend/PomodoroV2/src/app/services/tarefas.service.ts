import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';
import { Response } from '../models/response';


@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private apiUrl = environment.api

  constructor(private http:HttpClient ) {  }

  getTarefas(): Observable<Response<Tarefa[]>> {
    return this.http.get<Response<Tarefa[]>>(`${this.apiUrl}get`)
  }


  saveTarefas(tarefa: Tarefa){
    return this.http.post<Tarefa>(`${this.apiUrl}post`, tarefa);

  }

  deleteTarefas(id: number){
    const url = `${this.apiUrl}delete/${id}`;
    return this.http.delete(url);
  }

}
