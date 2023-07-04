const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server,{ 
  cors: {
    origin: "http://localhost:5173/",
    methods: ["GET", "POST"]
  }
}

, );

let gameno = 0;
port = 4000;
const generateUniqueId = require('./genID.js');
const { log } = require('console');

const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to Shatranj!')
})

app.get('/create-game', (req, res) => {
  const gameId = generateUniqueId(gameno); // Implement a function to generate a unique game ID
  gameno+=1;
  log(`Created game with ID ${gameId}`);
  res.json({ gameId });
});

io.on("connection", (socket)=> {

  socket.on('join-game', (gameid) => {

    socket.join(gameid) ;
    io.to(gameid).emit('playerJoined');
    

  })




})


  app.get('/', (req, res) => {
    res.send('Welcome to Shatranj!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




 //1. Signup 
 //2. Login 
 //3. Play with Friend 
 //4. Random 
