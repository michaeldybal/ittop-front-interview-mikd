import React from 'react';
import styled from 'styled-components';

import  {FormattedMessage } from 'react-intl';

const FavoriteTechWrap = styled.div`
  margin: 20px;
  border: 1px solid ${props => props.theme.colorMain};
  padding: 20px;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
`;

const Ul = styled.ul`
  margin-top: 15px;
  & li{
    background-color: ${props => props.theme.colorDark};
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;

    border-radius: 10px;
    color:  ${props => props.theme.colorMain};
    font-size: 1.1em;
    padding: 5px 10px;
  }
`;

function FavoriteTech() {
  return (
    <FavoriteTechWrap>
      <H2><FormattedMessage id="FAVORITE_TECH_LABEL" />:</H2>
      <Ul>
        <li>react</li>
        <li>redux</li>
        <li>redux-thunk</li>
        <li>redux-saga</li>
        <li>styled-components</li>
        <li>SASS</li>
        <li>ES6</li>
        <li>GIT</li>
      </Ul>
    </FavoriteTechWrap>
  );
}

export default FavoriteTech;



