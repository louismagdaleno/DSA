module.exports = {
    linearSearch,
    binarySearch
};

function linearSearch(list, item){
    let index = -1;

    list.forEach((listItem, i) => {
        if (listItem === item){
            index = i;
        }
    })

    return index;
}

// create min and max variables to hold indices
// create midpoint variable to hold midpoint index at each step

// while min <= nax

// update midpoint to be = min + max / 2 rounded down

// if the value of list at midpoint is the item, return it
// else check if value of list at midpoint is < item, increment min to be midpoint + 1
// else set max to be midpoint - 1
// if we reach the end of the function, there is no match, return -1
function bSearch(list, item){
    let min = 0;
    let max = list.length - 1;
    let midpoint;

    while ( min <= max){
        midpoint = Math.floor((min + max) / 2);

        if (list[midpoint] === item){
            return item;
        } else {
            if (list[midpoint] < item){
                min = midpoint + 1;
            } else {
                max = midpoint - 1;
            }
        }
    }

    return -1;
}

function binarySearch(list, item){
    let min = 0;
    let max = list.length - 1;

    let guess;

    while ( min <= max){
        guess = Math.floor((min + max) / 2);

        if (list[guess] === item){
            return guess;
        } else {
            if (list[guess] < item){
                min = guess + 1;
            } else {
                max = guess - 1;
            }
        }
    }

    return -1;
}