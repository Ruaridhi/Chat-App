const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors()); // Add cors middleware

const server = http.createServer(app);
var STATIC_CHANNELS = [
  {
    name: 'Kodify chat',
    participants: 0,
    id: 1,
    sockets: [],
  },
];

app.get('/', (req, res) => {
  res.json({
    channels: STATIC_CHANNELS,
  });
});

server.listen(4000, () => 'Server is running on port 4000');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  /* socket object may be used to send specific messages to the new connected client */

  console.log('new client connected');
  io.emit('connection', console.log('emit connection'));

  socket.on('send-message', (message) => {
    console.log('SENDING MESSAGE');
    io.emit('message', message);
  });
});

// app.post('/', (req, res) => {
//   console.log('test');
//   res.json({
//     channels: STATIC_CHANNELS,
//   });
// });
