import React from 'react';
import styled from 'styled-components';

const BoldText = styled.span`
  display: inline-block;
  font-weight: bold;
  margin-right: 10px;
  min-width: 80px;
`;

const Ul = styled.ul`
  margin-top: 15px;
  &>li{
    margin-bottom: 5px;
  }
`;


function Experience() {
  return (
    <Ul>
      <li>
        <BoldText>2013-2015</BoldText>
        FoxPro
      </li>

      <li>
        <BoldText>2016</BoldText>
        Angular 1.5, Ionic, lodash
      </li>

      <li>
        <BoldText>2016-2017</BoldText>
        Landing Pages (SASS, JQuery, Bootstrap 3, Framework 7)
      </li>

      <li>
        <BoldText>2017-2018</BoldText>
        Sharepoint Intranets (MS Sharepoint, React, SASS, Typescript)
      </li>

      <li>
        <BoldText>2018</BoldText>
        React, Redux, SASS, Styled Components, Bootstrap 4
      </li>
    </Ul>
  );
}

export default Experience;

