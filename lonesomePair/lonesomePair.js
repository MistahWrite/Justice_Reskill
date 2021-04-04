function lonesomeInteger(ints){
    var thisInteger;

    for(var i = 0; i < ints.length; i++){
        thisInteger = ints[i];
        console.log(thisInteger);

        ints.splice(i, 1);
        if(ints.includes(thisInteger)) {
            ints.splice(ints.indexOf(thisInteger), 1);
        } else {
            ints.splice(i, 0, thisInteger);
        }
    }
    return ints;
}

console.log(lonesomeInteger([1,1,2,2,3]));
console.log(lonesomeInteger([1,2,1,2,3,4,5,5]));
console.log(lonesomeInteger([2,2]));