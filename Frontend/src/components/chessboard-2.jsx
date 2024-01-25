import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhitePawn_1 from '../assets/Pieces/wp_1.svg';
import WhitePawn_2 from '../assets/Pieces/wp_2.svg';
import WhitePawn_3 from '../assets/Pieces/wp_3.svg';
import WhitePawn_4 from '../assets/Pieces/wp_4.svg';
import WhitePawn_5 from '../assets/Pieces/wp_5.svg';
import WhitePawn_6 from '../assets/Pieces/wp_6.svg';
import WhitePawn_7 from '../assets/Pieces/wp_7.svg';
import WhitePawn_8 from '../assets/Pieces/wp_8.svg';

import BlackPawn_1 from '../assets/Pieces/bp_1.svg';
import BlackPawn_2 from '../assets/Pieces/bp_2.svg';
import BlackPawn_3 from '../assets/Pieces/bp_3.svg';
import BlackPawn_4 from '../assets/Pieces/bp_4.svg';
import BlackPawn_5 from '../assets/Pieces/bp_5.svg';
import BlackPawn_6 from '../assets/Pieces/bp_6.svg';
import BlackPawn_7 from '../assets/Pieces/bp_7.svg';
import BlackPawn_8 from '../assets/Pieces/bp_8.svg';

import WhiteKnight_1 from '../assets/Pieces/wn_1.svg';
import WhiteKnight_2 from '../assets/Pieces/wn_2.svg';
import BlackKnight_1 from '../assets/Pieces/bn_1.svg';
import BlackKnight_2 from '../assets/Pieces/bn_2.svg';

import WhiteBishop_1 from '../assets/Pieces/wb_1.svg';
import WhiteBishop_2 from '../assets/Pieces/wb_2.svg';
import BlackBishop_1 from '../assets/Pieces/bb_1.svg';
import BlackBishop_2 from '../assets/Pieces/bb_2.svg';

import WhiteRook_1 from '../assets/Pieces/wr_1.svg';
import WhiteRook_2 from '../assets/Pieces/wr_2.svg';
import BlackRook_1 from '../assets/Pieces/br_1.svg';
import BlackRook_2 from '../assets/Pieces/br_2.svg';

import WhiteQueen from '../assets/Pieces/wq_1.svg';
import BlackQueen from '../assets/Pieces/bq_1.svg';
import WhiteKing from '../assets/Pieces/wk_1.svg';
import BlackKing from '../assets/Pieces/bk_1.svg';

import Side_canvas from "./sidecanvas";
// import './chessboard.css' ; 

import { codemoves } from "./chess_scripts/decodemoves";
import { socket } from '../socket.js';




