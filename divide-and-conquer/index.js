module.exports = {
    linearSearch
};

function linearSearch(list, item){
    let index = -1;

    list.forEach((listItem, i) => {
        if (listItem === item){
            index = i;
        }
    })
}

function bubbleSort