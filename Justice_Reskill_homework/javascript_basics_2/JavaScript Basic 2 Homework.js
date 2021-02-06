/*
A=100-90
B=89-80
C=79-70
D= 69-60
F= 59-0
*/

function Grade(value) {
    console.log (value);

    if (value <= 100 && value >= 90) {
        return "A";
    } else if (value <= 89 && value >= 80) {
        return "B";
    } else if (value <= 79 && value >= 70) {
        return "C";
    } else if (value <= 69 && value >= 60) {
        return "D";
    } else if (value <= 59 && value >= 0) {
        return "F";
    } else {
        return "ERROR: Grade() function must be passed only a number between 0 and 100."
    }
}
console.log(Grade(94));
console.log(Grade(84));
console.log(Grade(74));
console.log(Grade(34));
console.log(Grade(64));
console.log(Grade(24));