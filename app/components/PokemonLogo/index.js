/**
 *
 * PokemonLogo
 *
 */

import React from 'react';
import styled from 'styled-components';

import pokemonLogo from 'images/pokemonLogo.png';

const Image = styled.img`
  margin-bottom: 32px;
`;

function PokemonLogo() {
  return <Image src={pokemonLogo} />;
}

export default PokemonLogo;
