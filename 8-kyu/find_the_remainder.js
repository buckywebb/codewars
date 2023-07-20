/* Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.*/

/*My Answer*/

function remainder(n, m){
    if (n >= m && m !== 0){
      return n % m
    }else if(m >= n && n !== 0){
      return m % n
    }else {
      return NaN
    }
  }

  /*Top Answer

  function remainder(a, b){
    return a > b ? a % b : b % a;
  }

  */