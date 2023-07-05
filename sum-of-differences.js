/* Your task is to sum the differences between consecutive pairs in the array in descending order. */

/* Answer */

function sumOfDifferences(arr) {
    //sort the array
    let sorted = arr.sort((a,b) => b-a)
    
    // get the differences of the pairs
    let diffs = []
    for (let i = 0; i < sorted.length - 1; i++){
      diffs.push(sorted[i] - sorted[i+1])
    }
    
    // sum the differences
    let sum = 0
    diffs.forEach(num => {
      sum += num
    })
    
    // return the sum
    return sum
  }
  