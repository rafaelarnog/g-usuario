package com.gusuario.gusuario.repositories;

import com.gusuario.gusuario.entities.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Long> {

    Cargo findCargoByNome(String nome);

    @Query("SELECT cargo FROM Cargo cargo ORDER BY cargo.nome ASC")
    List<Cargo> getAllOrderByNome();
}
