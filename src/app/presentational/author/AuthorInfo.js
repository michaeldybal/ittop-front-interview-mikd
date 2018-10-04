import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';

const AuthorInfoWrap = styled.div`
  margin: 20px;
  display: flex;
  border: 1px solid ${props => props.theme.colorMain};
  padding: 20px;
`;

const PersonalData = styled.div`
  margin-left: 20px;
`;

function AuthorInfo() {
  return (
    <AuthorInfoWrap>
      <Avatar />
      <PersonalData>
        <PersonalInfo />
        <Experience />
      </PersonalData>
    </AuthorInfoWrap>
  );
}

export default AuthorInfo;

