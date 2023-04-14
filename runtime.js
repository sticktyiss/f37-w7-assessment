const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// TINY
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendtiny = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(tinyArray);
let resultsInserttiny = perf.stop();
console.log('Results for the tinyArray');
console.log("insert", resultsInserttiny.preciseWords);
console.log("append", resultsAppendtiny.preciseWords);

// SMALL
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendsmall = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(smallArray);
let resultsInsertsmall = perf.stop();
console.log('Results for the smallArray');
console.log("insert", resultsInsertsmall.preciseWords);
console.log("append", resultsAppendsmall.preciseWords);

// MEDIUM
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendmedium = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(tinyArray);
let resultsInsertmedium = perf.stop();
console.log('Results for the mediumArray');
console.log("insert", resultsInsertmedium.preciseWords);
console.log("append", resultsAppendmedium.preciseWords);

// LARGE
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendlarge = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(largeArray);
let resultsInsertlarge = perf.stop();
console.log('Results for the largeArray');
console.log("insert", resultsInsertlarge.preciseWords);
console.log("append", resultsAppendlarge.preciseWords);