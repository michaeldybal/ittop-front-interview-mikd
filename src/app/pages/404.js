import React from 'react';
import styled from 'styled-components';
import  {FormattedMessage } from 'react-intl';

const H2 = styled.h2`
  text-align: center;
  margin: 20px auto;
  font-size: 2em;
`;

export default () => (
  <H2><FormattedMessage id="PAGE_NOTFOUNT_VALUE"/> (404)</H2>
);
