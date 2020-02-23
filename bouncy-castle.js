const sphere = {
    type: 'sphere',
    radius: 2
};

const prism = {
    type: 'prism',
    height: 3,
    width: 4,
    depth: 5
};

const largeSphere = {
    type: 'sphere',
    radius: 40
};

const smallSphere = {
    type: 'sphere',
    radius: 10
};

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
};

const duck = [
    largeSphere,
    smallSphere,
    cone
];


const PI = 3.14159;

const sphereVolume = (radius) => {
    if (sphere.type === 'sphere') {
        const exp = Math.pow(radius, 3);
        return ((4/3)*PI*exp); 
    }
};

const coneVolume = (radius, height) => {
    if (cone.type === 'cone') {
        const exp = Math.pow(radius, 2);
        return (PI*exp*(height/3));
    }
};

const prismVolume = (height, width, depth) => {
    if (prism.type === 'prism') {
        return height*width*depth;
    }
};

const totalVolume = (solids) => {
    let total = 0;
    for (const solid of solids) {  
        const s = sphereVolume(solid.radius);
        const c = coneVolume(solid.radius, solid.height);
        const p = prismVolume(solid.height, solid.width, solid.depth);
        if (solid.type === 'sphere') {
            total += s;
        } else if (solid.type === 'cone') {
            total += c;
        } else if (solid.type === 'prism') {
            total += p;
        }                    
    }
    return total;
};

console.log(totalVolume(duck));