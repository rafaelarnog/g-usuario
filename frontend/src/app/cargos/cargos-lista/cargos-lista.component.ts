import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Cargo } from '../cargo';
import { CargosCadastroComponent } from '../cargos-cadastro/cargos-cadastro.component';

@Component({
  selector: 'app-cargos-lista',
  templateUrl: './cargos-lista.component.html',
  styleUrls: ['./cargos-lista.component.scss']
})
export class CargosListaComponent implements OnInit {

  //Cargos
  cargos: Cargo[] = [
    { id: 1, nome: 'Desenvolvedor' },
    { id: 2, nome: 'Product Owner' },
    { id: 3, nome: 'Gerente de Projetos' }
  ];

  //Tabela
  columnMode: DatatableComponent['columnMode'] = 'force';
  loading: boolean = false;
  messagesTable = {};


  constructor(private modalService: NgbModal) {
    this.messagesTable = {
      emptyMessage: 'Nenhum cargo encontrado!',

      totalMessage: '- Total',

      selectedMessage: ''
    }
  }

  ngOnInit(): void {
  }

  openModalCargos() {
    const modalRef = this.modalService.open(CargosCadastroComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
  }

}
