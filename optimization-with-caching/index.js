//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]
module.exports = {
    uniqSort
};

function uniqSort(arr) {
    const breadcrumbs = new Set();

    for (let val of arr){
        breadcrumbs.add(val);
    }
    
    return [...breadcrumbs].sort((a, b) => a - b);
};

