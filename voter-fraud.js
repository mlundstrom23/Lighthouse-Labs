const voter_signatures = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Faker McFakerson',
    'Jane Janesford'
];

const voter_ids = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
];

const voterTurnout = (voter_signatures, voter_ids) => {
    if (voter_signatures.length === voter_ids.length) {
        const comparison = voter_signatures.every((voter, index) => {
            return voter === voter_ids[index]
        });

        if (comparison === true) {
            return "All clear, we can count the votes!"
        } else {
            return "FRAUD!"
        }
    } else {
        return false;
    }
};    

console.log(voterTurnout(voter_signatures, voter_ids));