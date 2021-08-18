import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfis-salvar',
  templateUrl: './perfis-salvar.component.html',
  styleUrls: ['./perfis-salvar.component.scss']
})
export class PerfisSalvarComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
