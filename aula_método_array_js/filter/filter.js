function filter (arr) {
    return arr.filter(function(item){
        return item%2 == 0
    });
}

const array_num=[2,5,8,94,25];

console.log(filter(array_num));
console.log(array_num);

