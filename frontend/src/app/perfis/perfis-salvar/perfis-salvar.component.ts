import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Perfil } from '../perfil';
import { PerfisService } from '../perfis.service';

@Component({
  selector: 'app-perfis-salvar',
  templateUrl: './perfis-salvar.component.html',
  styleUrls: ['./perfis-salvar.component.scss']
})
export class PerfisSalvarComponent implements OnInit {

  //Id perfil
  @Input() id: number | undefined;

  //Perfil
  perfil: Perfil = new Perfil();

  //Textos
  titulo: string = "Cadastrar Perfil";
  acao: string = "Cadastrar";

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
          this.titulo = "Editar Perfil";
          this.acao = "Editar"
        },
        errorResponse => {
          this.perfil = new Perfil();
        }
      );
    }
  }

  save(){
    if(this.id){
      this.perfilService
        .edit(this.perfil)
        .subscribe( response => {
          this.activeModal.close();
        },
        errorResponse => {
          console.log(errorResponse);
        });
    } else{
      this.perfilService
        .create(this.perfil)
        .subscribe( () => {
          this.activeModal.close();
        },
        errorResponse => {
          console.log(errorResponse.error.status);
        });
    }
  }

}
