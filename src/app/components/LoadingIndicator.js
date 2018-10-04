import React from 'react';
import styled from 'styled-components';

import spinner from '../../static/img/spinner.svg';

const Img = styled.img`
  animation: ${props => props.theme.rotate360} infinite 2s linear;
  border-radius: 50%;
  display: block;
  height: 100px;
  margin: 20px auto;
  width: 100px;
`;

const LoadingIndicator = () => {
  return (
    <Img src={spinner} />
  );
}

export default LoadingIndicator;
