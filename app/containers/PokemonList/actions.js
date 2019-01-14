/*
 *
 * PokemonList actions
 *
 */

import {
  LIST_POKEMON_ATTEMPT,
  LIST_POKEMON_FAILURE,
  LIST_POKEMON_REQUEST,
  LIST_POKEMON_SUCCESS,
  SELECT_POKEMON,
  POKEMON_DETAILS_LOADED,
} from './constants';

export function selectPokemon(pokemonId) {
  return {
    type: SELECT_POKEMON,
    payload: { pokemonId },
  };
}

export function listPokemon() {
  return {
    type: LIST_POKEMON_ATTEMPT,
  };
}

export function loadingPokemon() {
  return {
    type: LIST_POKEMON_REQUEST,
  };
}

export function pokemonLoaded(pokemon) {
  return {
    type: LIST_POKEMON_SUCCESS,
    payload: { pokemon },
  };
}

export function pokemonLoadingError(error) {
  return {
    type: LIST_POKEMON_FAILURE,
    payload: { error },
  };
}

export function pokemonDetailsLoaded(pokemonDetails) {
  return {
    type: POKEMON_DETAILS_LOADED,
    payload: { pokemonDetails },
  };
}
