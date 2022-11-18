const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
// const io = require('socket.io')(http);
const { Server } = require('socket.io');

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('get to 4000');
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
  socket.emit('connection', null);
});
