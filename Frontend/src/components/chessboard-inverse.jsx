import React, { useRef, useEffect, useState } from "react";
import whitePawn_1 from '../assets/Pieces/wp_1.svg';
import whitePawn_2 from '../assets/Pieces/wp_2.svg';
import whitePawn_3 from '../assets/Pieces/wp_3.svg';
import whitePawn_4 from '../assets/Pieces/wp_4.svg';
import whitePawn_5 from '../assets/Pieces/wp_5.svg';
import whitePawn_6 from '../assets/Pieces/wp_6.svg';
import whitePawn_7 from '../assets/Pieces/wp_7.svg';
import whitePawn_8 from '../assets/Pieces/wp_8.svg';

import blackPawn_1 from '../assets/Pieces/bp_1.svg';
import blackPawn_2 from '../assets/Pieces/bp_2.svg';
import blackPawn_3 from '../assets/Pieces/bp_3.svg';
import blackPawn_4 from '../assets/Pieces/bp_4.svg';
import blackPawn_5 from '../assets/Pieces/bp_5.svg';
import blackPawn_6 from '../assets/Pieces/bp_6.svg';
import blackPawn_7 from '../assets/Pieces/bp_7.svg';
import blackPawn_8 from '../assets/Pieces/bp_8.svg';

import whiteKnight_1 from '../assets/Pieces/wn_1.svg';
import whiteKnight_2 from '../assets/Pieces/wn_2.svg';
import blackKnight_1 from '../assets/Pieces/bn_1.svg';
import blackKnight_2 from '../assets/Pieces/bn_2.svg';

import whiteBishop_1 from '../assets/Pieces/wb_1.svg';
import whiteBishop_2 from '../assets/Pieces/wb_2.svg';
import blackBishop_1 from '../assets/Pieces/bb_1.svg';
import blackBishop_2 from '../assets/Pieces/bb_2.svg';

import whiteRook_1 from '../assets/Pieces/wr_1.svg';
import whiteRook_2 from '../assets/Pieces/wr_2.svg';
import blackRook_1 from '../assets/Pieces/br_1.svg';
import blackRook_2 from '../assets/Pieces/br_2.svg';

import whiteQueen from '../assets/Pieces/wq_1.svg';
import blackQueen from '../assets/Pieces/bq_1.svg';
import whiteKing from '../assets/Pieces/wk_1.svg';
import blackKing from '../assets/Pieces/bk_1.svg';

