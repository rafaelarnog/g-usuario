import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargosListaComponent } from './cargos-lista/cargos-lista.component';
import { CargosRoutingModule } from './cargos-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CargosCadastroComponent } from './cargos-cadastro/cargos-cadastro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CargosListaComponent,
    CargosCadastroComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    NgxDatatableModule,
    FormsModule
  ]
})
export class CargosModule { }
