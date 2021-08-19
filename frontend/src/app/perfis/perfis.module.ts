import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfisListaComponent } from './perfis-lista/perfis-lista.component';
import { PerfisRoutingModule } from './perfis-routing.module';
import { PerfisSalvarComponent } from './perfis-salvar/perfis-salvar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { PerfisDeletarComponent } from './perfis-deletar/perfis-deletar.component';



@NgModule({
  declarations: [
    PerfisListaComponent,
    PerfisSalvarComponent,
    PerfisDeletarComponent
  ],
  imports: [
    CommonModule,
    PerfisRoutingModule,
    NgxDatatableModule,
    FormsModule
  ]
})
export class PerfisModule { }
