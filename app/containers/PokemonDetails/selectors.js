import { createSelector } from 'reselect';

import {
  selectPokemonListDomain,
  selectPokemonList,
} from 'containers/PokemonList/selectors';

/**
 * Direct selector to the pokemonDetails state domain
 */

const selectSelectedPokemonId = createSelector(
  selectPokemonListDomain,
  pokemonListData => pokemonListData.selectedPokemon,
);

/**
 * Default selector used by PokemonDetails
 */

const selectPokemonDetails = createSelector(
  selectPokemonList,
  selectSelectedPokemonId,
  (pokemonList, selectedPokemonId) =>
    selectedPokemonId
      ? pokemonList.filter(pokemon => pokemon.id === selectedPokemonId).pop()
      : null,
);

export { selectPokemonDetails };
