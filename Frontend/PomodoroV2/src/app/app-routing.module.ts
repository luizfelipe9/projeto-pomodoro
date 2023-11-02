import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task/todo', component: TabelaComponent},
  {path: 'task', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
