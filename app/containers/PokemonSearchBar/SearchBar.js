import styled from 'styled-components';

export default styled.input`
  background: white;
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  display: block;
  flex: 1;
  font-family: 'Open Sans';
  font-size: 12px;
  line-height: 16px;
  outline: none;
  padding: 11px 11px 11px 39px;
  width: 100%;

  &::placeholder {
    color: #333;
  }
`;
