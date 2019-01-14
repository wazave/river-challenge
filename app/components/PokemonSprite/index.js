/**
 *
 * PokemonCard pokemon sprite
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function getImageURL(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function getImageDescription(name) {
  return `Sprite of ${name}`;
}

const Image = styled.img`
  height: 96px;
  width: 96px;
  margin-bottom: 8px;
`;

function PokemonSprite(props) {
  return (
    <Image src={getImageURL(props.id)} alt={getImageDescription(props.name)} />
  );
}

PokemonSprite.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PokemonSprite;
