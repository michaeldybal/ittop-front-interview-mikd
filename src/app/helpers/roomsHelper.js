export const mergeRoomsAndMessage = (rooms, activeRoom, message) => {
  let updatedRooms = rooms.slice(0);

  try {
    for (let i = 0; i < updatedRooms[activeRoom].data.length; i++) {
      updatedRooms[activeRoom].data[i][1] = false;

      for (let j = 0; j < message.length; j++) {
        if (message[j][0] === i) {
          updatedRooms[activeRoom].data[i][0] = message[j][1];
          updatedRooms[activeRoom].data[i][1] = true;
          break;
        }
      };
    }
  } catch (e) {
    console.log("mergeRoomsAndMessage", e);
  }

  return updatedRooms;
}