import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoomsList = styled.div`
  margin: 20px;
  border: 1px solid ${props => props.theme.colorMain};
  padding: 15px 20px;
  min-width: 200px;  
`;

const Ul = styled.ul`
  display: block;
  font-size: 1rem;
  & li {
    margin: 10px 0;
    padding: 10px;
    background-color: ${props => props.theme.colorDark};
    color: ${props => props.theme.colorMain};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: ${props => props.theme.colorLinkActive};
    }
  }
`;

const RoomsNamesList = props => {
  const { roomNames, activeRoom, roomClickHandler } = props;

  return (
    <RoomsList>
      <Ul>
        {roomNames.map((roomName, idx) =>
          <li key={idx}
            onClick={roomClickHandler.bind(null, idx, roomName)}
            className={idx === activeRoom ? 'active' : ''}>
            {roomName}
          </li>
        )}
      </Ul>
    </RoomsList>
  )
};

export default RoomsNamesList;

RoomsNamesList.propTypes = {
  roomNames: PropTypes.array.isRequired,
  activeRoom: PropTypes.number.isRequired,
  roomClickHandler: PropTypes.func.isRequired
};

