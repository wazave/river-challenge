/**
 *
 * PokemonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { selectPokemonSearchBar } from 'containers/PokemonSearchBar/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PokemonCard from 'components/PokemonCard';
import PokemonListWrapper from './PokemonListWrapper';
import reducer from './reducer';
import saga from './saga';
import { key } from './constants';
import { listPokemon, selectPokemon } from './actions';
import { selectPokemonList, selectPokemonStatus } from './selectors';

export class PokemonList extends React.Component {
  componentDidMount() {
    this.loadPokemon();
  }

  byNameOrId = pokemon =>
    pokemon.name.includes(this.props.searchTerm.toLowerCase().trim()) ||
    pokemon.id.includes(this.props.searchTerm);

  loadPokemon = () => {
    if (!this.props.status.loaded) this.props.listPokemon();
  };

  render() {
    return (
      <PokemonListWrapper>
        {this.props.status.loaded &&
          this.props.pokemon
            .filter(this.byNameOrId)
            .map(pokemon => (
              <PokemonCard
                {...pokemon}
                onClick={() => this.props.selectPokemon(pokemon.id)}
              />
            ))}
      </PokemonListWrapper>
    );
  }
}

PokemonList.propTypes = {
  listPokemon: PropTypes.func.isRequired,
  pokemon: PropTypes.array.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
  }).isRequired,
  searchTerm: PropTypes.string.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokemon: selectPokemonList,
  status: selectPokemonStatus,
  searchTerm: selectPokemonSearchBar,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ listPokemon, selectPokemon }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PokemonList);
