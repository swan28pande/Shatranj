// create a standard react component 


import React, { useRef ,useEffect,useState} from 'react';

import './sidecanvas.css'  ; 

const side_canvas = () => {
    const canvasRef = useRef(null);

    const [moves, setMoves] = useState([]);

      useEffect(() => {

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
        
            // Set the canvas background color to light gray

            context.fillStyle = '#eee';


            context.fillRect(0, 0, canvas.width, canvas.height);
            // draw a horizontal line
            context.beginPath();
            context.moveTo(0, 100);
            context.lineTo(300, 100);
            context.moveTo(0, 500);
            context.lineTo(300, 500);
            context.stroke();
            moves_showcase();
      } , []);

      const moves_showcase = ()  => {


        //show moves in the side canvas

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.font = "20px Arial";
        // show 5 moves from 120px from top in black
        context.fillStyle = "black";
        
        


        


       

        
      



        

           


      }




    return (

        <div className='container'>
        <canvas ref={canvasRef} className="my-canvas" width={300} height={600}></canvas>
        </div>
       
    );
} ; 

export default side_canvas ; 







