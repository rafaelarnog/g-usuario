import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Usuario } from '../usuario';
import { UsuariosSalvarComponent } from '../usuarios-salvar/usuarios-salvar.component';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  //Usuário
  usuarios: Usuario[] = [];

  //Tabela
  columnMode: DatatableComponent['columnMode'] = 'force';
  loading: boolean = false;
  messagesTable = {};

  constructor(
    private modalService: NgbModal,
    private usuarioService: UsuariosService
  ) { 
    this.messagesTable = {
      emptyMessage: 'Nenhum usuário encontrado!',

      totalMessage: '- Total',

      selectedMessage: ''
    }
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  openModalUsuarios(id: number) {
    const modalRef = this.modalService.open(UsuariosSalvarComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
    modalRef.componentInstance.id = id;

    modalRef.result.then((value) => {
      this.getUsuarios();
    });
  }

  getUsuarios() {
    this.usuarioService
      .getPerfis()
      .subscribe( response => {
        this.usuarios = response;
      });
  }

}
