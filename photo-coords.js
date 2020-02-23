const moves = [
    'north', 
    'north', 
    'west', 
    'west', 
    'north', 
    'east',
    'north'
]; 

const finalPosition = (moves) => {
    let x = 0;
    let y = 0;
    
    const north = moves.filter((m) => (m === 'north')).length;
        y = north;
    const west = moves.filter((m) => (m === 'west')).length;
        x = -west;
    const east = moves.filter((m) => (m === 'east')).length; 
        x = east + (-west);  
    const south = moves.filter((m) => (m === 'south')).length; 
        y = north + (-south);    
        return [x, y];    
};

console.log(finalPosition(moves));