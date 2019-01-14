/*
 *
 * PokemonSearchBar reducer
 *
 */

import { fromJS } from 'immutable';
import { SEARCH_POKEMON } from './constants';

const searchTerm = 'searchTerm';

export const initialState = fromJS({
  [searchTerm]: '',
});

function pokemonSearchBarReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_POKEMON:
      return state.set(searchTerm, action.payload.searchTerm);
    default:
      return state;
  }
}

export default pokemonSearchBarReducer;