import Side_canvas from "./sidecanvas";
import './chessboard.css' ; 
const ChessboardInverse = () => {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const blackPawn_1Ref = useRef(null);
  const blackPawn_2Ref = useRef(null);
  const blackPawn_3Ref = useRef(null);
  const blackPawn_4Ref = useRef(null);
  const blackPawn_5Ref = useRef(null);
  const blackPawn_6Ref = useRef(null);
  const blackPawn_7Ref = useRef(null);
  const blackPawn_8Ref = useRef(null);
  const whitePawn_1Ref = useRef(null);
  const whitePawn_2Ref = useRef(null);
  const whitePawn_3Ref = useRef(null);
  const whitePawn_4Ref = useRef(null);
  const whitePawn_5Ref = useRef(null);
  const whitePawn_6Ref = useRef(null);
  const whitePawn_7Ref = useRef(null);
  const whitePawn_8Ref = useRef(null);
  const blackKnight_1Ref = useRef(null);
  const blackKnight_2Ref = useRef(null);
  const whiteKnight_1Ref = useRef(null);
  const whiteKnight_2Ref = useRef(null);
  const blackBishop_1Ref = useRef(null);
  const blackBishop_2Ref = useRef(null);
  const whiteBishop_1Ref = useRef(null);
  const whiteBishop_2Ref = useRef(null);
  const blackRook_1Ref = useRef(null);
  const blackRook_2Ref = useRef(null);
  const whiteRook_1Ref = useRef(null);
  const whiteRook_2Ref = useRef(null);
  const blackQueenRef = useRef(null);
  const whiteQueenRef = useRef(null);
  const blackKingRef = useRef(null);
  const whiteKingRef = useRef(null);


    const [selectedPiece, setSelectedPiece] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [InitialPosition,setInitialPosition] = useState([]) ;
    const [FinalPosition,setFinalPosition] = useState([]) ;
   
    const [ImagePositions,setImagePositions] = useState([]) ; 
    const [blackmove,setblackmove]=useState(true);
  useEffect(() => {
    const blackPawn_1Image = new Image();
    blackPawn_1Image.src = blackPawn_1;
    blackPawn_1Image.onload = () => {
      blackPawn_1Ref.current = blackPawn_1Image;
      checkAllImagesLoaded();
    };
    const blackPawn_2Image = new Image();
    blackPawn_2Image.src = blackPawn_2;
    blackPawn_2Image.onload = () => {
      blackPawn_2Ref.current = blackPawn_2Image;
      checkAllImagesLoaded();
    };
    const blackPawn_3Image = new Image();
    blackPawn_3Image.src = blackPawn_3;
    blackPawn_3Image.onload = () => {
      blackPawn_3Ref.current = blackPawn_3Image;
      checkAllImagesLoaded();
    };
    const blackPawn_4Image = new Image();
    blackPawn_4Image.src = blackPawn_4;
    blackPawn_4Image.onload = () => {
      blackPawn_4Ref.current = blackPawn_4Image;
      checkAllImagesLoaded();
    };
    const blackPawn_5Image = new Image();
    blackPawn_5Image.src = blackPawn_5;
    blackPawn_5Image.onload = () => {
      blackPawn_5Ref.current = blackPawn_5Image;
      checkAllImagesLoaded();
    };
    const blackPawn_6Image = new Image();
    blackPawn_6Image.src = blackPawn_6;
    blackPawn_6Image.onload = () => {
      blackPawn_6Ref.current = blackPawn_6Image;
      checkAllImagesLoaded();
    };
    const blackPawn_7Image = new Image();
    blackPawn_7Image.src = blackPawn_7;
    blackPawn_7Image.onload = () => {
      blackPawn_7Ref.current = blackPawn_7Image;
      checkAllImagesLoaded();
    };
    const blackPawn_8Image = new Image();
    blackPawn_8Image.src = blackPawn_8;
    blackPawn_8Image.onload = () => {
      blackPawn_8Ref.current = blackPawn_8Image;
      checkAllImagesLoaded();
    };
    const whitePawn_1Image = new Image();
    whitePawn_1Image.src = whitePawn_1;
    whitePawn_1Image.onload = () => {
      whitePawn_1Ref.current = whitePawn_1Image;
      checkAllImagesLoaded();
    };
    const whitePawn_2Image = new Image();
    whitePawn_2Image.src = whitePawn_2;
    whitePawn_2Image.onload = () => {
      whitePawn_2Ref.current = whitePawn_2Image;
      checkAllImagesLoaded();
    };
    const whitePawn_3Image = new Image();
    whitePawn_3Image.src = whitePawn_3;
    whitePawn_3Image.onload = () => {
      whitePawn_3Ref.current = whitePawn_3Image;
      checkAllImagesLoaded();
    };
    const whitePawn_4Image = new Image();
    whitePawn_4Image.src = whitePawn_4;
    whitePawn_4Image.onload = () => {
      whitePawn_4Ref.current = whitePawn_4Image;
      checkAllImagesLoaded();
    };
    const whitePawn_5Image = new Image();
    whitePawn_5Image.src = whitePawn_5;
    whitePawn_5Image.onload = () => {
      whitePawn_5Ref.current = whitePawn_5Image;
      checkAllImagesLoaded();
    };
    const whitePawn_6Image = new Image();
    whitePawn_6Image.src = whitePawn_6;
    whitePawn_6Image.onload = () => {
      whitePawn_6Ref.current = whitePawn_6Image;
      checkAllImagesLoaded();
    };
    const whitePawn_7Image = new Image();
    whitePawn_7Image.src = whitePawn_7;
    whitePawn_7Image.onload = () => {
      whitePawn_7Ref.current = whitePawn_7Image;
      checkAllImagesLoaded();
    };
    const whitePawn_8Image = new Image();
    whitePawn_8Image.src = whitePawn_8;
    whitePawn_8Image.onload = () => {
      whitePawn_8Ref.current = whitePawn_8Image;
      checkAllImagesLoaded();
    };
    const blackRook_1Image = new Image();
    blackRook_1Image.src = blackRook_1;
    blackRook_1Image.onload = () => {
      blackRook_1Ref.current = blackRook_1Image;
      checkAllImagesLoaded();
    };
    const blackRook_2Image = new Image();
    blackRook_2Image.src = blackRook_2;
    blackRook_2Image.onload = () => {
      blackRook_2Ref.current = blackRook_2Image;
      checkAllImagesLoaded();
    };
    const whiteRook_1Image = new Image();
    whiteRook_1Image.src = whiteRook_1;
    whiteRook_1Image.onload = () => {
      whiteRook_1Ref.current = whiteRook_1Image;
      checkAllImagesLoaded();
    };
    const whiteRook_2Image = new Image();
    whiteRook_2Image.src = whiteRook_2;
    whiteRook_2Image.onload = () => {
      whiteRook_2Ref.current = whiteRook_2Image;
      checkAllImagesLoaded();
    };
    const blackKnight_1Image = new Image();
    blackKnight_1Image.src = blackKnight_1;
    blackKnight_1Image.onload = () => {
      blackKnight_1Ref.current = blackKnight_1Image;
      checkAllImagesLoaded();
    };
    const blackKnight_2Image = new Image();
    blackKnight_2Image.src = blackKnight_2;
    blackKnight_2Image.onload = () => {
      blackKnight_2Ref.current = blackKnight_2Image;
      checkAllImagesLoaded();
    };
    const whiteKnight_1Image = new Image();
    whiteKnight_1Image.src = whiteKnight_1;
    whiteKnight_1Image.onload = () => {
      whiteKnight_1Ref.current = whiteKnight_1Image;
      checkAllImagesLoaded();
    };
    const whiteKnight_2Image = new Image();
    whiteKnight_2Image.src = whiteKnight_2;
    whiteKnight_2Image.onload = () => {
      whiteKnight_2Ref.current = whiteKnight_2Image;
      checkAllImagesLoaded();
    };
    const blackBishop_1Image = new Image();
    blackBishop_1Image.src = blackBishop_1;
    blackBishop_1Image.onload = () => {
      blackBishop_1Ref.current = blackBishop_1Image;
      checkAllImagesLoaded();
    };
    const blackBishop_2Image = new Image();
    blackBishop_2Image.src = blackBishop_2;
    blackBishop_2Image.onload = () => {
      blackBishop_2Ref.current = blackBishop_2Image;
      checkAllImagesLoaded();
    };
    const whiteBishop_1Image = new Image();
    whiteBishop_1Image.src = whiteBishop_1;
    whiteBishop_1Image.onload = () => {
      whiteBishop_1Ref.current = whiteBishop_1Image;
      checkAllImagesLoaded();
    };
    const whiteBishop_2Image = new Image();
    whiteBishop_2Image.src = whiteBishop_2;
    whiteBishop_2Image.onload = () => {
      whiteBishop_2Ref.current = whiteBishop_2Image;
      checkAllImagesLoaded();
    };
   


    const blackQueenImage = new Image();
    blackQueenImage.src = blackQueen;
    blackQueenImage.onload = () => {
        blackQueenRef.current = blackQueenImage;
        checkAllImagesLoaded();
        }
    const whiteQueenImage = new Image();
    whiteQueenImage.src = whiteQueen;
    whiteQueenImage.onload = () => {
        whiteQueenRef.current = whiteQueenImage;
        checkAllImagesLoaded();
        }
    const blackKingImage = new Image();
    blackKingImage.src = blackKing;
    blackKingImage.onload = () => {
        blackKingRef.current = blackKingImage;
        checkAllImagesLoaded();
        }
    const whiteKingImage = new Image();
    whiteKingImage.src = whiteKing;
    whiteKingImage.onload = () => {
        whiteKingRef.current = whiteKingImage;
        checkAllImagesLoaded();
        }


  }, []);

  
  const checkAllImagesLoaded = () => {
    if ( blackBishop_1Ref.current && blackBishop_2Ref.current && whiteBishop_1Ref.current && whiteBishop_2Ref.current && blackKnight_1Ref.current && blackKnight_2Ref.current && whiteKnight_1Ref.current && whiteKnight_2Ref.current && blackRook_1Ref.current && blackRook_2Ref.current && whiteRook_1Ref.current && whiteRook_2Ref.current && blackQueenRef.current && whiteQueenRef.current && blackKingRef.current && whiteKingRef.current && blackPawn_1Ref.current && blackPawn_2Ref.current && blackPawn_3Ref.current && blackPawn_4Ref.current && blackPawn_5Ref.current && blackPawn_6Ref.current && blackPawn_7Ref.current && blackPawn_8Ref.current && whitePawn_1Ref.current && whitePawn_2Ref.current && whitePawn_3Ref.current && whitePawn_4Ref.current && whitePawn_5Ref.current && whitePawn_6Ref.current && whitePawn_7Ref.current && whitePawn_8Ref.current)
 {
      setImagesLoaded(true);
    }
  };

let blackpieces = [blackRook_1Ref.current,blackKnight_1Ref.current,blackBishop_1Ref.current,blackQueenRef.current,blackKingRef.current,blackBishop_2Ref.current,blackKnight_2Ref.current,blackRook_2Ref.current,blackPawn_1Ref.current,blackPawn_2Ref.current,blackPawn_3Ref.current,blackPawn_4Ref.current,blackPawn_5Ref.current,blackPawn_6Ref.current,blackPawn_7Ref.current,blackPawn_8Ref.current] ;
let whitepieces = [whiteRook_1Ref.current,whiteKnight_1Ref.current,whiteBishop_1Ref.current,whiteQueenRef.current,whiteKingRef.current,whiteBishop_2Ref.current,whiteKnight_2Ref.current,whiteRook_2Ref.current,whitePawn_1Ref.current,whitePawn_2Ref.current,whitePawn_3Ref.current,whitePawn_4Ref.current,whitePawn_5Ref.current,whitePawn_6Ref.current,whitePawn_7Ref.current,whitePawn_8Ref.current] ;


  function isblackpiece(piece)
  {
      for(let i = 0 ; i < blackpieces.length ; i++)
      {
          if(piece === blackpieces[i])
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
          ctx.drawImage(ImagePositions[i].Image,ImagePositions[i].x,ImagePositions[i].y,70,70) ; 
      }
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
    if(selectedPiece===blackPawn_1Ref.current||selectedPiece===blackPawn_2Ref.current||selectedPiece===blackPawn_3Ref.current||selectedPiece===blackPawn_4Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_6Ref.current||selectedPiece===blackPawn_7Ref.current||selectedPiece===blackPawn_8Ref.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y>FinalPosition.y&&ImagePositions[i].y<InitialPosition.y)
        {
          return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&isblackpiece(ImagePositions[i].Image)===false&&FinalPosition.y===InitialPosition.y-70)
        {
            captured(ImagePositions[i].Image)
            return false ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&isblackpiece(ImagePositions[i].Image)===true&&FinalPosition.y===InitialPosition.y-70 && ImagePositions[i].Image!==selectedPiece)
        {
            return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&ImagePositions[i].x===InitialPosition.x&&ImagePositions[i].image!==InitialPosition.y-140&&ImagePositions[i].Image!==selectedPiece )
        {
          return true ;
        }
    
      }
      return false ;
    }
    if(selectedPiece===whitePawn_1Ref.current||selectedPiece===whitePawn_2Ref.current||selectedPiece===whitePawn_3Ref.current||selectedPiece===whitePawn_4Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_6Ref.current||selectedPiece===whitePawn_7Ref.current||selectedPiece===whitePawn_8Ref.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y<FinalPosition.y&&ImagePositions[i].y>InitialPosition.y)
        {
          return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&isblackpiece(ImagePositions[i].Image)===true&&FinalPosition.y===InitialPosition.y+70)
        {
            captured(ImagePositions[i].Image)
            return false ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===70&&isblackpiece(ImagePositions[i].Image)===false&&FinalPosition.y===InitialPosition.y+70&&ImagePositions[i].Image!==selectedPiece)
        {
            return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&ImagePositions[i].x===InitialPosition.x&&ImagePositions[i].image!==InitialPosition.y+140&&ImagePositions[i].Image!==selectedPiece )
        {
          return true ;
        }
      }
      return false ;
    }
    if(selectedPiece===blackRook_1Ref.current||selectedPiece===blackRook_2Ref.current||selectedPiece===whiteRook_1Ref.current||selectedPiece===whiteRook_2Ref.current)
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

        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece && isblackpiece(selectedPiece)===isblackpiece(ImagePositions[i].Image))
        {
          return true ;
        }
      }
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece)
          captured(ImagePositions[i].Image);
      }
      

      return false ;
    }
    if(selectedPiece===blackBishop_1Ref.current||selectedPiece===blackBishop_2Ref.current||selectedPiece===whiteBishop_1Ref.current||selectedPiece===whiteBishop_2Ref.current)
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
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece && isblackpiece(selectedPiece)===isblackpiece(ImagePositions[i].Image))
        {
          return true ;
        }

  
       
      }
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece)
          captured(ImagePositions[i].Image);
      }
      return false ;
    }
    if(selectedPiece===blackQueenRef.current||selectedPiece===whiteQueenRef.current)
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
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece && isblackpiece(selectedPiece)===isblackpiece(ImagePositions[i].Image))
        {
          return true ;
        }



      }
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece)
          captured(ImagePositions[i].Image);
      }
      return false ;
    }
    if(selectedPiece===blackKingRef.current||selectedPiece===whiteKingRef.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y && ImagePositions[i].Image!==selectedPiece)
        {
          if(isblackpiece(selectedPiece)!==isblackpiece(ImagePositions[i].Image))
          {
            captured(ImagePositions[i].Image);
            return false ;

          }
        
          return true ;
          
        }
      }
      return false ;
    }
    if(selectedPiece===blackKnight_1Ref.current||selectedPiece===blackKnight_2Ref.current||selectedPiece===whiteKnight_1Ref.current||selectedPiece===whiteKnight_2Ref.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y && ImagePositions[i].Image!==selectedPiece)
        {
          if(isblackpiece(selectedPiece)!==isblackpiece(ImagePositions[i].Image))
          {
            captured(ImagePositions[i].Image);
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
    if(isblackpiece(selectedPiece))
    {
      
      if(!isblackpiece(finalPiece))
      {
        for(let i=0;i<ImagePositions.length;i++)
        {
         
          if(ImagePositions[i].Image===finalPiece)
          {
            setImagePositions(ImagePositions.splice(i,1))
           
           
          }
        }
      
      


      }

    }
    else
    {
      if(isblackpiece(finalPiece))
      {
       
        for(let i=0;i<ImagePositions.length;i++)
        {
          if(ImagePositions[i].Image===finalPiece)
          {
            setImagePositions(ImagePositions.splice(i,1))
          
          }
        }
    }





    }




 }



  function checklegallity()
  {


    if(blackmove&& (selectedPiece===blackPawn_1Ref.current||selectedPiece===blackPawn_2Ref.current||selectedPiece===blackPawn_3Ref.current||selectedPiece===blackPawn_4Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_6Ref.current||selectedPiece===blackPawn_7Ref.current||selectedPiece===blackPawn_8Ref.current))
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
              if(isblackpiece(selectedPiece)!==isblackpiece(ImagePositions[i].Image))
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
    if(!blackmove &&(selectedPiece===whitePawn_1Ref.current||selectedPiece===whitePawn_2Ref.current||selectedPiece===whitePawn_3Ref.current||selectedPiece===whitePawn_4Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_6Ref.current||selectedPiece===whitePawn_7Ref.current||selectedPiece===whitePawn_8Ref.current))
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
              if(isblackpiece(selectedPiece)!==isblackpiece(ImagePositions[i].Image))
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
    if(blackmove && (selectedPiece===blackRook_1Ref.current||selectedPiece===blackRook_2Ref.current||selectedPiece===whiteRook_1Ref.current||selectedPiece===whiteRook_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      console.log("Rook");
      return false ;
    }
    if(!blackmove &&(selectedPiece===whiteRook_1Ref.current||selectedPiece===whiteRook_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      console.log("Rook");
      return false ;
    }
    if(blackmove && (selectedPiece===blackKnight_1Ref.current||selectedPiece===blackKnight_2Ref.current))
    {
      if((FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x-70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x-70)){
        
        return true ;
      }
      return false ;
    }
    if(!blackmove && (selectedPiece===whiteKnight_1Ref.current||selectedPiece===whiteKnight_2Ref.current))
    {
      if((FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x+140)||(FinalPosition.y===InitialPosition.y+70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y-70&&FinalPosition.x===InitialPosition.x-140)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x+70)||(FinalPosition.y===InitialPosition.y+140&&FinalPosition.x===InitialPosition.x-70)||(FinalPosition.y===InitialPosition.y-140&&FinalPosition.x===InitialPosition.x-70)){
       
        return true ;
      }
      return false ;
    }
    if(blackmove && (selectedPiece===blackBishop_1Ref.current||selectedPiece===blackBishop_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x))){
       
        return true ;
      }
      return false ;
    }
    if(!blackmove && (selectedPiece===whiteBishop_1Ref.current||selectedPiece===whiteBishop_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x))){
        
        return true ;
      }
      return false ;
    }
    if(blackmove && selectedPiece===blackQueenRef.current)
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        return true ;
      
      }
      return false ;
    }
    if(!blackmove && selectedPiece===whiteQueenRef.current)
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        return true ;
      
      }
      return false ;
    }
    if(blackmove && selectedPiece===blackKingRef.current)
    {
      if(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x){
       
        return true ;
      }
      return false ;
    } 
    if(!blackmove && selectedPiece===whiteKingRef.current)
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
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
setblackmove(true );
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let image_pos = [];
    // Drawing the chessboard
    draw_squares() ;


    // Drawing the pawns

    ctx.drawImage(blackPawn_1Ref.current, 0 * 70, 6* 70, 70, 70);
    image_pos.push({x: 0*70 , y: 6*70 , Image:blackPawn_1Ref.current});
    ctx.drawImage(blackPawn_2Ref.current, 1 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 6*70 , Image:blackPawn_2Ref.current});
    ctx.drawImage(blackPawn_3Ref.current, 2 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 6*70 , Image:blackPawn_3Ref.current});
    ctx.drawImage(blackPawn_4Ref.current, 3 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 6*70 , Image:blackPawn_4Ref.current});
    ctx.drawImage(blackPawn_5Ref.current, 4 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 6*70 , Image:blackPawn_5Ref.current});
    ctx.drawImage(blackPawn_6Ref.current, 5 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 6*70 , Image:blackPawn_6Ref.current});
    ctx.drawImage(blackPawn_7Ref.current, 6 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 6*70 , Image:blackPawn_7Ref.current});
    ctx.drawImage(blackPawn_8Ref.current, 7 * 70, 6 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 6*70 , Image:blackPawn_8Ref.current});


    ctx.drawImage(whitePawn_1Ref.current, 0 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 0*70 , y: 1*70 , Image:whitePawn_1Ref.current});
    ctx.drawImage(whitePawn_2Ref.current, 1 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 1*70 , Image:whitePawn_2Ref.current});
    ctx.drawImage(whitePawn_3Ref.current, 2 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 1*70 , Image:whitePawn_3Ref.current});
    ctx.drawImage(whitePawn_4Ref.current, 3 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 1*70 , Image:whitePawn_4Ref.current});
    ctx.drawImage(whitePawn_5Ref.current, 4 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 1*70 , Image:whitePawn_5Ref.current});
    ctx.drawImage(whitePawn_6Ref.current, 5 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 1*70 , Image:whitePawn_6Ref.current});
    ctx.drawImage(whitePawn_7Ref.current, 6 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 1*70 , Image:whitePawn_7Ref.current});
    ctx.drawImage(whitePawn_8Ref.current, 7 * 70, 1 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 1*70 , Image:whitePawn_8Ref.current});


    // Drawing the knights
    ctx.drawImage(blackKnight_1Ref.current, 1 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 7*70 , Image:blackKnight_1Ref.current});
    ctx.drawImage(blackKnight_2Ref.current, 6 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 7*70 , Image:blackKnight_2Ref.current});
    ctx.drawImage(whiteKnight_1Ref.current, 1 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 1*70 , y: 0*70 , Image:whiteKnight_1Ref.current});
    ctx.drawImage(whiteKnight_2Ref.current, 6 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 6*70 , y: 0*70 , Image:whiteKnight_2Ref.current});







    // Drawing the bishops
    ctx.drawImage(blackBishop_1Ref.current, 2 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 7*70 , Image:blackBishop_1Ref.current});
    ctx.drawImage(blackBishop_2Ref.current, 5 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 7*70 , Image:blackBishop_2Ref.current});
    ctx.drawImage(whiteBishop_1Ref.current, 2 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 2*70 , y: 0*70 , Image:whiteBishop_1Ref.current});
    ctx.drawImage(whiteBishop_2Ref.current, 5 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 5*70 , y: 0*70 , Image:whiteBishop_2Ref.current});



    // Drawing the rooks
    ctx.drawImage(blackRook_1Ref.current, 0 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 0*70 , y: 7*70 , Image:blackRook_1Ref.current});
    ctx.drawImage(blackRook_2Ref.current, 7 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 7*70 , Image:blackRook_2Ref.current});
    ctx.drawImage(whiteRook_1Ref.current, 0 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 0*70 , y: 0*70 , Image:whiteRook_1Ref.current});
    ctx.drawImage(whiteRook_2Ref.current, 7 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 7*70 , y: 0*70 , Image:whiteRook_2Ref.current});



    // Drawing the queens
    ctx.drawImage(blackQueenRef.current, 3 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 7*70 , Image:blackQueenRef.current});
    ctx.drawImage(whiteQueenRef.current, 3 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 3*70 , y: 0*70 , Image:whiteQueenRef.current});

    // Drawing the kings
    ctx.drawImage(blackKingRef.current, 4 * 70, 7 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 7*70 , Image:blackKingRef.current});
    ctx.drawImage(whiteKingRef.current, 4 * 70, 0 * 70, 70, 70);
    image_pos.push({x: 4*70 , y: 0*70 , Image:whiteKingRef.current});


    setImagePositions(image_pos);
    console.log(image_pos); 

 

  };


  const handleMouseDown = (e) => 

