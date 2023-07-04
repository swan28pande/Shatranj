import React,{ useState,useEffect }  from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";

import { socket } from './socket';





const join_game = () => {
    const [game_id, setGame_id] = useState("");

    useEffect(() => {
        // Establish a connection to the Socket.IO server
        const socket = io("http://localhost:4000");
    
    
        // Cleanup the socket connection when the component unmounts
      }, []);

    return (
      
        <div>
 
            <h1>Join Game</h1>
            <input onChange = { (e) => {setGame_id(e.target.value)}}/>
            <button onClick= {()=> {
                io.emit('join-game',game_id); 
            }}>Join</button>

        
    </div>
    )
}



export default join_game;
