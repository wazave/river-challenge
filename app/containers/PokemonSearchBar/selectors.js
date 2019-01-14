import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { key } from './constants';
/**
 * Direct selector to the pokemonSearchBar state domain
 */

const selectPokemonSearchBarDomain = state =>
  state.get(key, initialState).toJS();

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonSearchBar
 */

const selectPokemonSearchBar = createSelector(
  selectPokemonSearchBarDomain,
  substate => substate.searchTerm,
);

export { selectPokemonSearchBar };
