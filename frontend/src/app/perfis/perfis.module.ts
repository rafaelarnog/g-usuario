import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfisListaComponent } from './perfis-lista/perfis-lista.component';
import { PerfisRoutingModule } from './perfis-routing.module';
import { PerfisSalvarComponent } from './perfis-salvar/perfis-salvar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    PerfisListaComponent,
    PerfisSalvarComponent
  ],
  imports: [
    CommonModule,
    PerfisRoutingModule,
    NgxDatatableModule
  ]
})
export class PerfisModule { }
