const color1 = 100;

const festivalColours = (color1) => {
    const color2 = color1 + 150;
    const color3 = color1 + 210;

    return [color2, color3];
};

console.log(festivalColours(color1));