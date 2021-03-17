function getMiddle(array1) {
    var array2 = [];
    for (var i = 0; i < array1.length; i++) {
        if (i+1 == array1.length) {
            /* do nothing */
        } else {
            if(i >= 1) {
                array2[i-1] = array1[i];
            }
        }

    }
    return array2;
}

console.log(getMiddle([1,2,3,4]));
console.log(getMiddle(['me', 'you', 'them', 'us', 'who']));