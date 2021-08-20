import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cargo } from '../cargo';
import { CargosService } from '../cargos.service';

@Component({
  selector: 'app-cargos-cadastro',
  templateUrl: './cargos-cadastro.component.html',
  styleUrls: ['./cargos-cadastro.component.scss']
})
export class CargosCadastroComponent implements OnInit {

  //Id cargo
  @Input() id: number | undefined;

  //Cargo
  cargo: Cargo = new Cargo();

  //Textos
  titulo: string = "Cadastrar Cargo";
  acao: string = "Cadastrar";

  //Erro
  error: boolean = false;
  mensagemErro: string = "";

  constructor(
    public activeModal: NgbActiveModal,
    public cargoService: CargosService
  ) { }

  ngOnInit(): void {
    if(this.id != 0 && this.id != undefined){
      this.cargoService
      .getCargoById(this.id)
      .subscribe(
        response => {
          this.cargo = response;
          this.titulo = "Editar Cargo";
          this.acao = "Editar"
        },
        errorResponse => {
          this.cargo = new Cargo();
        }
      );
    }
  }

  save(){
    if(/^\s+$/.test(this.cargo.nome)) {
      this.error = true;
      this.mensagemErro = "Campo obrigatório!";
    }
    else {
      if(this.id){
        this.cargoService
          .edit(this.cargo)
          .subscribe( response => {
            this.activeModal.close();
          },
          error => {
            this.error = true,
            this.mensagemErro = "Cargo já existente!"
          });
      } else{
        this.cargoService
          .create(this.cargo)
          .subscribe( response => {
            this.activeModal.close();
          },
          error => {
            this.error = true,
            this.mensagemErro = "Cargo já existente!"
          });
      }
    }
  }

}
