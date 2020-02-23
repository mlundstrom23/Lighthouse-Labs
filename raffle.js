

/*const countTickets = (tickets) => {
    var red = 0;
    var green = 0;
    var blue = 0;

    for (i = 0; i < tickets.length; i++) {
        if (tickets[i] === 'red') {
            red++;
        } else if (tickets[i] === 'green') {
            green++;
        } else if (tickets[i] === 'blue') {
            blue++;
        }
    }

    let ticketObj = { red, green, blue };

    return ticketObj;
}
  
const bestOdds = (tickets, raffleEntries) => {
    var red = (countTickets(tickets).red/raffleEntries.red);
    var green = (countTickets(tickets).green/raffleEntries.green);
    var blue = (countTickets(tickets).blue/raffleEntries.blue);

    let probObj = { red, green, blue };

    // Helper function to return name/property or Object.key of probObj based on maximum value 
    const getMax = (object) => {
        return Object.keys(object).filter(i => {
             return object[i] == Math.max.apply(null, 
             Object.values(object));
       });
    };

    return "You have the best odds of winning the " + getMax(probObj) + " raffle.";
};*/

const tickets = [
    'red',
    'red',
    'green',
    'blue',
    'green'
];
  
const raffleEntries = {
  red: 40,
  green: 30,
  blue: 15
};

// An easier way:

// cv means current value
const countTickets = (tickets) => {
    return tickets.reduce((acc, cv) => {
      return {...acc, [cv]: acc[cv] + 1 }
    }, { red: 0, green: 0, blue: 0 })
};
  
const bestOdds = (tickets, raffleEntries) => {
  const ticketCounts = countTickets(tickets);
  const winningColor = Object.keys(ticketCounts).reduce((acc, cv) => {
    return ticketCounts[cv] / raffleEntries[cv] > ticketCounts[acc] / raffleEntries[acc] ? cv : acc;
  });
  return `You have the best odds of winning the ${winningColor} raffle.`
};

console.log(bestOdds(tickets, raffleEntries));