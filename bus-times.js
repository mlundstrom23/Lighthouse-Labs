const buses = {
    pickadilly: {
        distance: 10,
        speed: 5
    },
    uptown: {
        distance: 13,
        speed: 10
    }
};

const busTimes = buses => {
    for (const bus in buses) {
        buses[bus] = (buses[bus].distance/buses[bus].speed);
    } 
    return buses;
};


console.log(busTimes(buses));