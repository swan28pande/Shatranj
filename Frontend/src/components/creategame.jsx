import React, { useEffect, useState }  from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";

import { socket } from "../socket";

// import './joingame.css'





const create_game = () => {
    const [game_id, setGame_id] = useState("");

    useEffect( ()=>{

       
        socket.on("roomJoined", (message) => {
            console.log(message); // Print the message to the console
          });


    }, [])
    return (
        <div>
            <h1>Create Game</h1>
            <button onClick={ () =>{
       fetch('http://localhost:4000/create-game')
       .then(response => response.json())
       .then((data) => {
        console.log("game created");
        console.log(data);
        setGame_id(data.gameId);
        socket.emit('create-game',data.gameId);
        
     })
     .catch((err) => {
        console.log(err.message);
     })
    }}>create Game</button>
       
    <h1>{game_id}</h1>
    </div>
    )
}



export default create_game;
