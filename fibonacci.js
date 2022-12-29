function fibo(sum){
    var numbers = [0,1];
    for(var i = 2; i <= sum; i++){
        numbers[i] = numbers[i-1] + numbers[i-2];
    }
    return numbers;
}
var result = fibo(10);

console.log(result);