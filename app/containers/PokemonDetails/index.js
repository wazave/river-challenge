/**
 *
 * PokemonDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { intlShape, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import PokemonSprite from 'components/PokemonSprite';
import background from 'images/pokeball.png';
import injectSaga from 'utils/injectSaga';
import { selectPokemon } from 'containers/PokemonList/actions';

import PokemonStatistics from './PokemonStatistics';
import saga from './saga';
import messages from './messages';
import CloseIcon from './CloseIcon';
import { selectPokemonDetails } from './selectors';
import { getPokemonDetails } from './actions';

function formatPokemonId(id) {
  if (id.length > 2) return `#${id}`;
  return `#${`000${id}`.slice(-3)}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonDetailsWrapper = styled.div`
  position: fixed;
  padding: 16px;
  min-height: 100vh;
  width: 100%;
  z-index: 2;
  display: ${props => (props.selectedPokemon ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to top left,
    rgba(121, 196, 194, 0.85),
    rgba(198, 238, 173, 0.85)
  );
`;

const PokemonDetailsContainer = styled.div`
  position: relative;
  border-radius: 5px;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #fff;
  max-width: 448px;
  max-width: 384px;
  flex-grow: 0;
  flex-shrink: 1;
  padding: 16px 0;
`;

const PokemonDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  width: 100%;
  position: relative;
  & > :not(:first-child) {
    margin-left: 8px;
    margin-right: 8px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
    background: url(${background});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const ClosePokemonDataContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  background: #fff;
  width: 24px;
  height: 24px;
  right: -12px;
  top: -26px;
`;

const PokemonDataGroup = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-grow: 0;
  min-width: 96px;
  max-width: ${props => (props.wide ? 128 : 96)}px;
  margin: 8px 0;
  overflow: hidden;
`;

const PokemonDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 96px;
  padding: 16px;
  padding-top: 8px;
  width: 100%;
  font-size: 12px;
`;

const DataWrapper = styled.div`
  display: flex;
  font-size: 12px;
  color: #444;
  &:first-child {
    margin-bottom: 8px;
  }
`;

const DataStat = styled.div`
  font-weight: 700;
  margin-right: 8px;
`;

const DataValue = styled.div`
  font-weight: 400;
`;

function DataDisplay(props) {
  return (
    <DataWrapper>
      {/* eslint-disable react/prop-types */}
      <DataStat>{props.label}:</DataStat>
      <DataValue>{props.value}</DataValue>
      {/* eslint-enable react/prop-types */}
    </DataWrapper>
  );
}

const PokemonId = styled.div`
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  color: #444;
  width: 100%;
`;

const PokemonName = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #444;
  width: 100%;
  margin-bottom: 4px;
`;

const PokemonTypesColor = {
  normal: 'A8A878',
  fighting: 'C03028',
  flying: 'A890F0',
  poison: 'A040A0',
  ground: 'E0C068',
  rock: 'B8A038',
  bug: 'A8B820',
  ghost: '705898',
  steel: 'B8B8D0',
  fire: 'F08030',
  water: '6890F0',
  grass: '78C850',
  electric: 'F8D030',
  psychic: 'F85888',
  ice: '98D8D8',
  dragon: '7038F8',
  dark: '705848',
  fairy: 'EE99AC',
};

const TypeTag = styled.div`
  background: #${props => PokemonTypesColor[props.type]};
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.3px;
  font-weight: 600;
  padding: 0 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
`;

function PokemonTypeTag(props) {
  return <TypeTag {...props}>{props.text}</TypeTag>;
}

/* eslint-disable react/prefer-stateless-function */
export class PokemonDetails extends React.Component {
  state = { fetched: false };

  componentDidUpdate() {
    this.loadPokemonData();
  }

  loadPokemonData = () => {
    const { pokemonDetails } = this.props;
    if (
      pokemonDetails &&
      !pokemonDetails.detailsLoaded &&
      !this.state.fetched
    ) {
      this.props.getPokemonDetails(this.props.pokemonDetails);
      this.setState({ fetched: true });
    }
  };

  removeSelectedPokemon = () => {
    this.props.selectPokemon(null);
    this.setState({ fetched: false });
  };

  render() {
    const { pokemonDetails } = this.props;
    const pokemonDetailsLoaded = pokemonDetails && pokemonDetails.detailsLoaded;
    return (
      <PokemonDetailsWrapper selectedPokemon={pokemonDetails}>
        <PokemonDetailsContainer>
          {pokemonDetailsLoaded && (
            <React.Fragment>
              <PokemonDataContainer>
                <ClosePokemonDataContainer onClick={this.removeSelectedPokemon}>
                  <CloseIcon />
                </ClosePokemonDataContainer>
                <PokemonSprite {...pokemonDetails} />
                <PokemonDataGroup wide>
                  <PokemonId>{formatPokemonId(pokemonDetails.id)}</PokemonId>
                  <PokemonName>
                    {capitalizeFirstLetter(pokemonDetails.name)}
                  </PokemonName>
                  {pokemonDetails.types.map(type => (
                    <PokemonTypeTag
                      key={type}
                      type={type}
                      text={this.props.intl.formatMessage(messages[type])}
                    />
                  ))}
                </PokemonDataGroup>
                <PokemonDataGroup>
                  <DataDisplay
                    label={this.props.intl.formatMessage(messages.height)}
                    value={`${pokemonDetails.height / 10}m`}
                  />
                  <DataDisplay
                    label={this.props.intl.formatMessage(messages.weight)}
                    value={`${pokemonDetails.weight / 10}kg`}
                  />
                </PokemonDataGroup>
              </PokemonDataContainer>
              <PokemonDescription>
                {pokemonDetails.descriptions[this.props.intl.locale]}
              </PokemonDescription>
              <PokemonStatistics {...pokemonDetails.stats} />
            </React.Fragment>
          )}
        </PokemonDetailsContainer>
      </PokemonDetailsWrapper>
    );
  }
}

PokemonDetails.propTypes = {
  selectPokemon: PropTypes.func.isRequired,
  getPokemonDetails: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokemonDetails: selectPokemonDetails,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPokemon, getPokemonDetails }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'pokemonDetails', saga });

export default compose(
  withSaga,
  withConnect,
  injectIntl,
)(PokemonDetails);
