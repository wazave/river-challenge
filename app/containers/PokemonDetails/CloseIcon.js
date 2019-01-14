import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  position: absolute;
  top: 2px;
  left: 2px;
  pointer-events: none;

  &:first-child {
    fill: #444;
  }
`;

export default function SearchIcon(props) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SVG>
  );
}
