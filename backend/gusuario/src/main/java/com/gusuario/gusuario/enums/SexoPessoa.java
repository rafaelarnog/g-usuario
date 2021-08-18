package com.gusuario.gusuario.enums;

public enum SexoPessoa {
    FEMININO(0, "Feminino"),
    MASCULINO(1, "Masculino");

    public Integer id;
    public String nome;

    SexoPessoa(Integer id, String nome){
        this.id = id;
        this.nome = nome;
    }

}
