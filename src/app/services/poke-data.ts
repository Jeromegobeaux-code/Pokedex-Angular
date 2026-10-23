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

    getFirstGeneration(): Observable<PkmPreviewDto[]>
    {
      const url = `${this.apiUrl}/pokemon?limit=151`;

      return this._http.get<PokemonListResponse>(url).pipe(

        switchMap
        ((response) => {

          // 1. On transforme chaque Pokémon de la liste en une requête HTTP pour obtenir ses détails
          const detailRequests = response.results.map((pokemon) => {
            return this._http.get<PkmPreviewDto>(pokemon.url);
          });

          // 2. forkJoin lance toutes les requêtes en parallèle et attend qu'elles soient toutes finies
          return forkJoin(detailRequests);
        }

        )
      )
    }

    getPkmByID(id:number):Observable<PkmDto>
    {
      return this._http.get<PkmDto>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

  }



