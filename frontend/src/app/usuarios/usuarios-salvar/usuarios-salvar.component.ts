import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cargo } from 'src/app/cargos/cargo';
import { CargosService } from 'src/app/cargos/cargos.service';
import { Perfil } from 'src/app/perfis/perfil';
import { PerfisService } from 'src/app/perfis/perfis.service';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-salvar',
  templateUrl: './usuarios-salvar.component.html',
  styleUrls: ['./usuarios-salvar.component.scss'],
  providers: [DatePipe]
})
export class UsuariosSalvarComponent implements OnInit {

  //Id perfil
  @Input() id: number | undefined;

  //Perfil
  usuario: Usuario = new Usuario();

  //Cargos
  cargos: Cargo[] = [];
  cargoId: number = 0;

  //Perfis
  perfis: Perfil[] = [];
  perfisSelected: Perfil[] = [];

  //Textos
  titulo: string = "Cadastrar Usuário";
  acao: string = "Cadastrar";

  //Data usuário
  dataNascUsuario!: any;

  constructor(
    public activeModal: NgbActiveModal,
    public cargoService: CargosService,
    public perfilService: PerfisService,
    public usuarioService: UsuariosService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.cargoService
      .getCargos()
      .subscribe( response => this.cargos = response );

    this.perfilService
      .getPerfis()
      .subscribe( response => this.perfis = response );
    
    if(this.id != 0 && this.id != undefined){
      this.usuarioService
        .getUsuarioById(this.id)
        .subscribe(
          response => {
            this.usuario = response;
            this.titulo = "Editar Usuário";
            this.acao = "Editar"
            this.cargoId = this.usuario.cargo.id;
            this.dataNascUsuario = this.datePipe.transform(this.usuario.dataNascimento, 'yyyy-MM-dd', 'UTC');
          },
          errorResponse => {
            this.usuario = new Usuario();
          }
        );
    }
  }

  save(){

    this.usuario.perfis = this.perfisSelected;
    this.usuario.dataNascimento = this.dataNascUsuario;

    if(this.id){
      this.usuarioService
        .edit(this.usuario)
        .subscribe( response => {
          this.activeModal.close();
        },
        errorResponse => {
          console.log(errorResponse);
        });
    } else{
      this.usuarioService
        .create(this.usuario)
        .subscribe( () => {
          this.activeModal.close();
        },
        errorResponse => {
          console.log(errorResponse.error.status);
        });
    }
    
  }

  getCargo(){
    this.cargoService
      .getCargoById(this.cargoId)
      .subscribe( response => {
        this.usuario.cargo = response;
      })
  }

  onCheckboxChangeFn(p: Perfil){
    var indice = this.perfisSelected.findIndex(obj => obj.id == p.id);
    if(indice == -1){
      this.perfisSelected.push(p);
    }
    else {
      this.perfisSelected.splice(indice, 1);
    }
  }

  isChecked(p : Perfil) {
    var perfisAtual = this.usuario.perfis;
    var indice = perfisAtual.findIndex(obj => obj.id == p.id);
    if(indice == -1){
      return false;
    }
    else {
      return true;
    }
  }

}
