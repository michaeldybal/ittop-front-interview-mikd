import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeLang } from '../actions/ui';

const LangWrap = styled.div`
  position: absolute;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${props => props.theme.colorMain};
  color: ${props => props.theme.colorDark};
  top: 25px;
  left: 25px;
`;

class Lang extends Component {
  render() {
    return (
      <LangWrap onClick={this.props.changeLang.bind(null, this.props.activeLang)}>
        <span>{this.props.activeLang}</span>
      </LangWrap>
    )
  };
};

const mapStateToProps = ({ ui }) => ({
  activeLang: ui.lang
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
  changeLang
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lang);
