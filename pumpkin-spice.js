// The first element should represent how many slices of 
// pumpkin pie the client can buy

// The second element should represent how many pumpkin spice 
// lattes the client can buy

// The third element should represent how many pumpkin spice 
// macarons the client can buy

// The fourth element should represent how many grams of 
// pumpkin spice the client will be buying


// A slice of pumpkin pie costs $5 each, and include a 
// whopping 30g of pumpkin spice

// Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice

// Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

const money = 7;

const pumpkinSpice = (money) => {
    const spiceyArr = [0, 0, 0, 0];

    while (money >= 5) {
        spiceyArr[0]++;
        spiceyArr[3] += 30;
        money -= 5;
    } 

    while (money >= 3) {
        spiceyArr[1]++;
        spiceyArr[3] += 15;
        money -= 3;
    } 
    
    while (money >= 1) {
        spiceyArr[2]++;
        spiceyArr[3] += 3;
        money -= 1;
    } 

    return spiceyArr; 
};

console.log(pumpkinSpice(money));