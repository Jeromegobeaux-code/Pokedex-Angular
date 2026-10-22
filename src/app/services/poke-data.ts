import { Inject, Service, WritableSignal} from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { PkmDto } from '../models/pkm-dto';
import { inject, Injectable } from '@angular/core';import { forkJoin, Observable, switchMap } from 'rxjs';
import {PkmPreviewDto} from '../models/pkm-preview-dto';
import {PokemonListResponse} from '../models/pkm-list';



@Service()
export class PokeData {
  private _http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2';

  getFirstGeneration(): Observable<PkmPreviewDto[]> {
    return this._http
      .get<PokemonListResponse>(`${this.apiUrl}/pokemon?limit=151`)
      .pipe(
        switchMap((list) =>
          forkJoin(list.results.map((item) => this._http.get<PkmPreviewDto>(item.url))),
        ),
      );
  }
}
