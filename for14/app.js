'use strict'


let n = 20;
    let sum = 0;
    let sign = 1;
    for (let i = 1; i <= n; i++) {
        sum += sign * i;
        sign *= -1;
    }
    console.log(`Yig'indi: ${sum}`);






