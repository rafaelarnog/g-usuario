import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargosListaComponent } from './cargos-lista/cargos-lista.component';
import { CargosRoutingModule } from './cargos-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CargosCadastroComponent } from './cargos-cadastro/cargos-cadastro.component';



@NgModule({
  declarations: [
    CargosListaComponent,
    CargosCadastroComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    NgxDatatableModule
  ]
})
export class CargosModule { }
