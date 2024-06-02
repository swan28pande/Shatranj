const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors'); // Moved this to the top for clarity

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { 
  cors: {
    origin: ["http://localhost:5173", "https://shatranj-app.vercel.app", "https://swanandpande.com"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// CORS middleware for Express
app.use(cors({
  origin: ["http://localhost:5173", "https://shatranj-app.vercel.app", "https://swanandpande.com"],
  methods: ["GET", "POST"],
  credentials: true
}));

let gameno = 0;
let Rooms = [];
const port = 4000;
const generateUniqueId = require('./genID.js');
const { log } = require('console');

app.get('/', (req, res) => {
  res.send('Welcome to Shatranj!')
});

app.get('/create-game', (req, res) => {
  const gameId = generateUniqueId(gameno); // Implement a function to generate a unique game ID
  gameno += 1;
  log(`Created game with ID ${gameId}`);
  res.json({ gameId });
});

io.on('connection', (socket) => {
  socket.on('create-game', (gameid) => {
    log(`Player joined game ${gameid}`);
    socket.join(gameid);
    io.to(gameid).emit("roomJoined", `You have joined the room: ${gameid}`);
  });

  socket.on('join-game', (gameid) => {
    if (io.of("/").adapter.rooms.get(gameid)) {
      const room = io.of("/").adapter.rooms.get(gameid);
      log(`Player joined game ${gameid}`);
      socket.join(gameid);
      io.to(gameid).emit("roomJoined", `You have joined the room: ${gameid} with ${room.size} members`);
    } else {
      console.log("room doesn't exist");
    }
  });

  socket.on('return-members', (gameid) => {
    if (io.of("/").adapter.rooms.get(gameid)) {
      const room = io.of("/").adapter.rooms.get(gameid);
      log(`Player joined game ${gameid}`);
      io.to(gameid).emit("roomJoined", `You have joined the room: ${gameid} with ${room.size} members`);
    } else {
      console.log("room doesn't exist");
    }
  });

  socket.on('send-moves', (game_id, image_pos, whitemove, boarddisable) => {
    console.log("move received by server");
    socket.broadcast.to(game_id).emit("receive-moves", image_pos, whitemove, boarddisable);
    console.log("move received by server");
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
