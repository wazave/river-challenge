import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { key } from './constants';

function getPokemonSpriteURL(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function addPokemonId(pokemonData) {
  const pokemonId = pokemonData.url.slice(34, -1);
  return {
    ...pokemonData,
    id: pokemonId,
    key: pokemonId,
    sprite: getPokemonSpriteURL(pokemonId),
  };
}

/**
 * Direct selector to the pokemonList state domain
 */

const selectPokemonListDomain = state => state.get(key, initialState).toJS();

/**
 * Selector to the PokemonList fetch status
 */

const selectPokemonStatus = createSelector(
  selectPokemonListDomain,
  ({ error, loaded, loading }) => ({
    error,
    loaded,
    loading,
  }),
);

/**
 * Default selector used by PokemonList
 */

const selectPokemonList = createSelector(selectPokemonListDomain, substate =>
  substate.pokemon.map(addPokemonId),
);

export { selectPokemonListDomain, selectPokemonList, selectPokemonStatus };
