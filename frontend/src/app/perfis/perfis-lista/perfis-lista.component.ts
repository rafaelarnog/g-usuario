import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Perfil } from '../perfil';
import { PerfisDeletarComponent } from '../perfis-deletar/perfis-deletar.component';
import { PerfisSalvarComponent } from '../perfis-salvar/perfis-salvar.component';
import { PerfisService } from '../perfis.service';

@Component({
  selector: 'app-perfis-lista',
  templateUrl: './perfis-lista.component.html',
  styleUrls: ['./perfis-lista.component.scss']
})
export class PerfisListaComponent implements OnInit {

  //Perfis
  perfis: Perfil[] = [];

  //Tabela
  columnMode: DatatableComponent['columnMode'] = 'force';
  loading: boolean = false;
  messagesTable = {};

  constructor(
    private modalService: NgbModal,
    private perfilService: PerfisService
  ) {
    this.messagesTable = {
      emptyMessage: 'Nenhum perfil encontrado!',

      totalMessage: '- Total',

      selectedMessage: ''
    }
  }

  ngOnInit(): void {
    this.getPerfis();
  }

  openModalPerfis(id: number) {
    const modalRef = this.modalService.open(PerfisSalvarComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
    modalRef.componentInstance.id = id;

    modalRef.result.then((value) => {
      this.getPerfis();
    });
  }

  openModalDeletarPerfis(id: number) {
    const modalRef = this.modalService.open(PerfisDeletarComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
    modalRef.componentInstance.id = id;

    modalRef.result.then((value) => {
      this.getPerfis();
    });
  }

  getPerfis() {
    this.perfilService
      .getPerfis()
      .subscribe( response => this.perfis = response );
  }

}
