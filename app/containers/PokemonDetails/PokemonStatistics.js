import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 16px;
`;

const Divider = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DividerLine = styled.div`
  width: 100%;
  height: 2px;
  background: #e5e5e5;
`;

const DividerText = styled.div`
  text-transform: uppercase;
  color: #888;
  padding: 0 16px;
  font-size: 10px;
  letter-spacing: 0.2px;
`;

const Statistics = styled.div`
  width: 100%;
  display: flex;
`;

const LabelsContainer = styled.div`
  display: flex;
  margin-right: 16px;
  flex-direction: column;
`;

const StatLabel = styled.div`
  font-size: 14px;
  line-height: 32px;
  color: #888;
  white-space: nowrap;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Stat = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
`;

const StatLeftTrack = styled.div`
  width: calc(${props => (props.value / 150) * 100}% - 24px);
  height: 12px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background: linear-gradient(to left, #50b3e0, #217bd3);
  flex-grow: 1;
`;

const StatValue = styled.div`
  font-weight: 700;
  color: #273d4d;
  height: 24px;
  min-width: 48px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  border-radius: 5px;
  border: 1px solid #efefef;
`;

const StatRightTrack = styled.div`
  width: calc(${props => 100 - (props.value / 150) * 100}% - 24px);
  height: 12px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background: #d8d8d8;
  flex-shrink: 0;
`;

function StatIndicator(props) {
  return (
    <Stat>
      <StatLeftTrack {...props} />
      <StatValue>{props.value}</StatValue>
      <StatRightTrack {...props} />
    </Stat>
  );
}

function PokemonStatistics(props) {
  return (
    <Wrapper>
      <Divider>
        <DividerLine />
        <DividerText>
          <FormattedMessage {...messages.statistics} />
        </DividerText>
        <DividerLine />
      </Divider>
      <Statistics>
        <LabelsContainer>
          <StatLabel>
            <FormattedMessage {...messages.hp} />
          </StatLabel>
          <StatLabel>
            <FormattedMessage {...messages.attack} />
          </StatLabel>
          <StatLabel>
            <FormattedMessage {...messages.defence} />
          </StatLabel>
          <StatLabel>
            <FormattedMessage {...messages.speed} />
          </StatLabel>
          <StatLabel>
            <FormattedMessage {...messages.specialAttack} />
          </StatLabel>
          <StatLabel>
            <FormattedMessage {...messages.specialDefence} />
          </StatLabel>
        </LabelsContainer>
        <StatsContainer>
          <StatIndicator value={props.hp} />
          <StatIndicator value={props.attack} />
          <StatIndicator value={props.defense} />
          <StatIndicator value={props.speed} />
          <StatIndicator value={props['special-attack']} />
          <StatIndicator value={props['special-defense']} />
        </StatsContainer>
      </Statistics>
    </Wrapper>
  );
}

PokemonStatistics.propTypes = {
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  'special-attack': PropTypes.number.isRequired,
  'special-defense': PropTypes.number.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PokemonStatistics);
