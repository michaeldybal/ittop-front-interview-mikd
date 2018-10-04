import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getRooms, activateRoom } from '../../actions/rooms';
import { setupWebsocket, subscribe, unsubscribe } from '../../actions/websockets';
import RoomsNamesList from './RoomsNamesList';
import RoomItems from './RoomItems';
import WithLoading from '../../hoc/WithLoading';

const RoomsWrap = WithLoading(styled.div`
  align-items: stretch;
  border: 1px solid ${props => props.theme.colorMain};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
`);

class Rooms extends Component {
  constructor() {
    super();
    this.activeRoomName = "";
    this.roomsListClickHandler = this.roomsListClickHandler.bind(this);
  }

  roomsListClickHandler(room) {
    this.props.unsubscribe(this.props.rooms[this.props.activeRoom].name);
    this.props.activateRoom(room);
    this.props.subscribe(this.props.rooms[room].name);
  }

  async initWS() {
    await this.props.setupWebsocket();
    await this.props.getRooms();
    if(this.props.rooms.length) {
      this.props.subscribe(this.props.rooms[0].name);
    }
  }

  componentDidMount() {
    this.initWS();
  }

  render() {
    return (
      <RoomsWrap isLoading={this.props.isLoading}>
        <RoomsNamesList
          roomNames={this.props.rooms.map(item => item.name)}
          activeRoom={this.props.activeRoom}
          roomClickHandler={this.roomsListClickHandler} />
        <RoomItems 
          rooms={this.props.rooms} 
          activeRoom={this.props.activeRoom}
        />
      </RoomsWrap>
    )
  };
};

const mapStateToProps = ({ rooms, websockets }) => ({
  rooms: rooms.rooms,
  isLoading: rooms.isLoading,
  activeRoom: rooms.activeRoom,
  isOpenWS: websockets.isOpenWS,
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
  getRooms, 
  activateRoom, 
  setupWebsocket, 
  subscribe, 
  unsubscribe 
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
