const samples = [
    'clean', 
    'clean', 
    'dirty', 
    'clean', 
    'dirty', 
    'clean', 
    'clean', 
    'dirty', 
    'clean', 
    'dirty'
];
    
const threshold = 0.3;

const checkAir = (samples, threshold) => {
    const dirty = samples.filter((d) => (d === 'dirty')).length;
    if ((dirty/samples.length) > threshold) {
        return "Polluted";
    } else {
        return "Clean";
    }
};

console.log(checkAir(samples, threshold));