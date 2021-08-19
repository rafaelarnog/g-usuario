package com.gusuario.gusuario.controller;

import com.gusuario.gusuario.dto.UsuarioDto;
import com.gusuario.gusuario.entities.Usuario;
import com.gusuario.gusuario.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll(){
        return ResponseEntity.ok().body(usuarioService.findAll());
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Usuario> findById(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(usuarioService.findById(id));
    }

    @PostMapping(value = "/add")
    private ResponseEntity<Usuario> create(@RequestBody Usuario usuario){
        return ResponseEntity.ok().body(usuarioService.create(usuario));
    }

    @PutMapping(value = "/edit/{id}")
    private ResponseEntity<Usuario> edit(@PathVariable("id") Long id, @RequestBody Usuario usuario){
        return ResponseEntity.ok().body(usuarioService.edit(usuario,id));
    }

    @DeleteMapping(value = "/remove/{id}")
    private ResponseEntity<Usuario> remove(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(usuarioService.remove(id));
    }
}