{
     const canvas  = canvasRef.current ;
     const rect = canvas.getBoundingClientRect();
     let x = e.clientX - rect.left; 
     let y = e.clientY - rect.top;
      x = Math.floor(x/70)*70 ;
      y=Math.floor(y/70)*70 ;
      const clickedPiece  = checkImageAtPosition(x,y); 
     setSelectedPiece(clickedPiece); 
     setInitialPosition({x:x , y:y});

    if(clickedPiece!== null)
    console.log("Hi");

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

    image_pos.find((x)=> x.Image===selectedPiece).x = offsetX-25 ;

    image_pos.find((x)=> x.Image===selectedPiece).y = offsetY -25;

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
    image_pos.find((x)=> x.Image===selectedPiece).x = Math.floor(offsetX/70)*70;

    image_pos.find((x)=> x.Image===selectedPiece).y = Math.floor(offsetY/70)*70 ;
    FinalPosition.x = Math.floor(offsetX/70)*70;
    FinalPosition.y = Math.floor(offsetY/70)*70;

    setFinalPosition({ x: Math.floor(offsetX/70)*70, y: Math.floor(offsetY/70)*70 });
    console.log(FinalPosition)
    if(checklegallity() && !checkinbetween())
    {
      setImagePositions(image_pos);
      setblackmove(!blackmove );
    }
    
    else {
      image_pos.find((x)=> x.Image===selectedPiece).x = InitialPosition.x ;
      image_pos.find((x)=> x.Image===selectedPiece).y = InitialPosition.y ;
      setImagePositions(image_pos);
    }
    console.log(InitialPosition)
    
    console.log(checklegallity());


    draw_pieces();

  setSelectedPiece(null);
  setInitialPosition([]);
  setFinalPosition([]);

};

const checkImageAtPosition = (x, y) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  console.log( x);
  console.log( y);
  // Loop through the image positions array and check for a match
  console.log(ImagePositions);
  for (const imagePosition of ImagePositions) {
    const { x: imageX, y: imageY, Image } = imagePosition;
    const isPixelMatch =
      imageX === x && imageY === y;
    if (isPixelMatch) {
      // Match found, do something with the image
      console.log("Image matched:", Image);
      console.log(typeof Image);
 
      return Image;
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

export default ChessboardInverse;
