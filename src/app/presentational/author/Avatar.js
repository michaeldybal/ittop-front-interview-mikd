import React from 'react';
import styled from 'styled-components';

import author from '../../../static/img/author.jpg';

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

function Avatar() {
  return (
    <Img src={author}/>
  );
}

export default Avatar;
