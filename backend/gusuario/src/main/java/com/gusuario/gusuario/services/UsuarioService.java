package com.gusuario.gusuario.services;

import com.gusuario.gusuario.entities.Usuario;
import com.gusuario.gusuario.repositories.CargoRepository;
import com.gusuario.gusuario.repositories.PerfilRepository;
import com.gusuario.gusuario.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CargoRepository cargoRepository;

    @Autowired
    private PerfilRepository perfilRepository;

    public List<Usuario> findAll(){
        return usuarioRepository.findAll().stream().collect(Collectors.toList());
    }

    public Usuario findById(Long id){
        return usuarioRepository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Usuario create(Usuario usuario){
        if(usuario != null
                && (usuario.getNome() == null
                || usuario.getNome().isBlank()

                || usuario.getCpf() == null
                || usuario.getCpf().isBlank()

                || usuario.getCargo() == null)

                || usuarioRepository.findUsuarioByCpf(usuario.getCpf()) != null

        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos!");
        }

        usuario.setDataCadastro(new Date());

        Usuario novoUsuario = usuarioRepository.save(usuario);
        return usuarioRepository.findById(novoUsuario.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado!"));
    }

    public Usuario edit(Usuario usuario, Long id){
        if(usuario != null
                && usuario.getNome() == null
                || usuario.getNome().isBlank()

                || usuario.getCpf() == null
                || usuario.getCpf().isBlank()

                || usuario.getCargo() == null
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos");
        }

        return usuarioRepository.findById(id).map(record -> {
            record.setNome(usuario.getNome());
            record.setCpf(usuario.getCpf());
            record.setSexo(usuario.getSexo());
            record.setDataNascimento(usuario.getDataNascimento());
            record.setCargo(usuario.getCargo());
            record.setPerfis(usuario.getPerfis());
            return usuarioRepository.save(record);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado!"));
    }

    public Usuario remove(Long id){
        return usuarioRepository.findById(id).map(record -> {
            usuarioRepository.deleteById(id);
            return record;
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado!"));
    }
}
