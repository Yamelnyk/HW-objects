'use strict';

//  задача 1

function durationBetweenDates(start, end, type) {

        const difference = Date.parse(end) - Date.parse(start);
    switch (type) {
        case 'seconds': 
            return Math.abs(difference / 1000) + ' ' + 'seconds';
            break;   
        case 'minutes':
            return Math.abs(difference / 60000) + ' ' + 'minutes';
            break;
        case 'hours':
            return Math.abs(difference / 60000 / 60) + ' ' + 'hours';
            break;
        case 'days':
            return Math.abs(difference / 60000 / 60 / 24) + ' ' + 'days';
            break;   
    } 
   }
   
   durationBetweenDates('31 Jan 2022', '03 Aug 19803 Feb 20215', 'days'); 
   console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));


// задача 2

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
     };

    function optimizer(priceData) {
        for (let key in priceData) {
            if(typeof key === 'string'){
                priceData[key.toLowerCase()] = priceData[key];
              delete priceData[key];
            }
        }
        for (let price in priceData) {
            if(typeof priceData[price] === 'string') {
                priceData[price] = Number(priceData[price]).toFixed(2);
            }
        }
    }

    optimizer(priceData);
    console.log(priceData);


    // задача 3

function recursiveOddSumTo(number) {
    if (number <= 0){
        return 0;
    }
    if (number % 2 === 0){
        return recursiveOddSumTo(number-1); 
    }
        return number + recursiveOddSumTo(number-1); 
};
      
console.log(recursiveOddSumTo(1)) 
console.log(recursiveOddSumTo(10)) 
    
    

function iterativeOddSumTo(number) {
    let result = 0;
    for(let i = 0; i <= number; i++){
        if(i % 2 === 0) {
            continue;
        }
        else {
            result = result + i;
        }
    }
    return result
};
console.log(iterativeOddSumTo(1)) 
console.log(iterativeOddSumTo(10)) 



