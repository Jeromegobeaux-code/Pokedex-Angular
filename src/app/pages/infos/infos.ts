import { Component, inject, WritableSignal } from '@angular/core';
import { PokeData } from '../../services/poke-data';
import { PkmDto } from '../../models/pkm-dto';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {AsyncPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { PokemonDescription } from '../../layout/pokemon-description/pokemon-description';
import { PokemonEvolutions } from '../../layout/pokemon-evolutions/pokemon-evolutions';
import { PokemonStats } from '../../layout/pokemon-stats/pokemon-stats';
import { PokemonCapacities } from '../../layout/pokemon-capacities/pokemon-capacities';

@Component({
  imports: [
    AsyncPipe,
    TitleCasePipe,
    DecimalPipe,
    PokemonDescription,
    PokemonEvolutions,
    PokemonStats,
    PokemonCapacities,
  ],
  selector: 'app-infos',
  styleUrl: './infos.css',
  templateUrl: './infos.html',
})
export class Infos {
  private pokemonService = inject(PokeData);

  route: ActivatedRoute = inject(ActivatedRoute);
  pkmID = this.route.snapshot.params['id'];

  //COMPRENDRE COMMENT FAIRE UNE CONVERSION
  pokemon: Observable<PkmDto> = this.pokemonService.getPkmByID(this.pkmID);

  Content: String = 'Evolution';

  ToDescription() {
    this.Content = 'Description';
  }

  ToEvolution() {
    this.Content = 'Evolution';
  }

  ToStats() {
    this.Content = 'Stats';
  }

  ToCapacities()
  {
    this.Content = 'Capacities';
  }
}
