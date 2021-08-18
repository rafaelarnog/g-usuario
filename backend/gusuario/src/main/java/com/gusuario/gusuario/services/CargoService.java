package com.gusuario.gusuario.services;

import com.gusuario.gusuario.entities.Cargo;
import com.gusuario.gusuario.repositories.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CargoService {

    @Autowired
    private CargoRepository cargoRepository;

    public List<Cargo> findAll(){
        return cargoRepository.getAllOrderByNome().stream().collect(Collectors.toList());
    }

    public Cargo create(Cargo cargo){
        if(cargo != null
                && (cargo.getNome() == null
                || cargo.getNome().isBlank())

                || cargoRepository.findCargoByNome(cargo.getNome()) != null
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos!");
        }

        Cargo novoCargo = cargoRepository.save(cargo);

        return cargoRepository.findById(novoCargo.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cargo não encontrado!"));
    }

    public Cargo edit(Cargo cargo, Long id){
        if(cargo != null
                && (cargo.getNome() == null
                || cargo.getNome().isBlank())

                || cargoRepository.findCargoByNome(cargo.getNome()) != null
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos");
        }

        return cargoRepository.findById(id).map(record -> {
            record.setNome(cargo.getNome());
            return cargoRepository.save(record);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cargo não encontrado!"));
    }

}
