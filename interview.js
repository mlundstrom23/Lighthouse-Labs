const topic = 'social media';

const interviewAnswer = (topic) => {
    switch (topic) {
        case 'arts funding':
            return "We'll have to get creative!";
        case 'economy':
            return "Time is money.";
        case 'transportation':
            return "It's going to be a long road, so we better get moving.";   
        default:
            return "Yeah, uhhhh idk about no " + topic + ", fam. Ask Trump.";  
    }    
};

console.log(interviewAnswer(topic));