import styled from 'styled-components';

import background from 'images/pokepattern.jpg';

export default styled.div`
  align-items: center;
  background-image: url(${background});
  background-repeat: repeat;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;
