"use strict";
process.title = 'interview-server';
const webSocketsServerPort = 1337;
const webSocketServer = require('websocket').server;
const http = require('http');
const randomName = require('node-random-name');
const scheduler = require('node-schedule');


const clients = [];


const createRoom = () => {
  const width = Math.floor(Math.random() * 10) + 4;
  const height = Math.floor(Math.random() * 10) + 4;
  const name = randomName({female: true, random: Math.random});
  const data = new Array(width * height).fill(undefined).map(() => {
    return Math.floor(Math.random() * 100);
  });

  return {
    name,
    width,
    height,
    data,
    clients: []
  }
};


const rooms = [createRoom(), createRoom(), createRoom(), createRoom(), createRoom(), createRoom()];


scheduler.scheduleJob('* * * * * *', () => {
  rooms.forEach((room) => {
    if (Math.random() < 0.5) {
      let delta = [];
      for (let i = 0; i < room.data.length; i++) {
        if (Math.random() < 0.2) {
          const newValue = Math.floor(Math.random() * 100);
          room.data[i] = newValue;
          delta.push([i, newValue]);
          if (Math.random() < 0.2) {
            room.clients.forEach((client) => {
              client.sendUTF(JSON.stringify(delta));
            });
            delta = [];
          }
        }
      }
      room.clients.forEach((client) => {
        client.sendUTF(JSON.stringify(delta));
      })
    }
  })
});


const requestHandler = (request, response) => {
  console.log(request.url);
  response.writeHead(200, {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'});
  response.end(JSON.stringify(
    rooms.map((room) => {
      return {
        name: room.name,
        width: room.width,
        height: room.height,
        data: room.data,
      }
    })
  ));
};


const server = http.createServer(requestHandler);


server.listen(webSocketsServerPort, function () {
  console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

var wsServer = new webSocketServer({
  httpServer: server
});

const findRoom = (name) => {
  let room = rooms.filter((room) => room.name === name);
  if (room.length > 0) {
    return room[0];
  }
};

wsServer.on('request', function (request) {
  console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
  var connection = request.accept(null, request.origin);
  var index = clients.push(connection) - 1;
  console.log((new Date()) + ' Connection accepted.');

  connection.on('message', function (message) {
    console.log(message);
    let m = null;
    try {
      m = JSON.parse(message.utf8Data);
    } catch (e) {
      connection.sendUTF(JSON.stringify({error: 'wrong format'}));
      return;
    }


    if (m.type === "SUBSCRIBE") {
      const room = findRoom(m.room);
      if (room) {
        room.clients.push(connection)
      } else {
        connection.sendUTF(JSON.stringify({error: 'wrong room'}));
      }
    } else if (m.type === "UNSUBSCRIBE") {
      const room = findRoom(m.room);
      if (room) {
        room.clients = room.clients.filter((c) => c !== connection);
      } else {
        connection.sendUTF(JSON.stringify({error: 'wrong room'}));
      }
    } else {
      connection.sendUTF(JSON.stringify({error: 'wrong message'}));
    }


  });

  connection.on('close', function (connection) {

  });
});