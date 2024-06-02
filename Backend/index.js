const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const allowedOrigins = ["http://localhost:5173", "https://shatranj-app.vercel.app", "https://www.swanandpande.com"];

const io = socketIO(server, {
  cors: {
    origin: function (origin, callback) {
      // Check if the origin is allowed
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST"],
    credentials: true
  }
});

// CORS middleware for Express
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST"],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Welcome to Shatranj!');
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  socket.on('create-game', (gameid) => {
    console.log(`Player joined game ${gameid}`);
    socket.join(gameid);
    io.to(gameid).emit("roomJoined", `You have joined the room: ${gameid}`);
  });

  socket.on('join-game', (gameid) => {
    const room = io.of("/").adapter.rooms.get(gameid);
    if (room) {
      console.log(`Player joined game ${gameid}`);
      socket.join(gameid);
      io.to(gameid).emit("roomJoined", `You have joined the room: ${gameid} with ${room.size} members`);
    } else {
      console.log("room doesn't exist");
    }
  });

  socket.on('return-members', (gameid) => {
    const room = io.of("/").adapter.rooms.get(gameid);
    if (room) {
      console.log(`Player joined game ${gameid}`);
      io.to(gameid).emit("roomJoined", `You have joined the room: ${gameid} with ${room.size} members`);
    } else {
      console.log("room doesn't exist");
    }
  });

  socket.on('send-moves', (game_id, image_pos, whitemove, boarddisable) => {
    console.log("move received by server");
    socket.broadcast.to(game_id).emit("receive-moves", image_pos, whitemove, boarddisable);
  });
});
