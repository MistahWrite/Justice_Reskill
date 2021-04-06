function timesTable() {
    for(let i = 1; i <= 12; i++) {
        for(let j = 1; j <= 12; j++) {
            let result = i * j;
            console.log(i + " * " + j + " = " + result);
        }
    }
}
timesTable();