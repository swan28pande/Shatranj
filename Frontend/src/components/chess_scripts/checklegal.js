
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

function checklegallity(whitemove,selectedPiece,InitialPosition,FinalPosition,ImagePositions)
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
      console.log("Rook");
      return false ;
    }
    if(!whitemove &&(selectedPiece==='br_1'||selectedPiece==='br_2'))
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      console.log("Rook");
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
      if(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x){
       
        return true ;
      }
      return false ;
    } 
    if(!whitemove && selectedPiece==='wk_2')
    {
      if(!(InitialPosition.x===FinalPosition.x && InitialPosition.y===FinalPosition.y )&&(Math.abs(FinalPosition.y-InitialPosition.y)===Math.abs(FinalPosition.x-InitialPosition.x)||FinalPosition.y===InitialPosition.y||FinalPosition.x===InitialPosition.x)){
        
        return true ;
      }
      return false ;
    } 

    return false ;
    
  }