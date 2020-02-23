const name = 'Jake';

const unregisteredVoters = [
    'Jake', 
    'Alanna', 
    'Bradley', 
    'Stephanie'
];

const registerToVote = (name, unregisteredVoters) => {
    for (i = 0; i < unregisteredVoters.length; i++) {
        if (unregisteredVoters[i] === name) {
            unregisteredVoters.splice(i, 1);
            return unregisteredVoters;
        }
    }
};

console.log(unregisteredVoters.splice(0, 1))
//console.log(registerToVote(name, unregisteredVoters));
