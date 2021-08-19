import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  private cargoUrl: string = environment.apiUrl+'/api/cargo';

  constructor( private http: HttpClient ) { }

  create( cargo: Cargo ) : Observable<Cargo> {
    return this.http.post<Cargo>(this.cargoUrl+'/add',cargo);
  }

  edit( cargo: Cargo ) : Observable<any> {
    return this.http.put<Cargo>(this.cargoUrl+'/edit/'+cargo.id, cargo);
  }

  getCargos() : Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.cargoUrl);
  }

  getCargoById(id: number) : Observable<Cargo> {
    return this.http.get<any>(this.cargoUrl+'/'+id);
  }

}
