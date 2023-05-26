// create a standard react component 


import React, { useRef ,useEffect} from 'react';

import './sidecanvas.css'  ; 

const side_canvas = () => {
    const canvasRef = useRef(null);
      useEffect(() => {

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
        
            // Set the canvas background color to black
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);
      }, []);

    return (

        <div className='container'>
        <canvas ref={canvasRef} className="my-canvas" width={300} height={600}></canvas>
        </div>
       
    );
} ; 

export default side_canvas ; 







