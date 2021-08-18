package com.gusuario.gusuario.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class Usuario extends Pessoa{

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Cargo cargo;

    @ManyToMany
    private List<Perfil> perfis;
}
