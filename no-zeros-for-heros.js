/* Numbers ending with zeros are boring. 
They might be fun in your world, but not here. 
Get rid of them. Only the ending ones.*/

/*Answer(did not solve, had to look at solution)*/

function noBoringZeros(n){
    while(n % 10 === 0 && n != 0){
        n /= 10
        console.log(n) // just to show progress of 0s being removed
    }
    return n
}




//while number is divisible by 10 AND number does not equal zero, divide n by 10 to remove the last 0
