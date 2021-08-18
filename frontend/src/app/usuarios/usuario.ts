import { Cargo } from "../cargos/cargo";
import { Perfil } from "../perfis/perfil";

export class Usuario {
    id: number = -1;
    nome: string = "";
    cpf: string = "";
    dataNascimento = "";
    sexo!: boolean;
    cargo: Cargo = new Cargo();
    perfis: Perfil[] = [];
}