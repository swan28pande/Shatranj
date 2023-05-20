import React, { useRef, useEffect, useState } from "react";
import WhitePawn from '../assets/wpawn.svg';
import BlackPawn from '../assets/bpawn.svg';
import WhiteKnight from '../assets/wknight.svg';
import BlackKnight from '../assets/bknight.svg';
import WhiteBishop from '../assets/wbishop.svg';
import BlackBishop from '../assets/bbishop.svg';
import WhiteRook from '../assets/wrook.svg';
import BlackRook from '../assets/brook.svg';
import WhiteQueen from '../assets/wqueen.svg';
import BlackQueen from '../assets/bqueen.svg';
import WhiteKing from '../assets/wking.svg';
import BlackKing from '../assets/bking.svg';


const Chessboard = () => {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const whitePawnRef = useRef(null);
  const blackPawnRef = useRef(null);
  const whiteKnightRef = useRef(null);
    const blackKnightRef = useRef(null);
    const whiteBishopRef = useRef(null);
    const blackBishopRef = useRef(null);
    const whiteRookRef = useRef(null);
    const blackRookRef = useRef(null);
    const whiteQueenRef = useRef(null);
    const blackQueenRef = useRef(null);
    const whiteKingRef = useRef(null);
    const blackKingRef = useRef(null);

    const [selectedPiece, setSelectedPiece] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   
    let ImagePositions = [] ; 


  useEffect(() => {
    const whitePawnImage = new Image();
    whitePawnImage.src = WhitePawn;
    whitePawnImage.onload = () => {
      whitePawnRef.current = whitePawnImage;
      checkAllImagesLoaded();
    };

    const blackPawnImage = new Image();
    blackPawnImage.src = BlackPawn;
    blackPawnImage.onload = () => {
      blackPawnRef.current = blackPawnImage;
      checkAllImagesLoaded();
    };

    const whiteKnightImage = new Image();
    whiteKnightImage.src = WhiteKnight;
    whiteKnightImage.onload = () => {
        whiteKnightRef.current = whiteKnightImage;
        checkAllImagesLoaded();
        }
    const blackKnightImage = new Image();
    blackKnightImage.src = BlackKnight;
    blackKnightImage.onload = () => {
        blackKnightRef.current = blackKnightImage;
        checkAllImagesLoaded();
        }
    const whiteBishopImage = new Image();
    whiteBishopImage.src = WhiteBishop;
    whiteBishopImage.onload = () => {
        whiteBishopRef.current = whiteBishopImage;
        checkAllImagesLoaded();
        }
    const blackBishopImage = new Image();
    blackBishopImage.src = BlackBishop;
    blackBishopImage.onload = () => {
        blackBishopRef.current = blackBishopImage;
        checkAllImagesLoaded();
        }
    const whiteRookImage = new Image();
    whiteRookImage.src = WhiteRook;
    whiteRookImage.onload = () => {
        whiteRookRef.current = whiteRookImage;
        checkAllImagesLoaded();
        }
    const blackRookImage = new Image();
    blackRookImage.src = BlackRook;
    blackRookImage.onload = () => {
        blackRookRef.current = blackRookImage;
        checkAllImagesLoaded();
        }
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

//   const getSelectedPiece(x,y) => {

    
//   }

//   const handleMouseDown = (e) => 

// {
//      const canvas  = canvasRef.current ;
//      const rect = canvas.getBoundingClientRect();
//      let x = e.clientX - rect.left; 
//      let y = e.clientY - rect.top;

//      const selectedpiece  = getSelectedPiece(x,y); 
//      setSelectedPiece(piece); 



// } ; 


  const checkAllImagesLoaded = () => {
    if (whitePawnRef.current && blackPawnRef.current && whiteKnightRef.current && blackKnightRef.current && whiteBishopRef.current && blackBishopRef.current && whiteRookRef.current && blackRookRef.current && whiteQueenRef.current && blackQueenRef.current && whiteKingRef.current && blackKingRef.current) {
      setImagesLoaded(true);
    }
  };



  function drawBoard() {
    if (!imagesLoaded) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

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

    // Drawing the pawns
    let j = 6;
    for (let i = 0; i < 8; i++) {
      ctx.drawImage(whitePawnRef.current, i * 80, j * 80, 80, 80);
      ImagePositions.push({x: i*80 , y: j*80 , Image:whitePawnRef.current  });

    }

    j = 1;
    for (let i = 0; i < 8; i++) {
      ctx.drawImage(blackPawnRef.current, i * 80, j * 80, 80, 80);
      ImagePositions.push({x: i*80 , y: j*80 , Image:blackPawnRef.current});
    }

    // Drawing the knights
    ctx.drawImage(whiteKnightRef.current, 1 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 1*80 , y: 7*80 , Image:whiteKnightRef.current});
    ctx.drawImage(whiteKnightRef.current, 6 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 6*80 , y: 7*80 , Image:whiteKnightRef.current});
    ctx.drawImage(blackKnightRef.current, 1 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 1*80 , y: 0*80 , Image:blackKnightRef.current});
    ctx.drawImage(blackKnightRef.current, 6 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 6*80 , y: 0*80 , Image:blackKnightRef.current});

    // Drawing the bishops
    ctx.drawImage(whiteBishopRef.current, 2 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 2*80 , y: 7*80 , Image:whiteBishopRef.current});
    ctx.drawImage(whiteBishopRef.current, 5 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 5*80 , y: 7*80 , Image:whiteBishopRef.current});
    ctx.drawImage(blackBishopRef.current, 2 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 2*80 , y: 0*80 , Image:blackBishopRef.current});
    ctx.drawImage(blackBishopRef.current, 5 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 5*80 , y: 0*80 , Image:blackBishopRef.current});

    // Drawing the rooks
    ctx.drawImage(whiteRookRef.current, 0 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 0*80 , y: 7*80 , Image:whiteRookRef.current});
    ctx.drawImage(whiteRookRef.current, 7 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 7*80 , y: 7*80 , Image:whiteRookRef.current});
    ctx.drawImage(blackRookRef.current, 0 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 0*80 , y: 0*80 , Image:blackRookRef.current});
    ctx.drawImage(blackRookRef.current, 7 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 7*80 , y: 0*80 , Image:blackRookRef.current});

    // Drawing the queens
    ctx.drawImage(whiteQueenRef.current, 3 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 3*80 , y: 7*80 , Image:whiteQueenRef.current});
    ctx.drawImage(blackQueenRef.current, 3 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 3*80 , y: 0*80 , Image:blackQueenRef.current});

    // Drawing the kings
    ctx.drawImage(whiteKingRef.current, 4 * 80, 7 * 80, 80, 80);
    ImagePositions.push({x: 4*80 , y: 7*80 , Image:whiteKingRef.current});
    ctx.drawImage(blackKingRef.current, 4 * 80, 0 * 80, 80, 80);
    ImagePositions.push({x: 4*80 , y: 0*80 , Image:blackKingRef.current});

    console.log(ImagePositions); 

  }

  return (
    <div>
      <h1>Chess</h1>
      <button onClick={drawBoard} disabled={!imagesLoaded}>
        Draw
      </button>
      <canvas ref={canvasRef} width={1000} height={700}></canvas>
    </div>
  );
};

export default Chessboard;
