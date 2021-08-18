import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Usuario } from '../usuario';
import { UsuariosSalvarComponent } from '../usuarios-salvar/usuarios-salvar.component';

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

  constructor(private modalService: NgbModal) { 
    this.messagesTable = {
      emptyMessage: 'Nenhum usuário encontrado!',

      totalMessage: '- Total',

      selectedMessage: ''
    }
  }

  ngOnInit(): void {
  }

  openModalUsuarios() {
    const modalRef = this.modalService.open(UsuariosSalvarComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
  }

}
