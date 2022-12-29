function isPrime(n){
    for(i = 2; i < n;i ++){
        if(n % i == 0){
            return 'Not a Prime number';
        }
    }
    return 'Your number is a prime number';
}

var result = isPrime(5);

console.log(result);