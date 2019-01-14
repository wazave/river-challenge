/**
 *
 * PokemonCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import PokemonCardSprite from 'components/PokemonSprite';
import PokemonCardWrapper from './PokemonCardWrapper';
import PokemonCardName from './Name';
import PokemonCardId from './Id';

function PokemonCard(props) {
  return (
    <PokemonCardWrapper onClick={props.onClick}>
      <PokemonCardSprite {...props} />
      <PokemonCardName name={props.name} />
      <PokemonCardId id={props.id} />
    </PokemonCardWrapper>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PokemonCard;
