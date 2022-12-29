function prime(sum){
    var check = Math.sqrt(sum);
    var finalCheck = Math.ceil(check) - check;
    if(finalCheck > 0){
        return false;
    }else{
        return true;
    }
}

var final = prime(81);
console.log(final);