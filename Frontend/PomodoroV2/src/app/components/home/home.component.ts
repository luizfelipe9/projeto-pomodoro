import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //  public value: number;
  modalRef!: BsModalRef;
  selectedItem: any;
  item: any;

  tarefas: Tarefa[] = []



  public workTimeHours = 1
  public workTimeMinutes = 0
  public workTimeSeconds = 5
  private timer: any;
  private date = new Date();
  private animate: boolean = false;

  constructor( private tarefaService: TarefasService, private modalService: BsModalService){
    this.getTarefas()


  }


  ngAfterViewInit(): void{
   // this.shareService.value.subscribe(
   //  value => this.value = value
   // )
  }




  updateTime(){
    this.date.setHours(this.workTimeHours);
    this.date.setMinutes(this.workTimeMinutes);
    this.date.setSeconds(this.workTimeSeconds);
    this.date.setMilliseconds(0);
    const time = this.date.getTime();
    this.date.setTime(time - 1000);

    this.workTimeHours = this.date.getHours();
    this.workTimeMinutes = this.date.getMinutes();
    this.workTimeSeconds = this.date.getSeconds();


      if (this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0){
        clearInterval(this.timer);
        this.animate = true;
        setTimeout(() => {
          this.stop();
        }, 5000)
      };
  };

  start(){
    if(this.workTimeHours > 0 || this.workTimeMinutes > 0 || this.workTimeSeconds > 0){
      this.updateTime();

      if(this.workTimeSeconds > 0){
        this.timer = setInterval(() => {
          this.updateTime();
        }, 1000);
      }

    }
  }

  stop(){
    this.animate = false;
    clearInterval(this.timer);
  }

  reset(){
    this.workTimeHours = this.workTimeHours;
    this.workTimeMinutes = this.workTimeMinutes;
    this.workTimeSeconds = this.workTimeSeconds;
    this.stop();
  }

  getTarefas(): void{
    this.tarefaService.getTarefas().subscribe((tarefas) => (this.tarefas = tarefas))
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  selecionarItem(item: Tarefa): void {
    this.selectedItem = item;
    console.log(item);
    this.workTimeHours = item.hora;
    this.workTimeMinutes = item.minuto;
    this.workTimeSeconds = item.segundo;
  }


}
