//0! = 1
//2! = 1*2
//3! = 1*2*3
//4! = 1*2*3*4
//5! = 1*2*3*4*5
//6! = 5!*6
//6! = (6-1)!*6
//n! = (n-1)!*6

function factorial(n){
    if(n == 0){
        return 1;
    } else {
        return n *  factorial(n-1);
    }
}

var calc = factorial(10);
console.log(calc);