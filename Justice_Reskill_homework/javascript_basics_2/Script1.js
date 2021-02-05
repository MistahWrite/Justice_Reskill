var param1 = 5;
var param2 = 12;

var string1 = "Hello ";
var string2 = "World";
var string3 = string1 + string2;

var stringA = "My favorite food is ";
var stringB = "Mint Cliff Bars.";
var stringC = stringA + stringB;

function addNums(num1, num2) {
    var result = num1 + num2;
    console.log("Adding param1 " + param1 + " + param2: " + param2 + " = " + result);
    return result;
}

function subtractNums(num1, num2) {
    var result = num1 - num2;
    console.log("Subtracting param1: " + param1 + " - param2: " + param2 + " = " + result);
    return result;
}

function multiplyNums(num1, num2) {
    var result = num1 * num2;
    console.log("Multiplying param1 " + param1 + " * param2: " + param2 + " = " + result);
    return result;}

function divideNums(num1, num2) {
    var result = num1 / num2;
    console.log("Dividing param1 " + param1 + " / param2: " + param2 + " = " + result);
    return result;
}

//Tipping Calculator
function TippingCalculator(money, percent) {
    return money * 1 + money * percent;
}
console.log("param1: " + param1);
console.log("param2: " + param2);

console.log(addNums(param1, param2));
console.log(subtractNums(param1, param2));
console.log(multiplyNums(param1, param2));
console.log(divideNums(param1, param2));

console.log(string3);
console.log(stringC);
