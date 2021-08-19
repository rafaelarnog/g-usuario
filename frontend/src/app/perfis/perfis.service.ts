import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfisService {

  private perfilUrl: string = environment.apiUrl+'/api/perfil';

  constructor( private http: HttpClient ) { }

  create( perfil: Perfil ) : Observable<Perfil> {
    return this.http.post<Perfil>(this.perfilUrl+'/add',perfil);
  }

  edit( perfil: Perfil ) : Observable<any> {
    return this.http.put<Perfil>(this.perfilUrl+'/edit/'+perfil.id, perfil);
  }

  getPerfis() : Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.perfilUrl);
  }

  getPerfilById(id: number) : Observable<Perfil> {
    return this.http.get<any>(this.perfilUrl+'/'+id);
  }

  delete(perfil: Perfil) : Observable<any> {
    return this.http.delete<any>(this.perfilUrl+'/remove/'+perfil.id);
  }
}
