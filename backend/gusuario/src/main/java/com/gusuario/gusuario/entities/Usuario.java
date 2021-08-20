package com.gusuario.gusuario.entities;

import com.gusuario.gusuario.enums.SexoPessoa;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
public class Usuario extends Pessoa{

    @Id
    @GeneratedValue
    private Long id;

    private String nome;

    private String cpf;

    private Date dataNascimento;

    private SexoPessoa sexo;

    private Date dataCadastro;

    @ManyToOne
    private Cargo cargo;

    @ManyToMany
    private List<Perfil> perfis;
}
