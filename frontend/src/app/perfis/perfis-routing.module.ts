import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfisListaComponent } from './perfis-lista/perfis-lista.component';

const routes: Routes = [
  { path: 'perfis', component: PerfisListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfisRoutingModule { }