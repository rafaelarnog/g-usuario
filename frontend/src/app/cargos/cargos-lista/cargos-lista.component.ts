import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Cargo } from '../cargo';
import { CargosCadastroComponent } from '../cargos-cadastro/cargos-cadastro.component';
import { CargosService } from '../cargos.service';

@Component({
  selector: 'app-cargos-lista',
  templateUrl: './cargos-lista.component.html',
  styleUrls: ['./cargos-lista.component.scss']
})
export class CargosListaComponent implements OnInit, AfterViewInit {

  //Cargos
  cargos: Cargo[] = [];

  //Tabela
  columnMode: DatatableComponent['columnMode'] = 'force';
  loading: boolean = false;
  messagesTable = {};


  constructor(
    private modalService: NgbModal,
    private cargoService: CargosService
  ) {
    this.messagesTable = {
      emptyMessage: 'Nenhum cargo encontrado!',

      totalMessage: '- Total',

      selectedMessage: ''
    }
  }

  ngOnInit(): void {
    this.getCargos();
  }

  ngAfterViewInit() {
    var navLink = document.getElementsByClassName('nav-item');

    if (navLink != null) {
      for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('active');
      }
    }

    var element = document.getElementById('nav-cargos');
    element?.classList.add('active');
  }

  openModalCargos(id: number) {
    const modalRef = this.modalService.open(CargosCadastroComponent, { size: 'lg', centered: true, scrollable: true, backdrop: 'static'  });
    modalRef.componentInstance.id = id;

    modalRef.result.then((value) => {
      this.getCargos();
    });
  }

  getCargos() {
    this.cargoService
      .getCargos()
      .subscribe( response => this.cargos = response );
  }

}
