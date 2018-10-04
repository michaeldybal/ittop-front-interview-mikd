import React from 'react';
import styled from 'styled-components';
import  {FormattedMessage } from 'react-intl';

import { AUTHOR_CV_URL } from '../../constants/constants';

const H2 = styled.h2`
  color: ${props => props.theme.colorDark};
  font-size: 1.1rem;
`;

const A = styled.a`
  color: ${props => props.theme.colorDark};
  font-size: 1.2em;
  margin-left: 20px;
  word-break: break-all;
  &:hover {
    font-weight: bold;
  }
`;

function PersonalInfo() {
  return (
    <H2>
      <span><FormattedMessage id="CV_LINK_LABEL" />:</span>
      <A href={AUTHOR_CV_URL} target="_blank"><FormattedMessage id="AUTHOR_NAME" /></A>
    </H2>
  );
}

export default PersonalInfo;
