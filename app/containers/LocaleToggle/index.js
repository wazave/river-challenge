/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Wrapper from './Wrapper';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const LanguageOption = styled.div`
  font-weight: 600;
  cursor: pointer;
  color: ${props => (props.children === props.locale ? '#444' : '#79c4c2')};

  &:hover {
    color: #000;
  }
`;

export class LocaleToggle extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {appLocales.map(language => (
          /* eslint-disablesss jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
          <LanguageOption
            onClick={this.props.onLocaleToggle}
            key={language}
            locale={this.props.locale}
          >
            {language}
          </LanguageOption>
          /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
        ))}
      </Wrapper>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.innerHTML)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
