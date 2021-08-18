package com.gusuario.gusuario.entities;

import com.gusuario.gusuario.enums.SexoPessoa;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
abstract class Pessoa {

    private String nome;
    private String cpf;
    private Date dataNascimento;
    private SexoPessoa sexo;
}
