const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);




server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });