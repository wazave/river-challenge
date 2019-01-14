/*
 *
 * PokemonDetails actions
 *
 */

import {
  GET_POKEMON_DETAILS_ATTEMPT,
  GET_POKEMON_DETAILS_FAILURE,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
} from './constants';

export function getPokemonDetails(pokemon) {
  return {
    type: GET_POKEMON_DETAILS_ATTEMPT,
    payload: { pokemon },
  };
}

export function gettingPokemonDetails() {
  return {
    type: GET_POKEMON_DETAILS_REQUEST,
  };
}

export function pokemonDetailsLoaded(pokemon) {
  return {
    type: GET_POKEMON_DETAILS_SUCCESS,
    payload: { pokemon },
  };
}

export function pokemonDetailsLoadingError(error) {
  return {
    type: GET_POKEMON_DETAILS_FAILURE,
    payload: { error },
  };
}
