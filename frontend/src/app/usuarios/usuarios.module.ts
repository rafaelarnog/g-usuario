import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosSalvarComponent } from './usuarios-salvar/usuarios-salvar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    UsuariosListaComponent,
    UsuariosSalvarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgxDatatableModule
  ]
})
export class UsuariosModule { }
