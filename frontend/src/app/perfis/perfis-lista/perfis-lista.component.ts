import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Perfil } from '../perfil';
import { PerfisSalvarComponent } from '../perfis-salvar/perfis-salvar.component';

@Component({
  selector: 'app-perfis-lista',
  templateUrl: './perfis-lista.component.html',
  styleUrls: ['./perfis-lista.component.scss']
})
export class PerfisListaComponent implements OnInit {

  //Perfis
  perfis: Perfil[] = [
    { id: 1, nome: 'Perfil 1' },
    { id: 2, nome: 'Perfil 2' },
    { id: 3, nome: 'Perfil 3' }
  ];

  //Tabela
  columnMode: DatatableComponent['columnMode'] = 'force';
  loading: boolean = false;
  messagesTable = {};

  constructor(private modalService: NgbModal) {
    this.messagesTable = {
      emptyMessage: 'Nenhum perfil encontrado!',

      totalMessage: '- Total',

      selectedMessage: ''
    }
  }

  ngOnInit(): void {
  }

  openModalPerfis() {
    const modalRef = this.modalService.open(PerfisSalvarComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
  }

}
