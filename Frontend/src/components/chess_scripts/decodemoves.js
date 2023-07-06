



export const decodemoves = (original, Positions) => { 

    let out = [];
    if(original){
    for (let i in Positions) {
        out.push({x:charCodeAt(Positions[i].pos[0]*70)-charCodeAt('a'),y:Positions[i].pos[1]*70,piece:Positions[i].piece});
    
    }
    }
    else { 
        for (let i in ImagePositions) {
            out.push({pos:s[(ImagePositions[i].x/70)]+(ImagePositions[i].y/70+1).toString(),piece:ImagePositions[i].Image.src.substring(ImagePositions[i].Image.src.length-8,ImagePositions[i].Image.src.length-4)});
    }
    return out ; 
    }    



}

export const codemoves = (original,ImagePositions) => { 

let out = [];
let s = 'abcdefgh' ; 
if(original){
for (let i in ImagePositions) {
    // out.push({pos:s[(ImagePositions[i].x/70)]+(8-ImagePositions[i].y/70).toString(),piece:ImagePositions[i].Image.src.substring(ImagePositions[i].Image.src.length-8,ImagePositions[i].Image.src.length-4)});
    out.push({pos:s[(ImagePositions[i].x/70)]+(8-ImagePositions[i].y/70).toString(),piece:ImagePositions[i].piece})
}
}
else { 
    for (let i in ImagePositions) {
        out.push({pos:s[(ImagePositions[i].x/70)]+(ImagePositions[i].y/70+1).toString(),piece:ImagePositions[i].Image.src.substring(ImagePositions[i].Image.src.length-8,ImagePositions[i].Image.src.length-4)});
}
return out ; 
}    





}