const Chessboard_2 = () => {
 

  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const whitePawn_1Ref = useRef(null);
  const whitePawn_2Ref = useRef(null);
  const whitePawn_3Ref = useRef(null);
  const whitePawn_4Ref = useRef(null);
  const whitePawn_5Ref = useRef(null);
  const whitePawn_6Ref = useRef(null);
  const whitePawn_7Ref = useRef(null);
  const whitePawn_8Ref = useRef(null);
  const blackPawn_1Ref = useRef(null);
  const blackPawn_2Ref = useRef(null);
  const blackPawn_3Ref = useRef(null);
  const blackPawn_4Ref = useRef(null);
  const blackPawn_5Ref = useRef(null);
  const blackPawn_6Ref = useRef(null);
  const blackPawn_7Ref = useRef(null);
  const blackPawn_8Ref = useRef(null);
  const whiteKnight_1Ref = useRef(null);
  const whiteKnight_2Ref = useRef(null);
  const blackKnight_1Ref = useRef(null);
  const blackKnight_2Ref = useRef(null);
  const whiteBishop_1Ref = useRef(null);
  const whiteBishop_2Ref = useRef(null);
  const blackBishop_1Ref = useRef(null);
  const blackBishop_2Ref = useRef(null);
  const whiteRook_1Ref = useRef(null);
  const whiteRook_2Ref = useRef(null);
  const blackRook_1Ref = useRef(null);
  const blackRook_2Ref = useRef(null);
  const whiteQueenRef = useRef(null);
  const blackQueenRef = useRef(null);
  const whiteKingRef = useRef(null);
  const blackKingRef = useRef(null);


    const [selectedPiece, setSelectedPiece] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [InitialPosition,setInitialPosition] = useState([]) ;
    const [FinalPosition,setFinalPosition] = useState([]) ;
   
    const [ImagePositions,setImagePositions] = useState([]) ; 
    const [whitemove,setwhitemove]=useState(true);


    const { game_id } = useParams();

  useEffect(() => {


    console.log(game_id);
    socket.emit('join-game',game_id);
    // socket.emit('return-members',game_id);

    const whitePawn_1Image = new Image();
    whitePawn_1Image.src = WhitePawn_1;
    whitePawn_1Image.onload = () => {
      whitePawn_1Ref.current = whitePawn_1Image;
      checkAllImagesLoaded();
    };
    const whitePawn_2Image = new Image();
    whitePawn_2Image.src = WhitePawn_2;
    whitePawn_2Image.onload = () => {
      whitePawn_2Ref.current = whitePawn_2Image;
      checkAllImagesLoaded();
    };
    const whitePawn_3Image = new Image();
    whitePawn_3Image.src = WhitePawn_3;
    whitePawn_3Image.onload = () => {
      whitePawn_3Ref.current = whitePawn_3Image;
      checkAllImagesLoaded();
    };
    const whitePawn_4Image = new Image();
    whitePawn_4Image.src = WhitePawn_4;
    whitePawn_4Image.onload = () => {
      whitePawn_4Ref.current = whitePawn_4Image;
      checkAllImagesLoaded();
    };
    const whitePawn_5Image = new Image();
    whitePawn_5Image.src = WhitePawn_5;
    whitePawn_5Image.onload = () => {
      whitePawn_5Ref.current = whitePawn_5Image;
      checkAllImagesLoaded();
    };
    const whitePawn_6Image = new Image();
    whitePawn_6Image.src = WhitePawn_6;
    whitePawn_6Image.onload = () => {
      whitePawn_6Ref.current = whitePawn_6Image;
      checkAllImagesLoaded();
    };
    const whitePawn_7Image = new Image();
    whitePawn_7Image.src = WhitePawn_7;
    whitePawn_7Image.onload = () => {
      whitePawn_7Ref.current = whitePawn_7Image;
      checkAllImagesLoaded();
    };
    const whitePawn_8Image = new Image();
    whitePawn_8Image.src = WhitePawn_8;
    whitePawn_8Image.onload = () => {
      whitePawn_8Ref.current = whitePawn_8Image;
      checkAllImagesLoaded();
    };
    const blackPawn_1Image = new Image();
    blackPawn_1Image.src = BlackPawn_1;
    blackPawn_1Image.onload = () => {
      blackPawn_1Ref.current = blackPawn_1Image;
      checkAllImagesLoaded();
    };
    const blackPawn_2Image = new Image();
    blackPawn_2Image.src = BlackPawn_2;
    blackPawn_2Image.onload = () => {
      blackPawn_2Ref.current = blackPawn_2Image;
      checkAllImagesLoaded();
    };
    const blackPawn_3Image = new Image();
    blackPawn_3Image.src = BlackPawn_3;
    blackPawn_3Image.onload = () => {
      blackPawn_3Ref.current = blackPawn_3Image;
      checkAllImagesLoaded();
    };
    const blackPawn_4Image = new Image();
    blackPawn_4Image.src = BlackPawn_4;
    blackPawn_4Image.onload = () => {
      blackPawn_4Ref.current = blackPawn_4Image;
      checkAllImagesLoaded();
    };
    const blackPawn_5Image = new Image();
    blackPawn_5Image.src = BlackPawn_5;
    blackPawn_5Image.onload = () => {
      blackPawn_5Ref.current = blackPawn_5Image;
      checkAllImagesLoaded();
    };
    const blackPawn_6Image = new Image();
    blackPawn_6Image.src = BlackPawn_6;
    blackPawn_6Image.onload = () => {
      blackPawn_6Ref.current = blackPawn_6Image;
      checkAllImagesLoaded();
    };
    const blackPawn_7Image = new Image();
    blackPawn_7Image.src = BlackPawn_7;
    blackPawn_7Image.onload = () => {
      blackPawn_7Ref.current = blackPawn_7Image;
      checkAllImagesLoaded();
    };
    const blackPawn_8Image = new Image();
    blackPawn_8Image.src = BlackPawn_8;
    blackPawn_8Image.onload = () => {
      blackPawn_8Ref.current = blackPawn_8Image;
      checkAllImagesLoaded();
    };
    const whiteRook_1Image = new Image();
    whiteRook_1Image.src = WhiteRook_1;
    whiteRook_1Image.onload = () => {
      whiteRook_1Ref.current = whiteRook_1Image;
      checkAllImagesLoaded();
    };
    const whiteRook_2Image = new Image();
    whiteRook_2Image.src = WhiteRook_2;
    whiteRook_2Image.onload = () => {
      whiteRook_2Ref.current = whiteRook_2Image;
      checkAllImagesLoaded();
    };
    const blackRook_1Image = new Image();
    blackRook_1Image.src = BlackRook_1;
    blackRook_1Image.onload = () => {
      blackRook_1Ref.current = blackRook_1Image;
      checkAllImagesLoaded();
    };
    const blackRook_2Image = new Image();
    blackRook_2Image.src = BlackRook_2;
    blackRook_2Image.onload = () => {
      blackRook_2Ref.current = blackRook_2Image;
      checkAllImagesLoaded();
    };
    const whiteKnight_1Image = new Image();
    whiteKnight_1Image.src = WhiteKnight_1;
    whiteKnight_1Image.onload = () => {
      whiteKnight_1Ref.current = whiteKnight_1Image;
      checkAllImagesLoaded();
    };
    const whiteKnight_2Image = new Image();
    whiteKnight_2Image.src = WhiteKnight_2;
    whiteKnight_2Image.onload = () => {
      whiteKnight_2Ref.current = whiteKnight_2Image;
      checkAllImagesLoaded();
    };
    const blackKnight_1Image = new Image();
    blackKnight_1Image.src = BlackKnight_1;
    blackKnight_1Image.onload = () => {
      blackKnight_1Ref.current = blackKnight_1Image;
      checkAllImagesLoaded();
    };
    const blackKnight_2Image = new Image();
    blackKnight_2Image.src = BlackKnight_2;
    blackKnight_2Image.onload = () => {
      blackKnight_2Ref.current = blackKnight_2Image;
      checkAllImagesLoaded();
    };
    const whiteBishop_1Image = new Image();
    whiteBishop_1Image.src = WhiteBishop_1;
    whiteBishop_1Image.onload = () => {
      whiteBishop_1Ref.current = whiteBishop_1Image;
      checkAllImagesLoaded();
    };
    const whiteBishop_2Image = new Image();
    whiteBishop_2Image.src = WhiteBishop_2;
    whiteBishop_2Image.onload = () => {
      whiteBishop_2Ref.current = whiteBishop_2Image;
      checkAllImagesLoaded();
    };
    const blackBishop_1Image = new Image();
    blackBishop_1Image.src = BlackBishop_1;
    blackBishop_1Image.onload = () => {
      blackBishop_1Ref.current = blackBishop_1Image;
      checkAllImagesLoaded();
    };
    const blackBishop_2Image = new Image();
    blackBishop_2Image.src = BlackBishop_2;
    blackBishop_2Image.onload = () => {
      blackBishop_2Ref.current = blackBishop_2Image;
      checkAllImagesLoaded();
    };
   


    const whiteQueenImage = new Image();
    whiteQueenImage.src = WhiteQueen;
    whiteQueenImage.onload = () => {
        whiteQueenRef.current = whiteQueenImage;
        checkAllImagesLoaded();
        };
    const blackQueenImage = new Image();
    blackQueenImage.src = BlackQueen;
    blackQueenImage.onload = () => {
        blackQueenRef.current = blackQueenImage;
        checkAllImagesLoaded();
        };
    const whiteKingImage = new Image();
    whiteKingImage.src = WhiteKing;
    whiteKingImage.onload = () => {
        whiteKingRef.current = whiteKingImage;
        checkAllImagesLoaded();
        };
    const blackKingImage = new Image();
    blackKingImage.src = BlackKing;
    blackKingImage.onload = () => {
        blackKingRef.current = blackKingImage;
        checkAllImagesLoaded();
        };


  socket.on("roomJoined", (message) => {
    console.log(message); // Print the message to the console
  });

  socket.on('recieve-moves',(image_pos)=> {
    setImagePositions(image_pos);
    draw_pieces();
    console.log(ImagePositions);
  });
}, []);


  const checkAllImagesLoaded = () => {
    if ( whiteBishop_1Ref.current && whiteBishop_2Ref.current && blackBishop_1Ref.current && blackBishop_2Ref.current && whiteKnight_1Ref.current && whiteKnight_2Ref.current && blackKnight_1Ref.current && blackKnight_2Ref.current && whiteRook_1Ref.current && whiteRook_2Ref.current && blackRook_1Ref.current && blackRook_2Ref.current && whiteQueenRef.current && blackQueenRef.current && whiteKingRef.current && blackKingRef.current && whitePawn_1Ref.current && whitePawn_2Ref.current && whitePawn_3Ref.current && whitePawn_4Ref.current && whitePawn_5Ref.current && whitePawn_6Ref.current && whitePawn_7Ref.current && whitePawn_8Ref.current && blackPawn_1Ref.current && blackPawn_2Ref.current && blackPawn_3Ref.current && blackPawn_4Ref.current && blackPawn_5Ref.current && blackPawn_6Ref.current && blackPawn_7Ref.current && blackPawn_8Ref.current)
 {
      setImagesLoaded(true);
    }
  };

let whitepieces = ['wr_1','wn_1','wb_1','wq_1','wk_1','wb_2','wn_2','wr_2','wp_1','wp_2','wp_3','wp_4','wp_5','wp_6','wp_7','wp_8'] ;

let codetoimg = {'wr_1':whiteRook_1Ref.current,'wn_1':whiteKnight_1Ref.current,'wb_1':whiteBishop_1Ref.current,'wq_1':whiteQueenRef.current,'wk_1':whiteKingRef.current,'wb_2':whiteBishop_2Ref.current,'wn_2':whiteKnight_2Ref.current,'wr_2':whiteRook_2Ref.current,'wp_1':whitePawn_1Ref.current,'wp_2':whitePawn_2Ref.current,'wp_3':whitePawn_3Ref.current,'wp_4':whitePawn_4Ref.current,'wp_5':whitePawn_5Ref.current,'wp_6':whitePawn_6Ref.current,'wp_7':whitePawn_7Ref.current,'wp_8':whitePawn_8Ref.current,
                  'br_1':blackRook_1Ref.current,'bn_1':blackKnight_1Ref.current,'bb_1':blackBishop_1Ref.current,'bq_1':blackQueenRef.current,'bk_1':blackKingRef.current,'bb_2':blackBishop_2Ref.current,'bn_2':blackKnight_2Ref.current,'br_2':blackRook_2Ref.current,'bp_1':blackPawn_1Ref.current,'bp_2':blackPawn_2Ref.current,'bp_3':blackPawn_3Ref.current,'bp_4':blackPawn_4Ref.current,'bp_5':blackPawn_5Ref.current,'bp_6':blackPawn_6Ref.current,'bp_7':blackPawn_7Ref.current,'bp_8':blackPawn_8Ref.current }
                 ;
// let imgtocode = { [whiteRook_1Ref.current]: 'wr_1', [whiteKnight_1Ref.current]: 'wn_1', [whiteBishop_1Ref.current]: 'wb_1', [whiteQueenRef.current]: 'wq_1', [whiteKingRef.current]: 'wk_1', [whiteBishop_2Ref.current]: 'wb_2', [whiteKnight_2Ref.current]: 'wn_2', [whiteRook_2Ref.current]: 'wr_2', [whitePawn_1Ref.current]: 'wp_1', [whitePawn_2Ref.current]: 'wp_2', [whitePawn_3Ref.current]: 'wp_3', [whitePawn_4Ref.current]: 'wp_4', [whitePawn_5Ref.current]: 'wp_5', [whitePawn_6Ref.current]: 'wp_6', [whitePawn_7Ref.current]: 'wp_7', [whitePawn_8Ref.current]: 'wp_8', [blackRook_1Ref.current]: 'br_1', [blackKnight_1Ref.current]: 'bn_1', [blackBishop_1Ref.current]: 'bb_1', [blackQueenRef.current]: 'bq_1', [blackKingRef.current]: 'bk_1', [blackBishop_2Ref.current]: 'bb_2', [blackKnight_2Ref.current]: 'bn_2', [blackRook_2Ref.current]: 'br_2', [blackPawn_1Ref.current]: 'bp_1', [blackPawn_2Ref.current]: 'bp_2', [blackPawn_3Ref.current]: 'bp_3', [blackPawn_4Ref.current]: 'bp_4', [blackPawn_5Ref.current]: 'bp_5', [blackPawn_6Ref.current]: 'bp_6', [blackPawn_7Ref.current]: 'bp_7', [blackPawn_8Ref.current]: 'bp_8' };


  function iswhitepiece(piece)
  {
      for(let i = 0 ; i < whitepieces.length ; i++)
      {
          if(piece === whitepieces[i])
          {
              return true ;
          }
      }
      return false ;
  }
  

  function draw_pieces() { 
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      // clear canvas
      ctx.clearRect(0,0,canvas.width,canvas.height) ;
      draw_squares() ;
      for(let i = 0 ; i < ImagePositions.length ; i++){
          ctx.drawImage(codetoimg[ImagePositions[i].piece],ImagePositions[i].x,ImagePositions[i].y,70,70) ; 
      }
      socket.emit('send-moves', (game_id,ImagePositions));
  }


  function draw_squares()
  {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let image_pos = [];
    // Drawing the chessboard
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          ctx.fillStyle = "#FCF2FF";
        } else {
          ctx.fillStyle = "#A85EAC";
        }
        ctx.fillRect(i * 70, j * 70, 70, 70);
      }
    }
  }
  function checkinbetween()
  {
    if(selectedPiece==='wp_1'||selectedPiece==='wp_2'||selectedPiece==='wp_3'||selectedPiece==='wp_4'||selectedPiece==='wp_5'||selectedPiece==='wp_6'||selectedPiece==='wp_7'||selectedPiece==='wp_8')
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y>FinalPosition.y&&ImagePositions[i].y<InitialPosition.y)
        {
          return true ;
        }
  
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&iswhitepiece(ImagePositions[i].piece)===false&&FinalPosition.y===InitialPosition.y-70)
        {
            captured(ImagePositions[i].piece)
            return false ;
        }
  
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&iswhitepiece(ImagePositions[i].piece)===true&&FinalPosition.y===InitialPosition.y-70 && ImagePositions[i].piece!==selectedPiece)
        {
            return true ;
        }
  
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&ImagePositions[i].x===InitialPosition.x&&ImagePositions[i].image!==InitialPosition.y-140&&ImagePositions[i].piece!==selectedPiece )
        {
          return true ;
        }
    
      }
      return false ;
    }
    if(selectedPiece==='bp_1'||selectedPiece==='bp_2'||selectedPiece==='bp_3'||selectedPiece==='bp_4'||selectedPiece==='bp_5'||selectedPiece==='bp_6'||selectedPiece==='bp_7'||selectedPiece==='bp_8')
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y<FinalPosition.y&&ImagePositions[i].y>InitialPosition.y)
        {
          return true ;
        }
  
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&iswhitepiece(ImagePositions[i].piece)===true&&FinalPosition.y===InitialPosition.y+70)
        {
            captured(ImagePositions[i].piece)
            return false ;
        }
  
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&iswhitepiece(ImagePositions[i].piece)===false&&FinalPosition.y===InitialPosition.y+70&&ImagePositions[i].piece!==selectedPiece)
        {
            return true ;
        }
  
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&ImagePositions[i].x===InitialPosition.x&&ImagePositions[i].image!==InitialPosition.y+140&&ImagePositions[i].piece!==selectedPiece )
        {
          return true ;
        }
      }
      return false ;
    }
    if(selectedPiece==='wr_1'||selectedPiece==='wr_2'||selectedPiece==='br_1'||selectedPiece==='br_2')  {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(InitialPosition.x===FinalPosition.x&&ImagePositions[i].x===FinalPosition.x&&FinalPosition.y>ImagePositions[i].y&&ImagePositions[i].y>InitialPosition.y)
        {
          return true ;
        }
        if(InitialPosition.x===FinalPosition.x&&ImagePositions[i].x===FinalPosition.x&&FinalPosition.y<ImagePositions[i].y&&ImagePositions[i].y<InitialPosition.y)
        {
          return true ;
        }
        if(InitialPosition.y===FinalPosition.y&&ImagePositions[i].y===FinalPosition.y&&FinalPosition.x>ImagePositions[i].x&&ImagePositions[i].x>InitialPosition.x)
        {
          return true ;
        }
        if(InitialPosition.y===FinalPosition.y&&ImagePositions[i].y===FinalPosition.y&&FinalPosition.x<ImagePositions[i].x&&ImagePositions[i].x<InitialPosition.x)
        {
          return true ;
        }
  
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].piece!==selectedPiece && iswhitepiece(selectedPiece)===iswhitepiece(ImagePositions[i].piece))
        {
          return true ;
        }
      }
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].piece!==selectedPiece)
          captured(ImagePositions[i].piece);
      }
      
  
      return false ;
    }
    if(selectedPiece==='wb_1'||selectedPiece==='wb_2'||selectedPiece==='bb_1'||selectedPiece==='bb_2')
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(FinalPosition.x>InitialPosition.x&&FinalPosition.y>InitialPosition.y&&ImagePositions[i].x>InitialPosition.x&&ImagePositions[i].x<FinalPosition.x&&ImagePositions[i].y>InitialPosition.y&&ImagePositions[i].y<FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
          }
        
        if(FinalPosition.x<InitialPosition.x&&FinalPosition.y>InitialPosition.y&&ImagePositions[i].x<InitialPosition.x&&ImagePositions[i].x>FinalPosition.x&&ImagePositions[i].y>InitialPosition.y&&ImagePositions[i].y<FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
        }
        if(FinalPosition.x>InitialPosition.x&&FinalPosition.y<InitialPosition.y&&ImagePositions[i].x>InitialPosition.x&&ImagePositions[i].x<FinalPosition.x&&ImagePositions[i].y<InitialPosition.y&&ImagePositions[i].y>FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
        }
        if(FinalPosition.x<InitialPosition.x&&FinalPosition.y<InitialPosition.y&&ImagePositions[i].x<InitialPosition.x&&ImagePositions[i].x>FinalPosition.x&&ImagePositions[i].y<InitialPosition.y&&ImagePositions[i].y>FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
        }
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].piece!==selectedPiece && iswhitepiece(selectedPiece)===iswhitepiece(ImagePositions[i].piece))
        {
          return true ;
        }
  
  
       
      }
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].piece!==selectedPiece)
          captured(ImagePositions[i].piece);
      }
      return false ;
    }
    if(selectedPiece==='wq_1'||selectedPiece==='bq_1')
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(InitialPosition.x===FinalPosition.x&&ImagePositions[i].x===FinalPosition.x&&FinalPosition.y>ImagePositions[i].y&&ImagePositions[i].y>InitialPosition.y)
        {
          return true ;
        }
        if(InitialPosition.x===FinalPosition.x&&ImagePositions[i].x===FinalPosition.x&&FinalPosition.y<ImagePositions[i].y&&ImagePositions[i].y<InitialPosition.y)
        {
          return true ;
        }
        if(InitialPosition.y===FinalPosition.y&&ImagePositions[i].y===FinalPosition.y&&FinalPosition.x>ImagePositions[i].x&&ImagePositions[i].x>InitialPosition.x)
        {
          return true ;
        }
        if(InitialPosition.y===FinalPosition.y&&ImagePositions[i].y===FinalPosition.y&&FinalPosition.x<ImagePositions[i].x&&ImagePositions[i].x<InitialPosition.x)
        {
          return true ;
        }
        if(FinalPosition.x>InitialPosition.x&&FinalPosition.y>InitialPosition.y&&ImagePositions[i].x>InitialPosition.x&&ImagePositions[i].x<FinalPosition.x&&ImagePositions[i].y>InitialPosition.y&&ImagePositions[i].y<FinalPosition.y)
        {
  
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
          }
        
        if(FinalPosition.x<InitialPosition.x&&FinalPosition.y>InitialPosition.y&&ImagePositions[i].x<InitialPosition.x&&ImagePositions[i].x>FinalPosition.x&&ImagePositions[i].y>InitialPosition.y&&ImagePositions[i].y<FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
        }
        if(FinalPosition.x>InitialPosition.x&&FinalPosition.y<InitialPosition.y&&ImagePositions[i].x>InitialPosition.x&&ImagePositions[i].x<FinalPosition.x&&ImagePositions[i].y<InitialPosition.y&&ImagePositions[i].y>FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
        }
        if(FinalPosition.x<InitialPosition.x&&FinalPosition.y<InitialPosition.y&&ImagePositions[i].x<InitialPosition.x&&ImagePositions[i].x>FinalPosition.x&&ImagePositions[i].y<InitialPosition.y&&ImagePositions[i].y>FinalPosition.y)
        {
          if((ImagePositions[i].y-InitialPosition.y)*(FinalPosition.x-InitialPosition.x)==(ImagePositions[i].x-InitialPosition.x)*(FinalPosition.y-InitialPosition.y))
          {
          return true ;
          }
        }
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].piece!==selectedPiece && iswhitepiece(selectedPiece)===iswhitepiece(ImagePositions[i].piece))
        {
          return true ;
        }
  
  
  
      }
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].piece!==selectedPiece)
          captured(ImagePositions[i].piece);
      }
      return false ;
    }
    if(selectedPiece==='wk_1'||selectedPiece==='bk_1')
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y && ImagePositions[i].piece!==selectedPiece)
        {
          if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].piece))
          {
            captured(ImagePositions[i].piece);
            return false ;
  
          }
        
          return true ;
          
        }
      }
      return false ;
    }
    if(selectedPiece==='wn_1'||selectedPiece==='wn_2'||selectedPiece==='bn_1'||selectedPiece==='bn_2')
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y && ImagePositions[i].piece!==selectedPiece)
        {
          if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].piece))
          {
            captured(ImagePositions[i].piece);
            return false ;
  
          }
        
          return true ;
          
        }
      }
      return false ;
      
      
    }
  
  }
   
 function captured (finalPiece)
 { 
    if(iswhitepiece(selectedPiece))
    {
      
      if(!iswhitepiece(finalPiece))
      {
        for(let i=0;i<ImagePositions.length;i++)
        {
         
          if(ImagePositions[i].piece===finalPiece)
          {
            setImagePositions(ImagePositions.splice(i,1))
           
           
          }
        }
      
      


      }

    }
    else
    {
      if(iswhitepiece(finalPiece))
      {
       
        for(let i=0;i<ImagePositions.length;i++)
        {
          if(ImagePositions[i].piece===finalPiece)
          {
            setImagePositions(ImagePositions.splice(i,1))
          
          }
        }
    }





    }




 }



  function checklegallity()
  {


    if(whitemove&& (selectedPiece==='wp_1'||selectedPiece==='wp_2'||selectedPiece==='wp_3'||selectedPiece==='wp_4'||selectedPiece==='wp_5'||selectedPiece==='wp_6'||selectedPiece==='wp_7'||selectedPiece==='wp_8'))
    {
      if(FinalPosition.y===InitialPosition.y-70)
      {
        if(FinalPosition.x===InitialPosition.x)
        return true ;
        if(FinalPosition.x===InitialPosition.x+70 || FinalPosition.x===InitialPosition.x-70)
        {
          for(let i=0;i<ImagePositions.length;i++)
          {
            if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y)
            {
              if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].piece))
              {
                return true ;
              }
              
            }
          }
          return false ;
        }
      }
        if(InitialPosition.y===420)
        {
          if(FinalPosition.y===InitialPosition.y-140 && FinalPosition.x===InitialPosition.x){
          
            return true ;
          }
          return false ;
        }
        

    }
    if(!whitemove &&(selectedPiece==='bp_1'||selectedPiece==='bp_2'||selectedPiece==='bp_3'||selectedPiece==='bp_4'||selectedPiece==='bp_5'||selectedPiece==='bp_6'||selectedPiece==='bp_7'||selectedPiece==='bp_8'))
    {
      if(FinalPosition.y===InitialPosition.y+70){
        if(FinalPosition.x===InitialPosition.x)
        return true ;
        if(FinalPosition.x===InitialPosition.x+70 || FinalPosition.x===InitialPosition.x-70)
        {
          for(let i=0;i<ImagePositions.length;i++)
          {
            if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y)
            {
              if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].piece))
              {
                return true ;
              }
              
            }
          }
          return false ;
        }
       
      
      }
        if(InitialPosition.y===70)
        {
          if(FinalPosition.y===InitialPosition.y+140 && FinalPosition.x===InitialPosition.x){
            
            return true ;
          }
        }
        return false ;

    }
    if(whitemove && (selectedPiece==='wr_1'||selectedPiece==='wr_2'))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      return false ;
    }
    if(!whitemove &&(selectedPiece==='br_1'||selectedPiece==='br_2'))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      return false ;
    }
    if(whitemove && (selectedPiece==='wn_1'||selectedPiece==='wn_2'))
    {
      if((FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x-70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x-70)){
        
        return true ;
      }
      return false ;
    }
    if(!whitemove && (selectedPiece==='bn_1'||selectedPiece==='bn_2'))
    {
      if((FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x-70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x-70)){
       
        return true ;
      }
      return false ;
    }
    if(whitemove && (selectedPiece==='wb_1'||selectedPiece==='wb_2'))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x))){
       
        return true ;
      }
      return false ;
    }
    if(!whitemove && (selectedPiece==='bb_1'||selectedPiece==='bb_2'))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x))){
        
        return true ;
      }
      return false ;
    }
    if(whitemove && selectedPiece==='wq_1')
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        return true ;
      
      }
      return false ;
    }
    if(!whitemove && selectedPiece==='bq_1')
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        return true ;
      
      }
      return false ;
    }
    if(whitemove && selectedPiece==='wk_1')
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)+Math.abs(FinalPosition.x-InitialPosition.x)===70)){
       
        return true ;
      }
      return false ;
    } 
    if(!whitemove && selectedPiece==='bk_1')
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)+Math.abs(FinalPosition.x-InitialPosition.x)===70)){
        
        return true ;
      }
      return false ;
    } 

    return false ;
    
  }

  function drawBoard() {

    if (!imagesLoaded) {
      return;
    }
setwhitemove(true );
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let image_pos = [];
    // Drawing the chessboard
    draw_squares() ;


    // Drawing the pawns

    ctx.drawImage(whitePawn_1Ref.current, 0 * 70, 6* 70, 70, 70);
    image_pos.push({x: 0*70 , y: 6*70 , piece:'wp_1'});
    ctx.drawImage(whitePawn_2Ref.current, 1 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 6*70 ,piece:'wp_2'});
    ctx.drawImage(whitePawn_3Ref.current, 2 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 6*70 ,piece:'wp_3'});
    ctx.drawImage(whitePawn_4Ref.current, 3 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 6*70 ,piece:'wp_4'});
    ctx.drawImage(whitePawn_5Ref.current, 4 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 6*70 ,piece:'wp_5'});
    ctx.drawImage(whitePawn_6Ref.current, 5 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 6*70 ,piece:'wp_6'});
    ctx.drawImage(whitePawn_7Ref.current, 6 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 6*70 ,piece:'wp_7'});
    ctx.drawImage(whitePawn_8Ref.current, 7 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 6*70 ,piece:'wp_8'});


    ctx.drawImage(blackPawn_1Ref.current, 0 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 0*70 , y: 1*70 ,piece:'bp_1'});
    ctx.drawImage(blackPawn_2Ref.current, 1 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 1*70 ,piece:'bp_2'});
    ctx.drawImage(blackPawn_3Ref.current, 2 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 1*70 ,piece:'bp_3'});
    ctx.drawImage(blackPawn_4Ref.current, 3 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 1*70 ,piece:'bp_4'});
    ctx.drawImage(blackPawn_5Ref.current, 4 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 1*70 ,piece:'bp_5'});
    ctx.drawImage(blackPawn_6Ref.current, 5 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 1*70 ,piece:'bp_6'});
    ctx.drawImage(blackPawn_7Ref.current, 6 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 1*70 ,piece:'bp_7'});
    ctx.drawImage(blackPawn_8Ref.current, 7 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 1*70 ,piece:'bp_8'});


    // Drawing the knights
    ctx.drawImage(whiteKnight_1Ref.current, 1 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 7*70 ,piece:'wn_1'});
    ctx.drawImage(whiteKnight_2Ref.current, 6 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 7*70 ,piece:'wn_2'});
    ctx.drawImage(blackKnight_1Ref.current, 1 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 0*70 ,piece:'bn_1'});
    ctx.drawImage(blackKnight_2Ref.current, 6 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 0*70 ,piece:'bn_2'});







    // Drawing the bishops
    ctx.drawImage(whiteBishop_1Ref.current, 2 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 7*70 ,piece:'wb_1'});
    ctx.drawImage(whiteBishop_2Ref.current, 5 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 7*70 ,piece:'wb_2'});
    ctx.drawImage(blackBishop_1Ref.current, 2 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 0*70 ,piece:'bb_1'});
    ctx.drawImage(blackBishop_2Ref.current, 5 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 0*70 ,piece:'bb_2'});



    // Drawing the rooks
    ctx.drawImage(whiteRook_1Ref.current, 0 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 0*70 , y: 7*70 ,piece:'wr_1'});
    ctx.drawImage(whiteRook_2Ref.current, 7 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 7*70 ,piece:'wr_2'});
    ctx.drawImage(blackRook_1Ref.current, 0 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 0*70 , y: 0*70 ,piece:'br_1'});
    ctx.drawImage(blackRook_2Ref.current, 7 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 0*70 ,piece:'br_2'});



    // Drawing the queens
    ctx.drawImage(whiteQueenRef.current, 3 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 7*70 ,piece:'wq_1'});
    ctx.drawImage(blackQueenRef.current, 3 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 0*70 ,piece:'bq_1'});

    // Drawing the kings
    ctx.drawImage(whiteKingRef.current, 4 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 7*70 ,piece:'wk_1'});
    ctx.drawImage(blackKingRef.current, 4 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 0*70 ,piece:'bk_1'});

    // codemoves(true,image_pos);
    setImagePositions(image_pos);

    socket.emit('send-moves',game_id,image_pos) ; 

 

  };


  const handleMouseDown = (e) => 

