const numberOfPeople = 35;
const distanceTraveled = 5;

// Base price is $1.00
// Charge $0.25/km or distanceTraveled
// If numberOfPeople >= 30, +$0.25

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    const basePrice = 1;
    const distCharge = 0.25 * distanceTraveled;
    const total = basePrice + distCharge

    if (numberOfPeople < 30) {
        return "$" + total.toFixed(2);
    } else if (numberOfPeople >= 30) {
        return "$" + (total + 0.25).toFixed(2);
    }
};

console.log(dynamicPricing(numberOfPeople, distanceTraveled));