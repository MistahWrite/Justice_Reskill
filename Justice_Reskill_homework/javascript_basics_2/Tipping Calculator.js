//Tipping Calculator
function TippingCalculator(meal, tip_percent) {
    console.log("Meal: " + meal + " + Tip: " + tip_percent + "%");
    var tip = meal * (tip_percent * 0.01);

    if (tip_percent <= 5) {
        console.log("Less than 5%: 'You are an awful tipper'");
    } else if (tip_percent >= 5 && tip_percent <= 10) {
        console.log("Between 5% and 10%: 'You are an ok tipper!'");
    } else if (tip_percent >= 10 && tip_percent <= 20) {
        console.log("Between 10% and 20%: 'You are a good tipper!'");
    } else if (tip_percent >= 20) {
        console.log("Greater than 20%: 'You are a great tipper!'");
    }
    return meal + tip;
}

// $15.00 meal, 10% tip
console.log("Total Meal Cost + Tip = " + TippingCalculator(15.00, 10));
console.log("Total Meal Cost + Tip = " + TippingCalculator(35.00, 5));
console.log("Total Meal Cost + Tip = " + TippingCalculator(150.00, 15));
console.log("Total Meal Cost + Tip = " + TippingCalculator(54.00, 20));
console.log("Total Meal Cost + Tip = " + TippingCalculator(74.00, 25));