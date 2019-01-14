/*
 *
 * PokemonList reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LIST_POKEMON_FAILURE,
  LIST_POKEMON_REQUEST,
  LIST_POKEMON_SUCCESS,
  SELECT_POKEMON,
  POKEMON_DETAILS_LOADED,
} from './constants';

// immutablejs keys
const pokemon = 'pokemon';
const error = 'error';
const loaded = 'loaded';
const loading = 'loading';
const selectedPokemon = 'selectedPokemon';

const formatStats = (prevStats, stat) => ({
  ...prevStats,
  [stat.stat.name]: stat.base_stat,
});

const formatLanguage = (prevDescriptions, description) => ({
  ...prevDescriptions,
  [description.language.name]: description.flavor_text,
});

const sortTypeOrder = (typeA, typeB) => (typeA.slot > typeB.slot ? 1 : -1);
const getTypeName = pokemonType => pokemonType.type.name;

export const initialState = fromJS({
  [error]: null,
  [loaded]: false,
  [loading]: false,
  [pokemon]: [],
  [selectedPokemon]: null,
});

function pokemonListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LIST_POKEMON_FAILURE:
      return state.set(error, payload.error).set(loading, false);
    case LIST_POKEMON_REQUEST:
      return state.set(error, null).set(loading, true);
    case LIST_POKEMON_SUCCESS:
      return state
        .set(loaded, true)
        .set(loading, false)
        .set(pokemon, payload.pokemon.slice(0, -57)); // remove unimplemented pokemon
    case SELECT_POKEMON:
      return state.set(selectedPokemon, payload.pokemonId);
    case POKEMON_DETAILS_LOADED: {
      const stats = payload.pokemonDetails.stats.reduce(formatStats, {});
      const descriptions = payload.pokemonDetails.description
        .slice(0, 7) // get first 7 translations
        .reduce(formatLanguage, {});
      const types = payload.pokemonDetails.types
        .sort(sortTypeOrder)
        .map(getTypeName);
      const pokemonWithDetails = state.get(pokemon).map(pokemonData => {
        if (pokemonData.name === payload.pokemonDetails.name) {
          return {
            ...pokemonData,
            detailsLoaded: true,
            height: payload.pokemonDetails.height,
            weight: payload.pokemonDetails.weight,
            stats,
            descriptions,
            types,
          };
        }
        return pokemonData;
      });
      return state.set(pokemon, pokemonWithDetails);
    }
    default:
      return state;
  }
}

export default pokemonListReducer;
