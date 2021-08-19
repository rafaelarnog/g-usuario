package com.gusuario.gusuario.services;

import com.gusuario.gusuario.entities.Perfil;
import com.gusuario.gusuario.repositories.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PerfilService {

    @Autowired
    private PerfilRepository perfilRepository;

    public List<Perfil> findAll(){
        return perfilRepository.getAllOrderByNome().stream().collect(Collectors.toList());
    }

    public Perfil findById(Long id){
        return perfilRepository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Perfil create(Perfil perfil){
        if(perfil != null
                && (perfil.getNome() == null
                || perfil.getNome().isBlank())

                || perfilRepository.findPerfilByNome(perfil.getNome()) != null
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos!");
        }

        Perfil novoPerfil = perfilRepository.save(perfil);

        return perfilRepository.findById(novoPerfil.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Perfil não encontrado!"));
    }

    public Perfil edit(Perfil perfil, Long id){
        if(perfil != null
                && (perfil.getNome() == null
                || perfil.getNome().isBlank())

                || perfilRepository.findPerfilByNome(perfil.getNome()) != null
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos");
        }

        return perfilRepository.findById(id).map(record -> {
            record.setNome(perfil.getNome());
            return perfilRepository.save(record);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Perfil não encontrado!"));
    }

    public Perfil remove(Long id){
        return perfilRepository.findById(id).map(record -> {
            perfilRepository.deleteById(id);
            return record;
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Perfil não encontrado!"));
    }
}
