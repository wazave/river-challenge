/**
 *
 * PokemonCard pokemon name
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  width: 100%;
`;

function PokemonName(props) {
  return <Name>{capitalizeFirstLetter(props.name)}</Name>;
}

PokemonName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonName;
