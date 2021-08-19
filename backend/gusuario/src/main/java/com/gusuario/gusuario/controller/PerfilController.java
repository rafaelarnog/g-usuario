package com.gusuario.gusuario.controller;

import com.gusuario.gusuario.entities.Perfil;
import com.gusuario.gusuario.services.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perfil")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;

    @GetMapping
    public ResponseEntity<List<Perfil>> findAll(){
        return ResponseEntity.ok().body(perfilService.findAll());
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Perfil> findById(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(perfilService.findById(id));
    }

    @PostMapping(value = "/add")
    private ResponseEntity<Perfil> create(@RequestBody Perfil perfil){
        return ResponseEntity.ok().body(perfilService.create(perfil));
    }

    @PutMapping(value = "/edit/{id}")
    private ResponseEntity<Perfil> edit(@PathVariable("id") Long id, @RequestBody Perfil perfil){
        return ResponseEntity.ok().body(perfilService.edit(perfil,id));
    }

    @DeleteMapping(value = "/remove/{id}")
    private ResponseEntity<Perfil> remove(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(perfilService.remove(id));
    }
}
