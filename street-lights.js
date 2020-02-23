// for lightsOff() function
/*const lights = [
    {
        id: 1,
        on: true
    },
    {
        id: 2,
        on: true
    },
    {
        id: 3,
        on: true
    },
    {
        id: 4,
        on: true
    },
    {
        id: 5,
        on: true
    }
];*/

// for lightsOn() function
/*const lights = [
    {
        id: 1,
        on: false
    },
    {
        id: 2,
        on: false
    },
    {
        id: 3,
        on: false
    },
    {
        id: 4,
        on: false
    },
    {
        id: 5,
        on: false
    }
];*/

// for toggleLights() function
const lights = [
    {
        id: 1,
        on: false
    },
    {
        id: 2,
        on: false
    },
    {
        id: 3,
        on: false
    },
    {
        id: 4,
        on: false
    },
    {
        id: 5,
        on: false
    }
];

const lightsAreOn = false;

const lightsOn = lights => {
    for (const light in lights) {
        lights[light].on = true;
    }
    return lights;
};

const lightsOff = lights => {
    for (const light in lights) {
        lights[light].on = false;
    }
    return lights;
};

const toggleLights = (lights, lightsAreOn) => {
    for (const light in lights) {
        if (lightsAreOn === true) {
            lights[light].on = false;
        } else if (lightsAreOn === false) {
            lights[light].on = true;
        }
    }
    return lights;
};

console.log(toggleLights(lights, lightsAreOn));