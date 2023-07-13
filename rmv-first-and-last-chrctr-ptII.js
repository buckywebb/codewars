/*You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).*/

/* My Answer */

function array(string) {
    let arr = string.split(',')
    if (arr.length <= 2) {
        return null
    } else {
        arr.shift()
        arr.pop()
        let answer = arr.join(' ')
        return answer.trim()
    }
}


/* Top Answer */
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }