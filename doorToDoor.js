const volunteers = [
    'Sally',
    'Jake',
    'Brian',
    'Hamid'
];

const neighbourhoods = [
    'Central Valley',
    'Big Mountain',
    'Little Bridge',
    'Bricktown',
    'Brownsville',
    "Paul's Boutique",
    'Clay Park',
    'Fox Nest',
    'Brownsville',
    "Paul's Boutique",
    'Clay Park',
    'Fox Nest'
];

const doorToDoor = (volunteers, neighbourhoods) => {
    var divide = neighbourhoods.length / volunteers.length;

    if (divide % 1 === 0) {
        return divide;
    } else {
        return;
    }

};

console.log(doorToDoor(volunteers, neighbourhoods));