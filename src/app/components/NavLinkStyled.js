import React from 'react';
import styled from 'styled-components';
import { NavLink  } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkStyled = styled(NavLink)`
  color: ${props => props.theme.colorMain};
  display: inline-block;
  margin: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.selected { 
    color: ${props => props.theme.colorLinkActive};
  }
`;

const NavLinkStyled = props => {
  return (
    <LinkStyled exact to={props.to} activeClassName="selected" title={props.title}>{props.value}</LinkStyled>
  );
}

export default NavLinkStyled;

NavLinkStyled.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired
};

