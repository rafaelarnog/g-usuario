import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios-salvar',
  templateUrl: './usuarios-salvar.component.html',
  styleUrls: ['./usuarios-salvar.component.scss']
})
export class UsuariosSalvarComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
