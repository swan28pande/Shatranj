import React,{ useState,useEffect }  from "react";
import { socket } from '../socket.js';





const join_game = () => {
    const [game_id, setGame_id] = useState("");

    useEffect(() => {
        // Establish a connection to the Socket.IO server
        socket.connect();

        socket.on("roomJoined", (message) => {
            console.log(message); // Print the message to the console
          });
      },
       []);

    return (
      
        <div>
 
            <h1>Join Game</h1>
            <div>
                <input onChange = { (e) => {setGame_id(e.target.value)}}/>
                <button type = "submit" onClick= {()=> {
                    socket.emit('join-game',game_id);
                }}>Join</button>
            </div>
            {/* <input onChange = { (e) => {setGame_id(e.target.value)}}/>
            <button type = "submit" onClick= {()=> {
                socket.emit('join-game',game_id); 
            }}>Join</button> */}

        
    </div>
    )
}



export default join_game;
