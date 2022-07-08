import { Injectable } from '@angular/core';
import {
  ICreatePoke,
  IFormData,
  IPoke,
  IPokeRes,
  IUserDetails,
  IUpdatePoke,
} from 'src/app/app.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  AccessToken: string = '';
  baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getPokemons(): Observable<IPokeRes> {
    return this.httpClient.get(
      `${this.baseUrl}/pokemon`
    ) as Observable<IPokeRes>;
  }

  createPokemon(form: ICreatePoke): Observable<IPokeRes> {
    return this.httpClient.post(
      `${this.baseUrl}/pokemon`,
      form
    ) as Observable<IPokeRes>;
  }

  updatePokemon(form: IUpdatePoke) {
    console.log(form);
    return this.httpClient.put(
      `${this.baseUrl}/pokemon`,
      form
    ) as Observable<IPokeRes>;
  }

  deletePokemon(getId: IUpdatePoke) {
    console.log(getId.id);
    return this.httpClient.delete(
      `${this.baseUrl}/pokemon/${getId.id}`
    ) as Observable<IPokeRes>;
  }
  getType() {
    return this.httpClient.get(`${this.baseUrl}/pokemon`);
  }
}
