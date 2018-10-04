import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoomItems = props => {
  const RoomItemsWrap = styled.div`
    margin: 20px;
    border: 1px solid ${props => props.theme.colorMain};
    padding: 20px;
    min-width: 200px;
    flex: 1 1 auto;
  `;

  const Span = styled.span`
    margin: 5px;
    border: 1px solid ${props => props.theme.colorMain};
    padding: 5px;
    display: inline-block;
    min-width: 15px; 
    text-align: center;

    &.active {
      animation: ${props => props.theme.colorTile} normal 1s linear;
    }
  `;

  const buildRoomTiles = (props) => {
    const room = props.rooms[props.activeRoom];
    let items = [];

    if (room) {
      let order = 0;
      for (var i = 0; i < room.height; i++) {
        for (var j = 0; j < room.width; j++) {
          items.push(<Span
            key={order}
            className={room.data[order][1] ? "active" : ''}>
            {room.data[order][0]}
          </Span>);
          
          order++;
        }
        items.push(<br key={"br" + i} />);
      }
    }

    return <div>{items}</div>;
  }

  return (
    <RoomItemsWrap>
      {buildRoomTiles(props)}
    </RoomItemsWrap>
  )
};

export default RoomItems;

RoomItems.propTypes = {
  rooms: PropTypes.array.isRequired,
  activeRoom: PropTypes.number.isRequired,
};

