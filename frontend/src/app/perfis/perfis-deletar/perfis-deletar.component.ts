import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Perfil } from '../perfil';
import { PerfisService } from '../perfis.service';

@Component({
  selector: 'app-perfis-deletar',
  templateUrl: './perfis-deletar.component.html',
  styleUrls: ['./perfis-deletar.component.scss']
})
export class PerfisDeletarComponent implements OnInit {

  //Id perfil
  @Input() id: number | undefined;

  //Perfil
  perfil: Perfil = new Perfil();

  constructor(
    public activeModal: NgbActiveModal,
    public perfilService: PerfisService 
  ) { }

  ngOnInit(): void {
    if(this.id != 0 && this.id != undefined){
      this.perfilService
      .getPerfilById(this.id)
      .subscribe(
        response => {
          this.perfil = response;
        }
      );
    }
  }

  delete(){
    this.perfilService
      .delete(this.perfil)
      .subscribe( () => {
        this.activeModal.close();
      });
  }

}
