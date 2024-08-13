'use strict'

 let price = 12 ;
 
    for (let i = 0.1; i <= 1; i += 0.1) {
        console.log(`${i.toFixed(1)} kg konfet narxi: ${(i * price).toFixed(2)}`);
    }
