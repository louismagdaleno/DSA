//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]
module.exports = {
    uniqSort,
    factorial,
    times10,
    memoTimes10
};

function uniqSort(arr) {
    const breadcrumbs = new Set();

    for (let val of arr){
        breadcrumbs.add(val);
    }
    
    return [...breadcrumbs].sort((a, b) => a - b);
};

function factorial(n){

};

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
function times10(n){
    return n * 10;
};


// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

function memoTimes10(n){
    if (cache[n]){
        return cache[n];
    } else {
        cache[n] = times10(n);
    }

    return cache[n];
};
