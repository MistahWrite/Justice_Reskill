
//1. Create a function that adds up the integers in the following array var numbers = [10,20,30,40,50]. Do not use any array prototype methods, this must be completed using for loops and variables.
function addNumbers(){
    var numbers = [10,20,30,40,50];
    var sum=0;
    for(var i=0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(" + " + numbers[i] + " = " + sum)
    }
    return sum;
}
console.log(addNumbers());

//2. Create a function that reverses the following array - var array1 = [0,1,2,3,4,5,6,7,8,9,10]. Do not use array prototype method .reverse()
function reverseArray(){
    var array1 = [0,1,2,3,4,5,6,7,8,9,10];
    var reverseArray = [];
    for(var i=array1.length-1; i >= 0; i--) {
        reverseArray.push(array1[i]);
        console.log(" + " + array1[i])
    }
    return reverseArray;
}
console.log(reverseArray());

//3. Implement Fizz Buzz. Loop from 1 to 100. If the number is divisible by both 3 and 5, print "fizzbuzz". Otherwise, if the number is divisible by 3, print "fizz", or, if the number is divisible by 5, print "buzz". If none of the above are true, print the number. This is a very common interview question! Try completing this on your own before looking up the answer.
function FizzBizz() {
    for(var i = 1; i < 100; i++) {
        if(i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("fizzbizz (" + i + ")");
            } else {
                console.log("fizz");
            }
        } else if (i % 5 == 0) {
            console.log("bizz");
        } else {
            console.log(i);
        }
    }
}
FizzBizz();

//4. Challenge: Write a JavaScript program to construct the following pattern (see below), using a nested for loop.
function pattern() {
    var char = "*"
    var string = "";
    for(var i = 0; i < 5; i++) {
        string += char;
        console.log(string);
    }
}
pattern();