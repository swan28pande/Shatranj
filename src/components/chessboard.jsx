import React, { useRef, useEffect, useState } from "react";
import WhitePawn_1 from '../assets/wpawn_1.svg';
import WhitePawn_2 from '../assets/wpawn_2.svg';
import WhitePawn_3 from '../assets/wpawn_3.svg';
import WhitePawn_4 from '../assets/wpawn_4.svg';
import WhitePawn_5 from '../assets/wpawn_5.svg';
import WhitePawn_6 from '../assets/wpawn_6.svg';
import WhitePawn_7 from '../assets/wpawn_7.svg';
import WhitePawn_8 from '../assets/wpawn_8.svg';


import BlackPawn_1 from '../assets/bpawn_1.svg';
import BlackPawn_2 from '../assets/bpawn_2.svg';
import BlackPawn_3 from '../assets/bpawn_3.svg';
import BlackPawn_4 from '../assets/bpawn_4.svg';
import BlackPawn_5 from '../assets/bpawn_5.svg';
import BlackPawn_6 from '../assets/bpawn_6.svg';
import BlackPawn_7 from '../assets/bpawn_7.svg';
import BlackPawn_8 from '../assets/bpawn_8.svg';

import WhiteKnight_1 from '../assets/wknight_1.svg';
import WhiteKnight_2 from '../assets/wknight_2.svg';
import BlackKnight_1 from '../assets/bknight_1.svg';
import BlackKnight_2 from '../assets/bknight_2.svg';

import WhiteBishop_1 from '../assets/wbishop_1.svg';
import WhiteBishop_2 from '../assets/wbishop_2.svg';
import BlackBishop_1 from '../assets/bbishop_1.svg';
import BlackBishop_2 from '../assets/bbishop_2.svg';

import WhiteRook_1 from '../assets/wrook_1.svg';
import WhiteRook_2 from '../assets/wrook_2.svg';
import BlackRook_1 from '../assets/brook_1.svg';
import BlackRook_2 from '../assets/brook_2.svg';

import WhiteQueen from '../assets/wqueen.svg';
import BlackQueen from '../assets/bqueen.svg';
import WhiteKing from '../assets/wking.svg';
import BlackKing from '../assets/bking.svg';


const Chessboard = () => {
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


    const [selectedPiece, setSelectedPiece] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [InitialPosition,setInitialPosition] = useState([]) ;
    const [FinalPosition,setFinalPosition] = useState([]) ;
   
    const [ImagePositions,setImagePositions] = useState([]) ; 
    const [whitemove,setwhitemove]=useState(true);
  useEffect(() => {
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
        }
    const blackQueenImage = new Image();
    blackQueenImage.src = BlackQueen;
    blackQueenImage.onload = () => {
        blackQueenRef.current = blackQueenImage;
        checkAllImagesLoaded();
        }
    const whiteKingImage = new Image();
    whiteKingImage.src = WhiteKing;
    whiteKingImage.onload = () => {
        whiteKingRef.current = whiteKingImage;
        checkAllImagesLoaded();
        }
    const blackKingImage = new Image();
    blackKingImage.src = BlackKing;
    blackKingImage.onload = () => {
        blackKingRef.current = blackKingImage;
        checkAllImagesLoaded();
        }


  }, []);

  
  const checkAllImagesLoaded = () => {
    if ( whiteBishop_1Ref.current && whiteBishop_2Ref.current && blackBishop_1Ref.current && blackBishop_2Ref.current && whiteKnight_1Ref.current && whiteKnight_2Ref.current && blackKnight_1Ref.current && blackKnight_2Ref.current && whiteRook_1Ref.current && whiteRook_2Ref.current && blackRook_1Ref.current && blackRook_2Ref.current && whiteQueenRef.current && blackQueenRef.current && whiteKingRef.current && blackKingRef.current && whitePawn_1Ref.current && whitePawn_2Ref.current && whitePawn_3Ref.current && whitePawn_4Ref.current && whitePawn_5Ref.current && whitePawn_6Ref.current && whitePawn_7Ref.current && whitePawn_8Ref.current && blackPawn_1Ref.current && blackPawn_2Ref.current && blackPawn_3Ref.current && blackPawn_4Ref.current && blackPawn_5Ref.current && blackPawn_6Ref.current && blackPawn_7Ref.current && blackPawn_8Ref.current)
 {
      setImagesLoaded(true);
    }
  };

