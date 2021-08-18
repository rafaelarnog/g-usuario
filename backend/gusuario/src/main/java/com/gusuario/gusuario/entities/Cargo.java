package com.gusuario.gusuario.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Cargo {

    @Id
    @GeneratedValue
    private Long id;

    private String nome;
}
