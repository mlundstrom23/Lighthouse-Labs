const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
];

const metric = 'plumpness'

const judgeVegetable = (vegetables, metric) => {
    var highest = 0;
    var index;
    for (i = 0; i < vegetables.length; i++) {
        if (vegetables[i][metric] > highest) {
            highest = vegetables[i][metric];
            index = i;
        }
    }
    return vegetables[index].submitter;
};

console.log(judgeVegetable(vegetables, metric));