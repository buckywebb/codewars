/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

/* My Answer */
const descendingOrder = n => Number(n.toString().split('').sort((a, b) => b - a).join(''))


/* Top Answer */
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }