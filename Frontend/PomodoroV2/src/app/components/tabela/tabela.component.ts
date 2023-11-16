import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  tarefas: Tarefa[] = []



  constructor(private tarefaService: TarefasService){
    this.getTarefas()
  }


  getTarefas(): void{
    this.tarefaService.getTarefas().subscribe((items) => {

      const data = items.data

      this.tarefas = data

    })
  }

 async remove(id: number){
    this.tarefaService.deleteTarefas(id).subscribe()
    window.location.reload();

  }

}
