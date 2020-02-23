const bins = {
    waste: 4,
    recycling: 2,
    compost: 5
};

const trash = 'compost';

const smartGarbage = (trash, bins) => {
    switch (trash) {
        case 'waste':
            bins.waste++;
            break;
        case 'recycling':
            bins.recycling++;
            break;
        case 'compost':
            bins.compost++;     
            break;   
    }
    return bins;
};

console.log(smartGarbage(trash, bins));