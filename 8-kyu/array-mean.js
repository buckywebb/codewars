/* Find Mean
Find the mean (average) of a list of numbers in an array.*/

/* My Answer */

const findAverage = function (nums) {
    let sum = nums.reduce((acc, curVal) => acc + curVal)
    return sum/nums.length
  }


  /* Top Answer */
  const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;