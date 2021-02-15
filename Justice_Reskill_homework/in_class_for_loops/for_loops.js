for(var i = 0; i < 10; i++) {
    console.log("Hello World");
}

for(var i = 100; i < 1000; i+=10) {
    console.log("Hello World " + i);
}

for(var i = 100; i > 80; i=i-4) {
    console.log("Hello World " + i);
}

var string1 = "Javascript Rocks";
for (var i=0; i < string1.length; i+=1) {
    console.log(string1.charAt(i));
}

var array = [1, 2, 3, "test", "Joe"];
console.log(array);

console.log(array.pop ());
console.log(array);

console.log(array.push("Jim"));
console.log(array);

console.log(array.splice(2, 0, "num"));
console.log(array);

console.log(array.shift());
console.log(array);


console.log(array.unshift(1));
console.log(array);

for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(var i = 7; i < 44; i+=5) {
  console.log(i);
}

for(var i = 1000; i > -1000; i-=100) {
    console.log(i);
}

var string1 = "KATAKANA";
for(var i = 0; i < string1.length; i+=1) {
    if (string1[i] == 'A') {
        console.log("Found an " +  string1[i] + "!");
    }
}

//reverse a string
function reverseString(string1) {
    var string2;
    for(var i = string1.length-1; i >= 0; i--) {
        string2 += string1[i];
    }
    console.log(string2)
    return string2;
}

reverseString("A string to reverse");
