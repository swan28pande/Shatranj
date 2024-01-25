// create a standard react component 


import  { useRef ,useEffect} from 'react';

import './sidecanvas.css'  ; 

const Side_canvas = () => {
    const canvasRef = useRef(null);


      useEffect(() => {

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
        
            // Set the canvas background color to light gray

            context.fillStyle = "#FCF2FF";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#8757AB";
            context.fillRect(0, 460, canvas.width, canvas.height);

            context.fillStyle = "#8757AB";
            context.fillRect(0, 0, canvas.width, 100);

            

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
        <canvas ref={canvasRef} className="my-canvas" width={300} height={560}></canvas>
        </div>
       
    );
} ; 

export default Side_canvas ; 







