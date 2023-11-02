import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

form: FormGroup;

constructor(private formBuilder: FormBuilder, private tarefaService: TarefasService){

  this.form = this.formBuilder.group({

    tarefa: ['', Validators.required],
    hora: [null, Validators.required],
    minuto: [null, Validators.required],
    segundo: [null, Validators.required],

  })

}
  ngOnInit(): void {

  }



OnSubmit(){
  this.tarefaService.saveTarefas(this.form.value).subscribe(result => console.log(result));
  console.log(this.form.value)
}


}
