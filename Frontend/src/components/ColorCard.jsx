
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@material-ui/core/ButtonBase';




export default function TimeCard({setTime,time,type}) {


    return (
      <Card sx={{ maxWidth: 200 , margin:2, padding:2}}>
       <ButtonBase onClick = {()=>{setTime(time)}}>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {time}m+Os
          </Typography>
          <Typography variant="h4" color="text.secondary">
            {type}
          </Typography>
        </CardContent>
        </ButtonBase>
      </Card>
    );
  }

