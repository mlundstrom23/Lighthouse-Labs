const bakeryA = [
    'saffron', 
    'eggs', 
    'tomato paste', 
    'coconut', 
    'custard'
];

const bakeryB = [
    'milk', 
    'butter', 
    'cream cheese'
];

const recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
    for (let recipe of recipes) {
        let iA = recipe.ingredients[0];
        let iB = recipe.ingredients[1]; 

        if ((bakeryA.includes(iA) && bakeryB.includes(iB)) || 
            (bakeryA.includes(iB) && bakeryB.includes(iA))) {
            return recipe.name;
        }
    }
};

console.log(chooseRecipe(bakeryA, bakeryB, recipes));