/**
 *
 * PokemonCard pokemon id
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function formatPokemonId(id) {
  if (id.length > 2) return `#${id}`;
  return `#${`000${id}`.slice(-3)}`;
}

const Id = styled.div`
  color: #888;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  width: 100%;
`;

function PokemonId(props) {
  return <Id>{formatPokemonId(props.id)}</Id>;
}

PokemonId.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PokemonId;
