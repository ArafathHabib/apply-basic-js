//factorial calculator in For Loop

function factorial(n){
    var factorial = 1;
    for ( var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

var calculate = factorial(5);
console.log(calculate);

//Factorial in while loop

function factorial12(num){
    var j = 1;
    var factorial3 = 1;
    while(j <= num){
        factorial3 = factorial3 * j;
        j++;
    }
    return factorial3;
}

var answer = factorial12(5);
console.log(answer);