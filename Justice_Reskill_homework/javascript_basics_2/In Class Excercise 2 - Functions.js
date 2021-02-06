// 1) Write a function that does not take any arguments, and it logs 
//"Wow, it worked!" to the console
function WowItWorked(){
    console.log("Wow, it worked!");
}
WowItWorked();

//2) Write a function that does not take any arguments, and it returns 
//your favorite movie as a string
// console.log the result
function MyFavoriteMovie(){
    return "2 Fast 2 Furious";
}
console.log(MyFavoriteMovie());

// 3) Write a function that takes one argument, a number, and 
// multiplies that number by 100
// console.log the result
function multiplyBy100(num1) {
    return num1 * 100;
}
console.log(multiplyBy100(15));

// 4) Write a function that takes one argument, your name, and puts 
// your name in the middle of a sentence
// console.log the result
function yourName(name){
    return "How are you doing today " + name + "?";
}
console.log(yourName("Chad Jay Harrington"));

// 5) Write a function that takes three numbers as arguments and 
// returns the largest number
// The numbers should be able to be specified in any order
function largestNum(num1, num2, num3) {
    console.log(num1 + ", " + num2 + ", " + num3);
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    } 
}
console.log(largestNum(5, 10, 11));
console.log(largestNum(15, 10, 11));
console.log(largestNum(45, 10, 114));
console.log(largestNum(54, 104, 11));

// 6) What do you think will happen here? Anything bad?
function conCat(first, second, third) {
    return first + second + third;
  }
  
  var result = conCat("What ","gives? ");
  
  console.log(result);
  
  // Are you surprised?
// The function is supposed to take 3 arguments and only 2 are passed.
// I am surprised that it is called and does run, but not surprised that
// undefined is output.  I guess it isn't that surprising that it does run
// and instead lets us know that there is an undefined value for third.
// Considering that javascript uses function names as a variable name that
// it doesn't care about the discrepancy between argument numbers.
  