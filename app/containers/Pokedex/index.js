/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import PokemonList from 'containers/PokemonList/Loadable';
import PokemonSearchBar from 'containers/PokemonSearchBar/Loadable';
import PokemonDetails from 'containers/PokemonDetails/Loadable';
import PokemonLogo from 'components/PokemonLogo';
import LocaleToggle from 'containers/LocaleToggle';

import TopLine from './TopLine';
import PokedexWrapper from './PokedexWrapper';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <PokedexWrapper>
        <TopLine />
        <PokemonLogo />
        <PokemonSearchBar />
        <LocaleToggle />
        <PokemonList />
        <PokemonDetails />
      </PokedexWrapper>
    );
  }
}
