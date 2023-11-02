import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';


@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private apiUrl = environment.api

  constructor(private http:HttpClient ) {  }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl)
  }

  saveTarefas(tarefa: Tarefa){
    return this.http.post<Tarefa>(this.apiUrl, tarefa);

    console.log(tarefa)

  }

}
