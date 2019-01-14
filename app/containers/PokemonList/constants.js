/*
 *
 * PokemonList constants
 *
 */

export const key = 'pokemonList';

const PREFIX = 'app/PokemonList/';

const ATTEMPT = '_ATTEMPT';
const FAILURE = '_FAILURE';
const REQUEST = '_REQUEST';
const SUCCESS = '_SUCCESS';

const LIST_POKEMON = 'LIST_POKEMON';
export const LIST_POKEMON_ATTEMPT = `${PREFIX}${LIST_POKEMON}${ATTEMPT}`;
export const LIST_POKEMON_FAILURE = `${PREFIX}${LIST_POKEMON}${FAILURE}`;
export const LIST_POKEMON_REQUEST = `${PREFIX}${LIST_POKEMON}${REQUEST}`;
export const LIST_POKEMON_SUCCESS = `${PREFIX}${LIST_POKEMON}${SUCCESS}`;

export const SELECT_POKEMON = `${PREFIX}SELECT_POKEMON`;
export const POKEMON_DETAILS_LOADED = `${PREFIX}POKEMON_DETAILS_LOADED`;
