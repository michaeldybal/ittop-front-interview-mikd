import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';

import NavLinkStyled from '../../components/NavLinkStyled';
import { PAGE_URLS } from '../../constants/constants';
import Lang from '../../components/Lang';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorMain};
  padding: 20px;
  position: relative;
  text-align: left;
`;

const H1 = styled.h1`
  border: 1px solid ${props => props.theme.colorMain};
  color: ${props => props.theme.colorHeader};
  font-size: 2rem;
  padding: 20px;
  text-align: center;
  word-break: break-word;
`;

const Nav = styled.nav`
  border: 1px solid ${props => props.theme.colorMain};
  margin-top:20px;
`;

class Header extends Component {

  render() {
    const intl = this.props.intl;

    const homeValue = intl.formatMessage({id: "PAGE_HOME_VALUE"});
    const homeTitle = intl.formatMessage({id: "PAGE_HOME_TITLE"});

    const roomsValue = intl.formatMessage({id: "PAGE_ROOMS_VALUE"});
    const roomsTitle = intl.formatMessage({id: "PAGE_ROOMS_TITLE"});

    return (
      <HeaderWrapper>
        {/* <Lang /> */}
        <H1>
          <FormattedMessage id="HEADER_CAPTION" />
        </H1>
        <Nav>
          <NavLinkStyled to={PAGE_URLS.home} value={homeValue} title={homeTitle} />
          <NavLinkStyled to={PAGE_URLS.rooms} value={roomsValue} title={roomsTitle} />
        </Nav>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Header);
