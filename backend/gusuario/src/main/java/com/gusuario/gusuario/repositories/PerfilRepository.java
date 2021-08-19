package com.gusuario.gusuario.repositories;

import com.gusuario.gusuario.entities.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerfilRepository extends JpaRepository<Perfil, Long> {

    Perfil findPerfilByNome(String nome);

    @Query("SELECT perfil FROM Perfil perfil ORDER BY perfil.nome ASC")
    List<Perfil> getAllOrderByNome();
}
