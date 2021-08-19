import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from '../perfis/perfil';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioUrl: string = environment.apiUrl+'/api/usuario';

  constructor( private http: HttpClient ) { }

  create( usuario: Usuario ) : Observable<Usuario> {
    return this.http.post<Usuario>(this.usuarioUrl+'/add',usuario);
  }

  edit( usuario: Usuario ) : Observable<any> {
    return this.http.put<Usuario>(this.usuarioUrl+'/edit/'+usuario.id, usuario);
  }

  getPerfis() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioUrl);
  }

  getUsuarioById(id: number) : Observable<Usuario> {
    return this.http.get<any>(this.usuarioUrl+'/'+id);
  }

  delete(usuario: Usuario) : Observable<any> {
    return this.http.delete<any>(this.usuarioUrl+'/remove/'+usuario.id);
  }
}