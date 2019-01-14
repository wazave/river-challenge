/*
 *
 * PokemonSearchBar actions
 *
 */

import { SEARCH_POKEMON } from './constants';

export function searchPokemon(searchTerm) {
  return {
    type: SEARCH_POKEMON,
    payload: { searchTerm },
  };
}
