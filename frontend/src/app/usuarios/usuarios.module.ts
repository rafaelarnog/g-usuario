import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    UsuariosListaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
