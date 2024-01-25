import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function TimeCard({ setTime, time, type,selected }) {
    // Define a click handler
    const handleClick = () => {
        // Call a function or handle the click event
        console.log("Card clicked"); // Replace with your own logic
        setTime(time);
        // If you want to use setTime, you can do it here
        // setTime(...)
    };

    return (
        <Card sx={{ 
            maxWidth: 200, 
            margin: 2, 
            padding: 2, 
            backgroundColor: selected ? "black" : "white",
            color: selected ? "white" : "inherit",
            transition: "transform 0.4s ease-in-out",
            ":hover": {
                // backgroundColor: "#b148d2",
                // color: "white",
                transform: "scale(1.2)",
            }
        } }>
            <CardActionArea onClick={handleClick}>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {time}m+0s
                    </Typography>
                    <Typography variant="h4" >
                        {type}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
