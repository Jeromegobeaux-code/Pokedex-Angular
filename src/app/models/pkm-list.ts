import { PokemonListItem } from './pkm-list-item';

export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}