let whitepieces = [whiteRook_1Ref.current,whiteKnight_1Ref.current,whiteBishop_1Ref.current,whiteQueenRef.current,whiteKingRef.current,whiteBishop_2Ref.current,whiteKnight_2Ref.current,whiteRook_2Ref.current,whitePawn_1Ref.current,whitePawn_2Ref.current,whitePawn_3Ref.current,whitePawn_4Ref.current,whitePawn_5Ref.current,whitePawn_6Ref.current,whitePawn_7Ref.current,whitePawn_8Ref.current] ;
let blackpieces = [blackRook_1Ref.current,blackKnight_1Ref.current,blackBishop_1Ref.current,blackQueenRef.current,blackKingRef.current,blackBishop_2Ref.current,blackKnight_2Ref.current,blackRook_2Ref.current,blackPawn_1Ref.current,blackPawn_2Ref.current,blackPawn_3Ref.current,blackPawn_4Ref.current,blackPawn_5Ref.current,blackPawn_6Ref.current,blackPawn_7Ref.current,blackPawn_8Ref.current] ;


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
          ctx.drawImage(ImagePositions[i].Image,ImagePositions[i].x,ImagePositions[i].y,80,80) ; 
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
          ctx.fillStyle = "white";
        } else {
          ctx.fillStyle = "purple";
        }
        ctx.fillRect(i * 80, j * 80, 80, 80);
      }
    }
  }
  function checkinbetween()
  {
    if(selectedPiece===whitePawn_1Ref.current||selectedPiece===whitePawn_2Ref.current||selectedPiece===whitePawn_3Ref.current||selectedPiece===whitePawn_4Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_6Ref.current||selectedPiece===whitePawn_7Ref.current||selectedPiece===whitePawn_8Ref.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y>FinalPosition.y&&ImagePositions[i].y<InitialPosition.y)
        {
          return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===80&&iswhitepiece(ImagePositions[i].Image)===false&&FinalPosition.y===InitialPosition.y-80)
        {
            captured(ImagePositions[i].Image)
            return false ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===80&&iswhitepiece(ImagePositions[i].Image)===true&&FinalPosition.y===InitialPosition.y-80 && ImagePositions[i].Image!==selectedPiece)
        {
            return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&ImagePositions[i].x===InitialPosition.x&&ImagePositions[i].image!==InitialPosition.y-160&&ImagePositions[i].Image!==selectedPiece )
        {
          return true ;
        }
    
      }
      return false ;
    }
    if(selectedPiece===blackPawn_1Ref.current||selectedPiece===blackPawn_2Ref.current||selectedPiece===blackPawn_3Ref.current||selectedPiece===blackPawn_4Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_6Ref.current||selectedPiece===blackPawn_7Ref.current||selectedPiece===blackPawn_8Ref.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y<FinalPosition.y&&ImagePositions[i].y>InitialPosition.y)
        {
          return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===80&&iswhitepiece(ImagePositions[i].Image)===true&&FinalPosition.y===InitialPosition.y+80)
        {
            captured(ImagePositions[i].Image)
            return false ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&Math.abs(ImagePositions[i].x-InitialPosition.x)===80&&iswhitepiece(ImagePositions[i].Image)===false&&FinalPosition.y===InitialPosition.y+80&&ImagePositions[i].Image!==selectedPiece)
        {
            return true ;
        }

        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y&&ImagePositions[i].x===InitialPosition.x&&ImagePositions[i].image!==InitialPosition.y+160&&ImagePositions[i].Image!==selectedPiece )
        {
          return true ;
        }
      }
      return false ;
    }
    if(selectedPiece===whiteRook_1Ref.current||selectedPiece===whiteRook_2Ref.current||selectedPiece===blackRook_1Ref.current||selectedPiece===blackRook_2Ref.current)
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

        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece && iswhitepiece(selectedPiece)===iswhitepiece(ImagePositions[i].Image))
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
    if(selectedPiece===whiteBishop_1Ref.current||selectedPiece===whiteBishop_2Ref.current||selectedPiece===blackBishop_1Ref.current||selectedPiece===blackBishop_2Ref.current)
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
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece && iswhitepiece(selectedPiece)===iswhitepiece(ImagePositions[i].Image))
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
    if(selectedPiece===whiteQueenRef.current||selectedPiece===blackQueenRef.current)
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
        if(ImagePositions[i].y===FinalPosition.y && ImagePositions[i].x===FinalPosition.x && ImagePositions[i].Image!==selectedPiece && iswhitepiece(selectedPiece)===iswhitepiece(ImagePositions[i].Image))
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
    if(selectedPiece===whiteKingRef.current||selectedPiece===blackKingRef.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y && ImagePositions[i].Image!==selectedPiece)
        {
          if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].Image))
          {
            captured(ImagePositions[i].Image);
            return false ;

          }
        
          return true ;
          
        }
      }
      return false ;
    }
    if(selectedPiece===whiteKnight_1Ref.current||selectedPiece===whiteKnight_2Ref.current||selectedPiece===blackKnight_1Ref.current||selectedPiece===blackKnight_2Ref.current)
    {
      for(let i = 0 ; i < ImagePositions.length ; i++)
      {
        if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y && ImagePositions[i].Image!==selectedPiece)
        {
          if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].Image))
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
    if(iswhitepiece(selectedPiece))
    {
      
      if(!iswhitepiece(finalPiece))
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
      if(iswhitepiece(finalPiece))
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


    if(whitemove&& (selectedPiece===whitePawn_1Ref.current||selectedPiece===whitePawn_2Ref.current||selectedPiece===whitePawn_3Ref.current||selectedPiece===whitePawn_4Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_5Ref.current||selectedPiece===whitePawn_6Ref.current||selectedPiece===whitePawn_7Ref.current||selectedPiece===whitePawn_8Ref.current))
    {
      if(FinalPosition.y===InitialPosition.y-80)
      {
        if(FinalPosition.x===InitialPosition.x)
        return true ;
        if(FinalPosition.x===InitialPosition.x+80 || FinalPosition.x===InitialPosition.x-80)
        {
          for(let i=0;i<ImagePositions.length;i++)
          {
            if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y)
            {
              if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].Image))
              {
                return true ;
              }
              
            }
          }
          return false ;
        }
      }
        if(InitialPosition.y===480)
        {
          if(FinalPosition.y===InitialPosition.y-160 && FinalPosition.x===InitialPosition.x){
          
            return true ;
          }
          return false ;
        }
        

    }
    if(!whitemove &&(selectedPiece===blackPawn_1Ref.current||selectedPiece===blackPawn_2Ref.current||selectedPiece===blackPawn_3Ref.current||selectedPiece===blackPawn_4Ref.current||selectedPiece===blackPawn_5Ref.current||selectedPiece===blackPawn_6Ref.current||selectedPiece===blackPawn_7Ref.current||selectedPiece===blackPawn_8Ref.current))
    {
      if(FinalPosition.y===InitialPosition.y+80){
        if(FinalPosition.x===InitialPosition.x)
        return true ;
        if(FinalPosition.x===InitialPosition.x+80 || FinalPosition.x===InitialPosition.x-80)
        {
          for(let i=0;i<ImagePositions.length;i++)
          {
            if(ImagePositions[i].x===FinalPosition.x&&ImagePositions[i].y===FinalPosition.y)
            {
              if(iswhitepiece(selectedPiece)!==iswhitepiece(ImagePositions[i].Image))
              {
                return true ;
              }
              
            }
          }
          return false ;
        }
       
      
      }
        if(InitialPosition.y===80)
        {
          if(FinalPosition.y===InitialPosition.y+160 && FinalPosition.x===InitialPosition.x){
            
            return true ;
          }
        }
        return false ;

    }
    if(whitemove && (selectedPiece===whiteRook_1Ref.current||selectedPiece===whiteRook_2Ref.current||selectedPiece===blackRook_1Ref.current||selectedPiece===blackRook_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      console.log("Rook");
      return false ;
    }
    if(!whitemove &&(selectedPiece===blackRook_1Ref.current||selectedPiece===blackRook_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      console.log("Rook");
      return false ;
    }
    if(whitemove && (selectedPiece===whiteKnight_1Ref.current||selectedPiece===whiteKnight_2Ref.current))
    {
      if((FinalPosition.y===InitialPosition.y+80&&FinalPosition.x===InitialPosition.x+160)||(FinalPosition.y===InitialPosition.y-80&&FinalPosition.x===InitialPosition.x+160)||(FinalPosition.y===InitialPosition.y+80&&FinalPosition.x===InitialPosition.x-160)||(FinalPosition.y===InitialPosition.y-80&&FinalPosition.x===InitialPosition.x-160)||(FinalPosition.y===InitialPosition.y+160&&FinalPosition.x===InitialPosition.x+80)||(FinalPosition.y===InitialPosition.y-160&&FinalPosition.x===InitialPosition.x+80)||(FinalPosition.y===InitialPosition.y+160&&FinalPosition.x===InitialPosition.x-80)||(FinalPosition.y===InitialPosition.y-160&&FinalPosition.x===InitialPosition.x-80)){
        
        return true ;
      }
      return false ;
    }
    if(!whitemove && (selectedPiece===blackKnight_1Ref.current||selectedPiece===blackKnight_2Ref.current))
    {
      if((FinalPosition.y===InitialPosition.y+80&&FinalPosition.x===InitialPosition.x+160)||(FinalPosition.y===InitialPosition.y-80&&FinalPosition.x===InitialPosition.x+160)||(FinalPosition.y===InitialPosition.y+80&&FinalPosition.x===InitialPosition.x-160)||(FinalPosition.y===InitialPosition.y-80&&FinalPosition.x===InitialPosition.x-160)||(FinalPosition.y===InitialPosition.y+160&&FinalPosition.x===InitialPosition.x+80)||(FinalPosition.y===InitialPosition.y-160&&FinalPosition.x===InitialPosition.x+80)||(FinalPosition.y===InitialPosition.y+160&&FinalPosition.x===InitialPosition.x-80)||(FinalPosition.y===InitialPosition.y-160&&FinalPosition.x===InitialPosition.x-80)){
       
        return true ;
      }
      return false ;
    }
    if(whitemove && (selectedPiece===whiteBishop_1Ref.current||selectedPiece===whiteBishop_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x))){
       
        return true ;
      }
      return false ;
    }
    if(!whitemove && (selectedPiece===blackBishop_1Ref.current||selectedPiece===blackBishop_2Ref.current))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x))){
        
        return true ;
      }
      return false ;
    }
    if(whitemove && selectedPiece===whiteQueenRef.current)
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        return true ;
      
      }
      return false ;
    }
    if(!whitemove && selectedPiece===blackQueenRef.current)
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        return true ;
      
      }
      return false ;
    }
    if(whitemove && selectedPiece===whiteKingRef.current)
    {
      if(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x){
       
        return true ;
      }
      return false ;
    } 
    if(!whitemove && selectedPiece===blackKingRef.current)
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

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let image_pos = [];
    // Drawing the chessboard
    draw_squares() ;

    // Drawing the pawns

    ctx.drawImage(whitePawn_1Ref.current, 0 * 80, 6* 80, 80, 80);
    image_pos.push({x: 0*80 , y: 6*80 , Image:whitePawn_1Ref.current});
    ctx.drawImage(whitePawn_2Ref.current, 1 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 1*80 , y: 6*80 , Image:whitePawn_2Ref.current});
    ctx.drawImage(whitePawn_3Ref.current, 2 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 2*80 , y: 6*80 , Image:whitePawn_3Ref.current});
    ctx.drawImage(whitePawn_4Ref.current, 3 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 3*80 , y: 6*80 , Image:whitePawn_4Ref.current});
    ctx.drawImage(whitePawn_5Ref.current, 4 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 4*80 , y: 6*80 , Image:whitePawn_5Ref.current});
    ctx.drawImage(whitePawn_6Ref.current, 5 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 5*80 , y: 6*80 , Image:whitePawn_6Ref.current});
    ctx.drawImage(whitePawn_7Ref.current, 6 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 6*80 , y: 6*80 , Image:whitePawn_7Ref.current});
    ctx.drawImage(whitePawn_8Ref.current, 7 * 80, 6 * 80, 80, 80);
    image_pos.push({x: 7*80 , y: 6*80 , Image:whitePawn_8Ref.current});


    ctx.drawImage(blackPawn_1Ref.current, 0 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 0*80 , y: 1*80 , Image:blackPawn_1Ref.current});
    ctx.drawImage(blackPawn_2Ref.current, 1 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 1*80 , y: 1*80 , Image:blackPawn_2Ref.current});
    ctx.drawImage(blackPawn_3Ref.current, 2 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 2*80 , y: 1*80 , Image:blackPawn_3Ref.current});
    ctx.drawImage(blackPawn_4Ref.current, 3 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 3*80 , y: 1*80 , Image:blackPawn_4Ref.current});
    ctx.drawImage(blackPawn_5Ref.current, 4 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 4*80 , y: 1*80 , Image:blackPawn_5Ref.current});
    ctx.drawImage(blackPawn_6Ref.current, 5 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 5*80 , y: 1*80 , Image:blackPawn_6Ref.current});
    ctx.drawImage(blackPawn_7Ref.current, 6 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 6*80 , y: 1*80 , Image:blackPawn_7Ref.current});
    ctx.drawImage(blackPawn_8Ref.current, 7 * 80, 1 * 80, 80, 80);
    image_pos.push({x: 7*80 , y: 1*80 , Image:blackPawn_8Ref.current});


    // Drawing the knights
    ctx.drawImage(whiteKnight_1Ref.current, 1 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 1*80 , y: 7*80 , Image:whiteKnight_1Ref.current});
    ctx.drawImage(whiteKnight_2Ref.current, 6 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 6*80 , y: 7*80 , Image:whiteKnight_2Ref.current});
    ctx.drawImage(blackKnight_1Ref.current, 1 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 1*80 , y: 0*80 , Image:blackKnight_1Ref.current});
    ctx.drawImage(blackKnight_2Ref.current, 6 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 6*80 , y: 0*80 , Image:blackKnight_2Ref.current});







    // Drawing the bishops
    ctx.drawImage(whiteBishop_1Ref.current, 2 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 2*80 , y: 7*80 , Image:whiteBishop_1Ref.current});
    ctx.drawImage(whiteBishop_2Ref.current, 5 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 5*80 , y: 7*80 , Image:whiteBishop_2Ref.current});
    ctx.drawImage(blackBishop_1Ref.current, 2 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 2*80 , y: 0*80 , Image:blackBishop_1Ref.current});
    ctx.drawImage(blackBishop_2Ref.current, 5 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 5*80 , y: 0*80 , Image:blackBishop_2Ref.current});



    // Drawing the rooks
    ctx.drawImage(whiteRook_1Ref.current, 0 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 0*80 , y: 7*80 , Image:whiteRook_1Ref.current});
    ctx.drawImage(whiteRook_2Ref.current, 7 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 7*80 , y: 7*80 , Image:whiteRook_2Ref.current});
    ctx.drawImage(blackRook_1Ref.current, 0 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 0*80 , y: 0*80 , Image:blackRook_1Ref.current});
    ctx.drawImage(blackRook_2Ref.current, 7 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 7*80 , y: 0*80 , Image:blackRook_2Ref.current});



    // Drawing the queens
    ctx.drawImage(whiteQueenRef.current, 3 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 3*80 , y: 7*80 , Image:whiteQueenRef.current});
    ctx.drawImage(blackQueenRef.current, 3 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 3*80 , y: 0*80 , Image:blackQueenRef.current});

    // Drawing the kings
    ctx.drawImage(whiteKingRef.current, 4 * 80, 7 * 80, 80, 80);
    image_pos.push({x: 4*80 , y: 7*80 , Image:whiteKingRef.current});
    ctx.drawImage(blackKingRef.current, 4 * 80, 0 * 80, 80, 80);
    image_pos.push({x: 4*80 , y: 0*80 , Image:blackKingRef.current});

    setImagePositions(image_pos);
    console.log(image_pos); 

    checkImageAtPosition(160, 480); 

  };


  const handleMouseDown = (e) => 

