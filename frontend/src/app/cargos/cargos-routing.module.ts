import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargosCadastroComponent } from './cargos-cadastro/cargos-cadastro.component';
import { CargosListaComponent } from './cargos-lista/cargos-lista.component';

const routes: Routes = [
  { path: 'cargos', component: CargosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }