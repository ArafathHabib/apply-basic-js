
function leapYear(year){
    let check = year % 4;
    let check2 = year % 100;
    let check3 = year % 400;
    if(check != 0){
        console.log("It is not a leapYear");
    }else if(check == 0 && check2 != 0){
        console.log("It is a leapYear");
    }else if (check == 0 && check2 ==0 && check3 != 0){
        console.log("It is not a leap year")
    }else{
        console.log("It is a leapYear");
    }
}

let inputYear = leapYear(2000);
console.log(inputYear);