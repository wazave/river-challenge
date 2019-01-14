import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { pokemonDetailsLoaded } from 'containers/PokemonList/actions';
import { GET_POKEMON_DETAILS_ATTEMPT } from './constants';

export function* fetchPokemonDetails({ payload }) {
  try {
    const details = yield call(request, payload.pokemon.url);
    const { flavor_text_entries: description } = yield call(
      request,
      details.species.url,
    );
    details.description = description;
    yield put(pokemonDetailsLoaded(details));
  } catch (error) {
    console.error(error);
  }
}

// Individual exports for testing
export default function* pokemonDetailsSaga() {
  yield takeLatest(GET_POKEMON_DETAILS_ATTEMPT, fetchPokemonDetails);
}
