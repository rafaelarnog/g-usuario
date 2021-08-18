package com.gusuario.gusuario.controller;

import com.gusuario.gusuario.entities.Cargo;
import com.gusuario.gusuario.services.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cargo")
public class CargoController {

    @Autowired
    private CargoService cargoService;

    @GetMapping
    public ResponseEntity<List<Cargo>> findAll(){
        return ResponseEntity.ok().body(cargoService.findAll());
    }

    @PostMapping(value = "/add")
    private ResponseEntity<Cargo> create(@RequestBody Cargo cargo){
        return ResponseEntity.ok().body(cargoService.create(cargo));
    }

    @PutMapping(value = "/edit/{id}")
    private ResponseEntity<Cargo> edit(@PathVariable("id") Long id, @RequestBody Cargo cargo){
        return ResponseEntity.ok().body(cargoService.edit(cargo,id));
    }
}
