
let whitepieces = ['wr_1','wn_1','wb_1','wq_1','wk_1','wb_2','wn_2','wr_2','wp_1','wp_2','wp_3','wp_4','wp_5','wp_6','wp_7','wp_8'] ;


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


function checkinbetween(selectedPiece,InitialPosition,FinalPosition,ImagePositions)
{
  if(selectedPiece==='wp_1'||selectedPiece==='wp_2'||selectedPiece==='wp_2'||selectedPiece==='wp_3'||selectedPiece==='wp_4'||selectedPiece==='wp_5'||selectedPiece==='wp_6'||selectedPiece==='wp_7'||selectedPiece==='wp_8')
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
  if(selectedPiece==='bp_1'||selectedPiece==='bp_2'||selectedPiece==='bp_2'||selectedPiece==='bp_3'||selectedPiece==='bp_4'||selectedPiece==='bp_5'||selectedPiece==='bp_6'||selectedPiece==='bp_7'||selectedPiece==='bp_8')
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
  if(selectedPiece==='wr_1'||selectedPiece==='wr_2'||selectedPiece==='br_2'||selectedPiece==='br_2')  {
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
  if(selectedPiece==='wk_1'.current||selectedPiece==='bk_1'.current)
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