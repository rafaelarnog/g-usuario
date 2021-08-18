import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfisListaComponent } from './perfis-lista/perfis-lista.component';
import { PerfisRoutingModule } from './perfis-routing.module';



@NgModule({
  declarations: [
    PerfisListaComponent
  ],
  imports: [
    CommonModule,
    PerfisRoutingModule
  ]
})
export class PerfisModule { }
