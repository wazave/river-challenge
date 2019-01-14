import { LIST_POKEMON_ATTEMPT, LIST_POKEMON_SUCCESS } from '../constants';

import { listPokemon, pokemonLoaded } from '../actions';

describe('PokemonList Actions', () => {
  describe('listPokemon', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LIST_POKEMON_ATTEMPT,
      };

      expect(listPokemon()).toEqual(expectedResult);
    });
  });
  describe('pokemonLoaded', () => {
    it('should return the correct type and the passed pokemon list', () => {
      const pokemon = [
        { id: 1, name: 'bulbasaur' },
        { id: 2, name: 'ivysaur' },
      ];
      const expectedResult = {
        type: LIST_POKEMON_SUCCESS,
        payload: { pokemon },
      };

      expect(pokemonLoaded(pokemon)).toEqual(expectedResult);
    });
  });
});
