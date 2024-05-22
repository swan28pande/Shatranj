import  { useEffect, useState }  from "react";

import { socket } from "../socket";

import Button from '@mui/material/Button';
// import './joingame.css'
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import TimeCard from "./TimeCard";
import { Typography } from "@mui/material";
import WhiteKing from "../assets/Pieces/wk_1.svg"
import BlackKing from "../assets/Pieces/bk_1.svg"
const Create_game = () => {
    const [game_id, setGame_id] = useState("");
    // const [Time, setTime] = useState(0);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedKing, setSelectedKing] = useState(null); // New state for tracking selected king
    const handleSetTime = (time) => {
        setSelectedTime(time);
    };
    const handleClickKing = (king) => {
        setSelectedKing(king);
    };
    const kingStyle = (king) => ({
        cursor: 'pointer',
        border: selectedKing === king ? '3px solid black' : 'none',
    });

    const times = [
        { time: 5, type: "Blitz" },
        { time: 10, type: "Rapid" },
        // Add more times and types as needed
    ];

    const Send = () => {
        console.log(selectedTime)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(`http://localhost:5174/room/${game_id}/white`);
    };
    useEffect( ()=>{

       
        socket.on("roomJoined", (message) => {
            console.log(message); // Print the message to the console
          });
         

    }, [])

    const centerStyle = {
        display: 'flex',
        flexDirection: 'column', // Align items vertically
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };
    return (
        <>
         <br/>
         <br/>
         <br/>
         <div style={{display:'flex', justifyContent:"center"}}> 
           <Typography variant="h5" color="black" fontFamily={"Bricolage Grotesque"} >
            Select Color
              </Typography>
        </div>
        <br/>
        <div style={{display:'flex', justifyContent:"center"}}> 
                <img src={WhiteKing} alt="White King" style={kingStyle('white')} onClick={() => handleClickKing('white')} />
                <img src={BlackKing} alt="Black King" style={kingStyle('black')} onClick={() => handleClickKing('black')} />
            </div>
        <br/>
         <br/>
        <div style={{display:'flex', justifyContent:"center"}}> 
           <Typography variant="h5" color="black" fontFamily={"Bricolage Grotesque"} >
            Select Time Control
              </Typography>
        </div>
        <br/>
       

        <div style={{  display: 'flex', flexWrap:"wrap", justifyContent:'center' }}>
        {times.map(({ time, type }) => (
                <TimeCard 
                    key={time} 
                    setTime={handleSetTime} 
                    time={time} 
                    type={type} 
                    selected={time === selectedTime}
                />
            ))}
         </div>
        <div style={centerStyle}>
    { game_id === "" && 
            <>
    <Button variant="outlined" onClick={ () =>{
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
    }}>Generate link</Button>
   
    <Button variant="outlined" onClick={Send}>
        Generate link
    </Button>
    </>

        

}
    { game_id !== "" &&(<div style={{ width: '60%', display: 'flex', alignItems: 'center' }}>
        <TextField
            fullWidth
            
            label="Game Link"
            value={`http://localhost:5174/room/${game_id}/white`}
            variant="outlined"
            style={{ outline: 'white' }}
            InputProps={{
                readOnly: true,
                inputProps: { // Target the inner input element
                    style: { textAlign: 'center' } // Center align text
                }
            }}
        />
        <IconButton onClick={handleCopyClick}>
            <ContentCopyIcon />
        </IconButton>
    </div>)
}
</div>
</>
    )
}



export default Create_game;
