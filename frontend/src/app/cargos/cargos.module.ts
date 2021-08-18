import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargosListaComponent } from './cargos-lista/cargos-lista.component';
import { CargosRoutingModule } from './cargos-routing.module';



@NgModule({
  declarations: [
    CargosListaComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule
  ]
})
export class CargosModule { }
