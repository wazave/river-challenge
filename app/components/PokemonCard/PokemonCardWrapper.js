import styled from 'styled-components';

export default styled.div`
  background: #fff;
  border: 1px solid #efefef;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  overflow: hidden;
  padding: 15px;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 128px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    border-color: #79c4c2;
    box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.2);
  }
`;
