/**
 *
 * PokemonSearchBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { intlShape, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { selectPokemonSearchBar } from './selectors';
import reducer from './reducer';
import messages from './messages';
import { searchPokemon } from './actions';
import { key } from './constants';
import SearchBar from './SearchBar';
import SearchBarWrapper from './SearchBarWrapper';
import SearchIcon from './SearchIcon';

export class PokemonSearchBar extends React.Component {
  handlePokemonSearch = event => {
    this.props.searchPokemon(event.target.value);
  };

  render() {
    return (
      <SearchBarWrapper>
        <SearchIcon />
        <SearchBar
          type="search"
          placeholder={this.props.intl.formatMessage(
            messages.searchPlaceHolder,
          )}
          onChange={this.handlePokemonSearch}
          value={this.props.searchTerm}
        />
      </SearchBarWrapper>
    );
  }
}

PokemonSearchBar.propTypes = {
  searchPokemon: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchTerm: selectPokemonSearchBar,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchPokemon }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key, reducer });

export default compose(
  withReducer,
  withConnect,
  injectIntl,
)(PokemonSearchBar);
