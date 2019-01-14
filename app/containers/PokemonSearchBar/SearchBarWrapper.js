import styled from 'styled-components';

export default styled.div`
  display: flex;
  max-width: 592px;
  padding: 0 16px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 591px) {
    max-width: 448px;
  }

  @media only screen and (max-width: 447px) {
    max-width: 304px;
  }
`;