{
     const canvas  = canvasRef.current ;
     const rect = canvas.getBoundingClientRect();
     let x = e.clientX - rect.left; 
     let y = e.clientY - rect.top;
      x = Math.floor(x/80)*80 ;
      y=Math.floor(y/80)*80 ;
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


    // image_pos.find((x)=> x.Image===selectedPiece).x = Math.floor(offsetX/80)*80 ;
    image_pos.find((x)=> x.Image===selectedPiece).x = Math.floor(offsetX/80)*80;

    image_pos.find((x)=> x.Image===selectedPiece).y = Math.floor(offsetY/80)*80 ;
    FinalPosition.x = Math.floor(offsetX/80)*80;
    FinalPosition.y = Math.floor(offsetY/80)*80;

    setFinalPosition({ x: Math.floor(offsetX/80)*80, y: Math.floor(offsetY/80)*80 });
    console.log(FinalPosition)
    if(checklegallity() && !checkinbetween())
    {
      setImagePositions(image_pos);
      setwhitemove(!whitemove );
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
      <h1>Chess</h1>
      <button onClick={drawBoard} disabled={!imagesLoaded}>
        Draw
      </button>
      <canvas ref={canvasRef} width={650} height={650} 
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUp} ></canvas>
    </div>
  );
};

export default Chessboard;
