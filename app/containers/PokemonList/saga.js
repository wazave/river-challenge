/**
 * Gets the pokemon from pokeapi
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { LIST_POKEMON_ATTEMPT } from './constants';
import { loadingPokemon, pokemonLoaded, pokemonLoadingError } from './actions';

export function* fetchPokemon() {
  try {
    yield put(loadingPokemon());
    const { results } = yield call(
      request,
      'https://pokeapi.co/api/v2/pokemon/',
    );
    yield put(pokemonLoaded(results));
  } catch (error) {
    yield put(pokemonLoadingError(error));
  }
}

// Individual exports for testing
export default function* pokemonListSaga() {
  yield takeLatest(LIST_POKEMON_ATTEMPT, fetchPokemon);
}
