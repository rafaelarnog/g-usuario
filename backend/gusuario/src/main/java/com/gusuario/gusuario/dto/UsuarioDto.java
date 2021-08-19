package com.gusuario.gusuario.dto;

import com.gusuario.gusuario.enums.SexoPessoa;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class UsuarioDto {
    private Long id;
    private String nome;
    private String cpf;
    private Date dataNascimento;
    private SexoPessoa sexo;
    private Long cargoId;
    private List<Long> perfisIds;
}
