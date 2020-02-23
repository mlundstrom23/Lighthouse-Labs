const name = 'Sally';

const votes = [
    0, //   Tim - 0 
    2, // Sally - 1
    1  //  Beth - 2
];

const castVote = (name, votes) => {
    switch (name) {
        case 'Tim':
            return [votes[0] + 1, votes[1], votes[2]];
        case 'Sally':
            return [votes[0], votes[1] + 1, votes[2]];  
        case 'Beth':
            return [votes[0], votes[1], votes[2] + 1];
        default:
            return;              
    }
};

console.log(castVote(name, votes));