{
     const canvas  = canvasRef.current ;
     const rect = canvas.getBoundingClientRect();
     let x = e.clientX - rect.left; 
     let y = e.clientY - rect.top;
      x = Math.floor(x/70)*70 ;
      y=Math.floor(y/70)*70 ;
      const clickedPiece  = checkPieceAtPosition(x,y); 
     setSelectedPiece(clickedPiece); 
     setInitialPosition({x:x , y:y});

} ; 


const handleMouseMove = (e) => {
  const canvas = canvasRef.current;
  const rect = canvas.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  setMousePosition({ x: offsetX, y: offsetY });

  if (selectedPiece) {
  


    const ctx = canvas.getContext("2d");
  
    //change x and y of the selected piece to the mouse position in ImagePositions




    let image_pos = ImagePositions ;

    image_pos.find((x)=> x.piece===selectedPiece).x = offsetX-25 ;

    image_pos.find((x)=> x.piece===selectedPiece).y = offsetY -25;

    setImagePositions(image_pos);
    draw_pieces();
  }
};
const handleMouseUp = (e) => {
  const canvas = canvasRef.current;
  const rect = canvas.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  setMousePosition({ x: offsetX, y: offsetY });
    
  let image_pos = ImagePositions ;


    // image_pos.find((x)=> x.Image===selectedPiece).x = Math.floor(offsetX/70)*70 ;
    image_pos.find((x)=> x.piece===selectedPiece).x = Math.floor(offsetX/70)*70;

    image_pos.find((x)=> x.piece===selectedPiece).y = Math.floor(offsetY/70)*70 ;
    FinalPosition.x = Math.floor(offsetX/70)*70;
    FinalPosition.y = Math.floor(offsetY/70)*70;

    setFinalPosition({ x: Math.floor(offsetX/70)*70, y: Math.floor(offsetY/70)*70 });
    if(checklegallity() && !checkinbetween())
    {
      setImagePositions(image_pos);
      setwhitemove(!whitemove );
    }
    
    else {
      image_pos.find((x)=> x.piece===selectedPiece).x = InitialPosition.x ;
      image_pos.find((x)=> x.piece===selectedPiece).y = InitialPosition.y ;
      setImagePositions(image_pos);
    }

    draw_pieces();

  setSelectedPiece(null);
  setInitialPosition([]);
  setFinalPosition([]);

};

const checkPieceAtPosition = (x, y) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  // Loop through the image positions array and check for a match
  for (const imagePosition of ImagePositions) {
    const { x: imageX, y: imageY, piece } = imagePosition;
    const isPixelMatch =
      imageX === x && imageY === y;
    if (isPixelMatch) {
      // Match found, do something with the image
      return piece;
    }
  }
  return null ; 
};


  return (
    <div>
     
      <h1 className="Title">Shatranj</h1>
      
      <div className="match_screen"> 
      <div className="component1"><Side_canvas/></div>
      <div className="component2">
      <canvas ref={canvasRef} className="chessboard" width={560} height={560} 
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUp} ></canvas>
      </div>
      </div>
      <div className="PlayButton">
      <button onClick={drawBoard} disabled={!imagesLoaded}>
        Play
      </button>
      </div>
      
    
    </div>
  );
};

export default Chessboard_2;
