const interviews = [
    'smart city', 
    'rebuild the lighthouse', 
    'arts funding', 
    'transportation',
    'arts funding', 
    'rebuild the lighthouse', 
    'sports funding', 
    'tax cuts', 
    'smart city',
    'arts funding',
    'smart city'
];

const termTopics = (interviews) => {
    const array = [0, 0, 0];
    for (i = 0; i < interviews.length; i++) { 
        if (interviews[i] === 'smart city') {
            array[0]++;  
        } else if (interviews[i] === 'arts funding') {
            array[1]++;
        } else if (interviews[i] === 'transportation') {
            array[2]++;
        }
    }
    return array;   
};

console.log(termTopics(interviews));