function consanantCount(str) {
    var count = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'A') {
            /* do nothing */
        } else if(str[i] == 'e' || str[i] == 'E') {
            /* do nothing */
        } else if(str[i] == 'i' || str[i] == 'I') {
            /* do nothing */
        } else if(str[i] == 'o' || str[i] == 'O') {
            /* do nothing */
        } else if(str[i] == 'u' || str[i] == 'U') {
            /* do nothing */
        } else if(str[i] == ' ' || str[i] == ' ') {
            /* do nothing */
        } else {
            count++;
        }
    }
    console.log(count);
    return count;
}

consanantCount("Hello whats up friend");
consanantCount("Zebras are fun");
