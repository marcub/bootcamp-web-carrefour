const multi1 = {
    value: 4,
}

const multi2 = {
    value: 2,
}


function mapcomthis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const num = [1,4,5,8];

console.log('Quando this -> multi1, temos:', mapcomthis(num,multi1));
console.log('Quando this -> multi2, temos:', mapcomthis(num,multi2));
